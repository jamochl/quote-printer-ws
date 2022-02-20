function createPage() {
    const pageDOM = document.createElement("div");
    pageDOM.setAttribute("class", "page quote-section__page");

    const boxDOM = document.createElement("div");
    boxDOM.setAttribute("class", "box page__box")

    const textareaDOM = document.createElement("textarea");
    textareaDOM.setAttribute("class", "box__quote-body textarea no-print");
    textareaDOM.setAttribute("placeholder", "Quote Body");
    textareaDOM.setAttribute("rows", "4");
    const inputDOM = document.createElement("input");
    inputDOM.setAttribute("class", "box__author text-input no-print");
    inputDOM.setAttribute("placeholder", "author");
    const quoteBodyDOM = document.createElement("p");
    quoteBodyDOM.setAttribute("class", "box__quote-body para no-screen");
    const authorDOM = document.createElement("p");
    authorDOM.setAttribute("class", "box__author para no-screen");

    const removeQuoteButtonDOM = document.createElement("button");
    removeQuoteButtonDOM.setAttribute("class", "button page__button no-print");
    removeQuoteButtonDOM.textContent = "Remove Quote"

    pageDOM.appendChild(boxDOM);
    boxDOM.appendChild(textareaDOM);
    boxDOM.appendChild(inputDOM);
    boxDOM.appendChild(quoteBodyDOM);
    boxDOM.appendChild(authorDOM);
    pageDOM.appendChild(removeQuoteButtonDOM);

    const updateBodyPara = () => {
        quoteBodyDOM.textContent = textareaDOM.value;
    }
    textareaDOM.addEventListener("input", updateBodyPara)

    const updateAuthorPara = () => {
        authorDOM.textContent = inputDOM.value;
    }
    inputDOM.addEventListener("input", updateAuthorPara)

    const removeQuote = () => {
        pageDOM.remove();
    }
    removeQuoteButtonDOM.addEventListener("click", removeQuote);

    return pageDOM;
}

function addQuote() {
    const quoteSectionDOM = document.getElementById("quote-section");
    quoteSectionDOM.appendChild(createPage());
}

function main() {
    const addQuoteButton = document.getElementById("quote-add-button")
    addQuoteButton.addEventListener("click", addQuote);
    const printButton = document.getElementById("print-button")
    printButton.addEventListener("click", () => {
        window.print();
    });
    addQuote();
}

main();