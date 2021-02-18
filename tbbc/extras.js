$(window).on("load", () => {
    generateNavbar();
    //generateFooter();
    console.log("here")
})

function generateNavbar() {
    let navbar = document.createElement("nav");
    navbar.classList.add("d-flex", "flex-column")
    let bbcHeader = document.createElement("div");
    bbcHeader.classList.add("container", "bbc-header", "d-inline-flex")
    bbcHeader.innerHTML = `
        <div class="header-element">
            <img src="img/bbc-b.svg" width="84px">
        </div>
        <div class="header-separator"></div>
        <div class="header-element d-flex">
            <div class="icon-filled"></div>
            <div class="d-none d-lg-block mr-5 header-text" style="padding-left: 12px;">
                Sign in
            </div>
        </div>
        <div class="header-separator"></div>
        <div class="header-element">
            <div class="icon-filled"></div>
        </div>
        <div class="header-separator"></div>
        <div class="header-element d-block d-sm-none d-xl-block">
            <div class="header-text">
                Home
            </div>
        </div>
        <div class="header-separator d-block d-sm-none d-xl-block"></div>
        <div class="header-element d-none d-sm-block">
            <div class="header-text">
                News
            </div>
        </div>
        <div class="header-separator d-none d-sm-block"></div>
        <div class="header-element d-none d-sm-block">
            <div class="header-text">
                Sport
            </div>
        </div>
        <div class="header-separator d-none d-sm-block"></div>
        <div class="header-element d-none d-sm-block">
            <div class="header-text">
                Weather
            </div>
        </div>
        <div class="header-separator d-none d-md-block"></div>
        <div class="header-element d-none d-md-block">
            <div class="header-text">
                iPlayer
            </div>
        </div>
        <div class="header-separator d-none d-lg-block"></div>
        <div class="header-element d-none d-lg-block">
            <div class="header-text">
                Sounds
            </div>
        </div>
        <div class="header-separator d-none d-lg-block"></div>
        <div class="header-element d-none d-lg-block">
            <div class="header-text">
                CBBC
            </div>
        </div>
        <div class="header-separator d-none d-sm-block"></div>
        <div class="header-element">
            <div class="header-input d-none d-sm-flex">
                <input type="text" placeholder="Search"></input>
                <div class="icon-filled"></div>
            </div>
            <div class="d-flex d-sm-none">
                <div class="icon-filled"></div>
            </div>
        </div>
        <div class="header-separator d-block d-sm-none"></div>
    `
    navbar.appendChild(bbcHeader)

    let newsHeader = document.createElement("div")
    let newsHeaderOptions = [
        "Home",
        "Linuxit",
        "Electron Virus",
        "Web Alliance",
        "United Native Alliance",
        "Dev Country Conflicts",
        "Stories",
        "In Pictures"
    ]
    newsHeader.classList.add("news-header")
    newsHeader.innerHTML = `
        <div class="d-flex flex-column container">
            <div class="header">
                <g fill="#fff"><path d="M3379.73 4.15h2.03v14.97h-1.84l-10.01-11.53v11.53h-2.01V4.15h1.74l10.09 11.62V4.15M3385.62 4.15h8.49v1.91h-6.34v4.56h6.13v1.92h-6.13v4.65h6.54v1.9h-8.69V4.15M3416.97 4.15h2.14l-6.05 15.03h-.47l-4.89-12.17-4.95 12.17h-.46l-6.03-15.03h2.16l4.12 10.32 4.16-10.32h2.02l4.17 10.32 4.08-10.32M3424.92 12.85l-1.63-.99c-1.02-.62-1.75-1.24-2.18-1.84-.43-.6-.65-1.3-.65-2.08 0-1.18.41-2.14 1.23-2.87.82-.74 1.88-1.1 3.19-1.1 1.25 0 2.4.35 3.44 1.05v2.43c-1.08-1.04-2.24-1.56-3.48-1.56-.7 0-1.27.16-1.73.49-.45.32-.67.74-.67 1.24 0 .45.17.87.5 1.26.33.39.86.8 1.6 1.23l1.64.97c1.82 1.09 2.74 2.48 2.74 4.16 0 1.2-.4 2.17-1.21 2.92-.8.75-1.85 1.12-3.13 1.12-1.48 0-2.82-.45-4.04-1.36V15.2c1.16 1.47 2.5 2.2 4.02 2.2.67 0 1.23-.19 1.68-.56.45-.37.67-.84.67-1.4-.02-.91-.68-1.78-1.99-2.59"></path><image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAAgCAMAAADqkpxHAAAAG1BMVEX////35+fvxsbnra3ejIzWa2vOUlLGMTG9GBibW0q6AAAACXRSTlP//////////wBTT3gSAAACWUlEQVR4nLyX65aFIAiFE/Hy/k88pagbpDOetWaNv6yQD2FLddV/HiVnmV33CI4F3/dJ5vEygx8XzySbVdHzBoaF2vpALPcn4xt0fbxEh2LjWZ4E3JHcjTcXJ+i875A9Zzcv8JitESo6+4gOMHjuQa+TdKp7T4TXekrEkRR6Y1v0LzVZFOsrjjzk9aikAOjwWqFX9Ca0URhlO40YgypME32RZh+gN6E9bpKJZ/l5ZgUedDTv7BO0EVrz0uIB4+cytVmw4m/ovkrJ4wRthNavdDxLZHVTZUf3E4fJO0FroTVKMfHE5ba1G8i4oIUNQR2hm9CSoTBuGyrfQguAEHQtQbOP0Epog4LCV2khc/IGuq9YQZ2hobBrAQhtiWzubjEmukuNhuHHRqq3zWaWZ1GzNhb2OEvgKuERO0SnYQaUJTQQWX/CwmaDln1/hZ6FRcoUGlRdRpaNR4OWN4+PxtcH+CLwMygjnq3Jw8ajQfcjRh7al9kUmqaI0JTIFrxvnDUajtgpWuSlW1WLJxddG7PxUGztBvsY3QzZUFokVmSGHQ1ajnc+R7e82f6cmjgu9arCQbJGZyX1bJyjx2cPSrnIvY8K2dDyFjtHZ48i8WAmcD5Cs1rgy8T8Gb31ZohHmYFFcRMO36yH6OSg6/YWvu+sy+jJDNmH6LJR6vhkMcGMN0d7mDz0OPWIxmYWzALypOyXnygyiXMXLTJ47eEmBdlLCtlOxtpHfUF3mZyib8z2C/F4sPvB/57yilYthYMZFp08D+T8TfVkU6+5t+hvht/ISpmt5wcAAP//AwCBpFE5ZTGfKQAAAABJRU5ErkJggg=="></image></g>
            </div>
            <div class="options">
                <hr class="d-block d-md-none">
                <div class="d-flex d-md-none">
                    <div style="width: 50%; text-align: center; padding: 8px; font-family: 'Helvetica', sans-serif; color: #ffffff; font-weight: 700;">
                        Latest Stories
                    </div>
                    <div style="width: 50%; text-align: center; padding: 8px; font-family: 'Helvetica', sans-serif; color: #ffffff; font-weight: 700; background-color: #990000;">
                        Most Read
                    </div>
                </div>
                <div class="d-none d-md-flex header-options" style="font-family: 'Helvetica', sans-serif; color: #ffffff;">
                    
                </div>
            </div>
        </div>
    `

    navbar.appendChild(newsHeader)

    $("body").prepend(navbar);
    newsHeaderOptions.forEach(x => {
        $(".header-options").append(() => {
            let div = document.createElement("div");
            div.style.padding = "8px";
            if (!$(".header-options").children().length) div.style.paddingLeft = "0"
            div.appendChild(document.createTextNode(x));
            return div;
        })
        $(".header-options").append(() => {
            let separator = document.createElement("div");
            separator.classList.add("header-separator");
            return separator;
        })
    })

    Object.keys($(".header-options").children()).filter(x => !isNaN(parseInt(x))).map(x => parseInt(x)).forEach(x => {
        let compWidth = 0;
        _.range(0, x + 1).forEach(y => {
            compWidth += $($(".header-options").children()[y]).width();
        })
        
        if (compWidth >= 400) {
            $($(".header-options").children()[x]).addClass("d-none d-lg-block")
        } else if (compWidth >= 750) {
            $($(".header-options").children()[x]).addClass("d-none d-xl-block")
        }
    })
}

function generateFooter() {
    throw new Error();
    let footer = document.createElement("footer");
    let topHr = document.createElement("hr");
    topHr.classList.add("w-100");
    topHr.style.marginBottom = "10px"
    footer.appendChild(topHr)
    let container = document.createElement("div");
    container.classList.add("container");

    let xl = document.createElement("div");
    xl.classList.add("d-none", "d-xl-flex", "flex-column");
    xl.innerHTML = `
        <div class="row">
            <div class="d-flex footer-element-container col">
                <div class="d-flex flex-column w-100">
                    <div>Home</div>
                    <div>CBBC</div>
                    <div>Local</div>
                </div>
                <div class="separator h-100"></div>
            </div>
            <div class="d-flex footer-element-container col">
                <div class="d-flex flex-column w-100">
                    <div>News</div>
                    <div>CBeebies</div>
                    <div>Three</div>
                </div>
                <div class="separator h-100"></div>
            </div>
            <div class="d-flex footer-element-container col">
                <div class="d-flex flex-column w-100">
                    <div>Sport</div>
                    <div>Food</div>
                </div>
                <div class="separator h-100"></div>
            </div>
            <div class="d-flex footer-element-container col">
                <div class="d-flex flex-column w-100">
                    <div>Weather</div>
                    <div>Bitesize</div>
                </div>
                <div class="separator h-100"></div>
            </div>
            <div class="d-flex footer-element-container col">
                <div class="d-flex flex-column w-100">
                    <div>iPlayer</div>
                    <div>Arts</div>
                </div>
                <div class="separator h-100"></div>
            </div>
            <div class="d-flex footer-element-container col">
                <div class="d-flex flex-column w-100">
                    <div>Sounds</div>
                    <div>Taster</div>
                </div>
                <div class="separator h-100"></div>
            </div>
        </div>
        <hr class="w-100">
        <div class="d-flex footer-bottom">
            <div class="footer-element">
                Terms of Use
            </div>
            <div class="footer-element">
                About the TBBC
            </div>
            <div class="footer-element">
                Privacy Policy
            </div>
            <div class="footer-element">
                Cookies
            </div>
            <div class="footer-element">
                Accessibility Help
            </div>
            <div class="footer-element">
                Parental Guidance
            </div>
            <div class="footer-element">
                Contact the TBBC
            </div>
            <div class="footer-element">
                Get Personalised Newsletters
            </div>
        </div>
        <div style="padding-bottom: 8px;">
            Copyright &copy; ${new Date().getFullYear()} TBBC. The TBBC is not responsible for the content of external sites.
        </div>
    `
    container.appendChild(xl)
    footer.appendChild(container);
    $("body").append(footer);
}