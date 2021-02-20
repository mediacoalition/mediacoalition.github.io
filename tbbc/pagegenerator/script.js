$(window).on("load", () => {
    $("select[name=template]").on("change", () => {
        if ($("select[name=template]").find("option:selected").attr("name") == "none") {
            $(".option-stuff").html(`
                <div class="row">
                    <div class="col">
                        <label for="title">Page title:</label>
                        <input name="title" id="title" type="text">
                    </div>
                    <div class="col">
                        <textarea name="md" id="md" class="w-100" placeholder="Page markdown"></textarea>
                    </div>
                </div>
            `)
        }
    })

    $(".preview").on("click", preview)

    $(".download").on("click", () => {
        preview(false);
        download("index.html", `
<!DOCTYPE html>
<html>
    <head>
        ${$('#iframe').contents()[0].head.innerHTML}
    </head>
    <body>
        ${$('#iframe').contents()[0].body.innerHTML}
    </body>
</html>
`);
    })
})

function preview(fromMD) {
    if (fromMD == undefined) fromMD = true;
    $("#iframe").contents().find('meta[property="og:title"]').attr('content', `${$("#title").val()} - TBBC News`);
    $("#iframe").contents().find(".page-md").html($("#md").val());
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}