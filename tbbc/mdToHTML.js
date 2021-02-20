$(window).on("load", () => {
    $("body").on("load", async () => {
        // md -> html
        $(".page-md").html(() => new showdown.Converter().makeHtml($(".page-md").html()));
        // image captions
        $("p:not(:has(> img))").css("maxWidth", "600px");
        let em = $("p:has(img + em) em")
        $(em).wrap('<div class="image-caption"></div>');
        $(em).css({
            "color": "rgb(238, 238, 238)"
        })
        $(".image-caption").css({
            "padding": "1rem",
            "backgroundColor": "rgb(63, 63, 66)"
        })
        // top stories
        let container = document.createElement("div");
        container.classList.add("d-flex", "flex-column")
        let topSeparator = document.createElement("div");
        topSeparator.classList.add("w-100");
        topSeparator.style.height = "2px";
        topSeparator.style.backgroundColor = "#bb1919";
        topSeparator.style.marginBottom = "1rem";
        container.appendChild(topSeparator);

        let topHeader = document.createElement("h3");
        topHeader.appendChild(document.createTextNode("Top stories"))
        container.appendChild(topHeader);

        const mainPageContent = "https://mediacoalition.github.io/tbbc/content.json";
        let mainPageData = undefined;
        await $.getJSON(mainPageContent, (json) => mainPageData = json);

        [
            "headline",
            "secondStory"
        ].forEach(x => {
            let div = document.createElement("div");
            div.classList.add("d-flex", "flex-column");
            
            let title = document.createElement("h3");
            let link = document.createElement("a");
            if (mainPageData[x].link) link.href = mainPageData[x].link.href || "#";
            else link.href = "#"
            link.appendChild(document.createTextNode(mainPageData[x].title.textContent));
            title.appendChild(link);
            div.appendChild(title);

            let desc = document.createElement("p");
            desc.appendChild(document.createTextNode(mainPageData[x].extra.textContent));
            div.appendChild(desc)

            let time = document.createElement("div");
            time.classList.add("d-flex");
            let icon = document.createElement("div");
            icon.classList.add("icon");
            icon.style.marginRight = "3px";
            icon.appendChild(document.createTextNode(""))
            time.appendChild(icon);
            let timeText = document.createElement("div")
            timeText.appendChild(document.createTextNode(`${mainPageData[x].extra.time.textContent} ago`))
            time.appendChild(timeText);
            div.appendChild(time);

            container.appendChild(div)
        })


        mainPageData.custom.forEach(x => {
            topSeparator = document.createElement("div");
            topSeparator.classList.add("w-100");
            topSeparator.style.height = "2px";
            topSeparator.style.backgroundColor = "#bb1919";
            topSeparator.style.marginBottom = "1rem";
            container.appendChild(topSeparator);
            if (x.format == "leaderboard") {
                let thing = document.createElement("div");
                thing.classList.add("d-flex", "flex-column");
                let title = document.createElement("h3");
                title.appendChild(document.createTextNode(x.header));
                thing.appendChild(title);

                let list = document.createElement("ol")

                x.content.forEach(y => {
                    let item = document.createElement("li");
                    let link = document.createElement("a");
                    link.href = y.link;
                    link.appendChild(document.createTextNode(y.text));
                    item.appendChild(link);
                    list.appendChild(item);
                });
                thing.appendChild(list);
                container.appendChild(thing)
            } else {
                let thing = document.createElement("div");
                thing.classList.add("d-flex", "flex-column");
                let title = document.createElement("h3");
                title.appendChild(document.createTextNode(x.header));
                thing.appendChild(title);

                x.content.forEach(y => {
                    let div = document.createElement("div");
                    div.classList.add("d-flex", "flex-column");
                    div.style.marginBottom = "10px";
                    let img = document.createElement("img");
                    img.src = y.img;
                    img.style.marginBottom = "5px";
                    div.appendChild(img);

                    let header = document.createElement("h3");
                    let link = document.createElement("a");
                    link.href = y.link;
                    link.appendChild(document.createTextNode(y.text))
                    header.appendChild(link);
                    div.appendChild(header);

                    thing.appendChild(div);
                });

                container.appendChild(thing);
            }
        })

        $(".top-stories").append(container);
    });
})