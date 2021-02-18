$(window).on("load", async () => {
    let data = undefined
    await $.getJSON("content.json", (json) => data = json);
    // right headlines
    if (data.rightHandStuff) data.rightHandStuff.forEach(x => {
        if ($(".right-stories").children().length == 0) {
            let y = document.createElement("div");
            y.classList.add("row");
            $(".right-stories").append(y)
        }
        Object.keys($(".right-stories")).filter(x => !isNaN(parseInt(x))).map(x => parseInt(x)).forEach(z => {
            let div = document.createElement("div");
            div.classList.add("d-flex", "flex-column", "col-12", "col-sm-4", "col-xl-12", "mb-xl-none", "mb-2");
            div.innerHTML = `
                <div style="min-height: 48px;"><b><a href="${x.link}" style="color: #000000;">${x.title}</a></b></div>
                <div class="d-flex" style="color: #222222;">
                    <div class="icon" style="margin-right: 3px;"></div>
                    <div>${x.time}</div>
                    <div class="separator"></div>
                    <div>${x.category}</div>
                </div>
                ${data.rightHandStuff.indexOf(x) != data.rightHandStuff.length - 1 ? `<hr class="d-block d-sm-none d-xl-block w-100" style="margin-top: 5px; margin-bottom: 5px;">` : ""}
            `
            $($($(".right-stories")[z]).children(".row")[$($(".right-stories")[z]).children(".row").length - 1]).append(div);
        })
    })

    if (data.stories) data.stories.forEach(x => {
        let div = document.createElement("div");
        div.classList.add("flex-column", "col-12", "col-md-3", "story", "mt-3", "mt-md-0");
        div.innerHTML = `
            <div class="image">
                <img src="${x.image.src}" class="w-100">
            </div>
            <h6><a href="${x.link.href}"><span>${x.title.textContent}</span></a></h6>
            <div class="extra">${x.extra.textContent}</div>
            <div class="d-flex extra">
                <div class="icon" style="margin-right: 3px;"></div>
                <div>${x.extra.time.textContent}</div>
                <div class="separator"></div>
                <div>${x.extra.category.textContent}</div>
            </div>
        `

        $(".stories").append(div)
    })

    if (data.custom) data.custom.forEach(x => {
        let container = document.createElement("div");
        container.classList.add("d-flex", "flex-column", "w-100", "custom-stuff", "mt-3")

        let header = document.createElement("div");
        header.classList.add("d-flex", "justify-content-around", "w-100");
        let title = document.createElement("h2");
        title.innerHTML = x.header.replace(" ", "&nbsp;");
        title.style.marginRight = "20px"
        header.appendChild(title)
        let hr = document.createElement("hr");
        hr.classList.add("w-100")
        header.appendChild(hr);
        container.appendChild(header);

        if (x.format) {
            if (x.format == "leaderboard") {
                let list = document.createElement("ol");
                list.classList.add("leaderboard")
                for (let i = 0; i < x.content.length; i++) {
                    let item = document.createElement("li");
                    let div = document.createElement("div");
                    let link = document.createElement("a");
                    link.classList
                    link.href = x.content[i].link;
                    link.appendChild(document.createTextNode(x.content[i].text));
                    div.appendChild(link);
                    item.appendChild(div)
                    list.appendChild(item);
                }
                container.appendChild(list);
            }
        } else {
            let smallContainer = document.createElement("div");
            smallContainer.classList.add("row");
            x.content.forEach(y => {
                let div = document.createElement("div");
                div.classList.add("d-flex", "flex-column", "mb-3", "col-12", `col-sm-${Math.round((12 / x.content.length) * 1.5)}`);
                let img = document.createElement("img");
                img.style.marginBottom = "5px"
                img.src = y.img;
                div.appendChild(img);
                let titleDiv = document.createElement("div");
                let link = document.createElement("a");
                link.href = y.link;
                link.appendChild(document.createTextNode(y.text));
                titleDiv.appendChild(link);
                div.appendChild(titleDiv);
                smallContainer.appendChild(div);
            })
            container.append(smallContainer)
        }

        $(".custom-content").append(container);
        console.log($(container))
    })
})