$(window).on("load", () => {
    loadContent();
})

async function loadContent(file) {
    let data = undefined;
    if (!file) file = "content.json";
    await $.getJSON(file, (json) => data = json)
    let elements = document.querySelectorAll("[data-content-code]");
    elements.forEach(x => {
        let path = x.dataset.contentCode.split("-");
        let object = data;
        try {
            path.forEach(y => {object = object[y]});
        } catch {
            console.log(`Couldn't find data in ${file} for ${path.join("/")}`)
        }
        Object.keys(object).forEach(z => {
            x[z] = object[z]
        })
    })
}