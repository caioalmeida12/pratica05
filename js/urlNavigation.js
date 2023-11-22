const urlElement = document.querySelector("#url_text")
const bodyElement = document.querySelector("body")
const browserElement = document.querySelector(".browser")

const toggleDarkModeElement = document.querySelector("body > div > div.row > div.column.right > div")

let urlText = ""

let siteColors = {
    browser: "#D7DEE4",
    row: "#f1f1f1",
    __oldBrowser: "#282828",
    __oldRow: "#3c3c3c"
}

const iframeElement = document.querySelector("#frameTab")

const search = (searchText) => {
    if(!searchText) console.log("searchText nao informado");

    iframeElement.src = `./${searchText}/index.html`
}

const toggleDarkMode = () => {
    const tempBrowser = siteColors.browser
    const tempRow = siteColors.row

    siteColors.browser = siteColors.__oldBrowser
    siteColors.row = siteColors.__oldRow

    siteColors.__oldBrowser = tempBrowser
    siteColors.__oldRow = tempRow

    bodyElement.style.backgroundColor = siteColors.browser
    browserElement.style.borderColor = siteColors.row

    browserElement.querySelector(".row").style.backgroundColor = siteColors.row

    console.log(siteColors)
    console.log(bodyElement.style)
}

urlElement.addEventListener("keydown", (e) => {
    url = e.target.value
    console.log(e)

    if (url && e.key === "Enter") search(url)
})

toggleDarkModeElement.addEventListener("click", toggleDarkMode)