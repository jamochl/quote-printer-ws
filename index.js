function removeQuote() {
    const quoteList = document.getElementsByClassName("page");
    const listLength = quoteList.length
    if (listLength > 1) {
        quoteList[listLength - 1].remove();
    }
}

function addQuote() {
    const quoteSection = document.getElementById("quote-section")
    quoteSection.innerHTML +=
    `<div class="page">
        <div class="box page__box">
            <textarea class="box__quote-body textarea no-print" placeholder="Quote Body"></textarea> 
            <input type="text" class="box__author text-input no-print" placeholder="author"></input>
            <p class="box__quote-body para no-screen"></p> 
            <p class="box__author para no-screen"></p>
        </div>
    </div>`

    const textAreas = document.getElementsByClassName("box__quote-body textarea");
    const quoteParas = document.getElementsByClassName("box__quote-body para");
    const textArea = textAreas[textAreas.length - 1]
    const quotePara = quoteParas[quoteParas.length - 1] 
    const updateBodyPara = () => {
        quotePara.textContent = textArea.value;
    }
    textArea.addEventListener("input", updateBodyPara)

    const textInputs = document.getElementsByClassName("box__author text-input");
    const authorParas = document.getElementsByClassName("box__author para");
    const textInput = textInputs[textInputs.length - 1]
    const authorPara = authorParas[authorParas.length - 1] 
    const updateAuthorPara = () => {
        authorPara.textContent = textInput.value;
    }
    textInput.addEventListener("input", updateAuthorPara)
}

function main() {
    const addQuoteButton = document.getElementById("quote-add-button")
    addQuoteButton.addEventListener("click", addQuote);
    const removeQuoteButton = document.getElementById("quote-remove-button")
    removeQuoteButton.addEventListener("click", removeQuote);
    addQuote();
}

main();