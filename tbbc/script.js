$(window).on("load", async () => {
    let data = undefined
    await $.getJSON("content.json", (json) => data = json);
    if (data.rightHandStuff) data.rightHandStuff.forEach(x => {
        if ($(".right-stories").children().length == 0) {
            let y = document.createElement("div");
            y.classList.add("row");
            $(".right-stories").append(y)
        }
        Object.keys($(".right-stories")).filter(x => !isNaN(parseInt(x))).map(x => parseInt(x)).forEach(z => {
            let div = document.createElement("div");
            div.classList.add("d-flex", "flex-column", "col-3", "col-xl-12", "mb-xl-none", "mb-2");
            div.innerHTML = `
                <div style="min-height: 48px;"><b><a href="${x.link}" style="color: #000000;">${x.title}</a></b></div>
                <div class="d-flex" style="color: #222222;">
                    <div class="icon" style="margin-right: 3px;"></div>
                    <div>${x.time}</div>
                    <div class="separator"></div>
                    <div>${x.category}</div>
                </div>
                ${data.rightHandStuff.indexOf(x) != 7 ? `<hr class="d-none d-xl-block w-100" style="margin-top: 5px; margin-bottom: 5px;">` : ""}
            `
            $($($(".right-stories")[z]).children(".row")[$($(".right-stories")[z]).children(".row").length - 1]).append(div);
        })
    })
})