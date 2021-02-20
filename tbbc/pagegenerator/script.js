$(window).on("load", () => {
    $("select[name=template]").on("change", () => {
        if ($("select[name=template]").find("option:selected").attr("name") == "none") {
            $("#iframe").attr("src", "generalTemplate.html")
            $(".option-stuff").html(`
                <div class="row">
                    <div class="col">
                        <h5>Meta (twitter/discord embed stuff)</h5>
                        <label for="title">Page title:</label>
                        <input name="title" id="title" type="text" placeholder="'- TBBC News' will be added">
                        <textarea class="w-100" name="desc" id="desc" placeholder="Description"></textarea>
                    </div>
                    <div class="col">
                        <textarea name="md" id="md" class="w-100" placeholder="Page markdown"></textarea>
                    </div>
                </div>
            `)
        } else if ($("select[name=template]").find("option:selected").attr("name") == "news") {
            $("#iframe").attr("src", "newsTemplate.html")
            $(".option-stuff").html(`
                <div class="row">
                    <div class="col">
                        <h5>Meta (twitter/discord embed stuff)</h5>
                        <label for="title">Page title:</label>
                        <input name="title" id="title" type="text" placeholder="'- TBBC News' will be added">
                        <textarea class="w-100" name="desc" id="desc" placeholder="Description"></textarea>
                    </div>
                    <div class="col">
                        <textarea rows="10" name="md" id="md" class="w-100" placeholder="Page markdown">
# Uber drivers are workers not self-employed, Supreme Court rules
&lt;small class="credit"&gt;**By Mary-Ann Russon**&lt;br&gt;
&lt;span style="color: #696969"&gt;Business reporter, BBC News&lt;/span&gt;&lt;/small&gt;                        
                        </textarea>
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
        preview();
    })
})

function preview(fromMD) {
    if (fromMD == undefined) fromMD = true;
    $("#iframe").contents().find('meta[property="og:title"]').attr('content', `${$("#title").val()} - TBBC News`);
    $("#iframe").contents().find('meta[property="twitter:title"]').attr('content', `${$("#title").val()} - TBBC News`);
    $("#iframe").contents().find('meta[property="og:description"]').attr('content', $("#desc").val());
    $("#iframe").contents().find('meta[property="twitter:description"]').attr('content', $("#desc").val());
    $("#iframe").contents().find(".page-md").html($("#md").val());

    if (fromMD) $("#iframe")[0].contentWindow.mdToHTML()
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