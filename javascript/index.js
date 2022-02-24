"use strict";

import {config} from "/config.js";

function getFontOption(name, fontSizeOptions) {
    return fontSizeOptions.find((option) => option.name == name);
}

function createQuote(config) {
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
    quoteBodyDOM.setAttribute("class", "box__quote-para para no-screen");
    const authorDOM = document.createElement("p");
    authorDOM.setAttribute("class", "box__author-para para no-screen");

    const quoteOptionsDOM = document.createElement("div");
    quoteOptionsDOM.setAttribute("class", "page__quote-options quote-options no-print");

    const fontSizeSelectDOM = document.createElement("select");
    fontSizeSelectDOM.setAttribute("name", "fontsize");
    fontSizeSelectDOM.setAttribute("class", "quote-options__fontsize select no-print");

    // Loading font options
    const fontSizeOptions = config.fontSizeOptions;
    const fontOption = getFontOption("Default", fontSizeOptions);
    quoteBodyDOM.style.fontSize = fontOption.quoteBodySize;
    authorDOM.style.fontSize = fontOption.authorSize;

    fontSizeSelectDOM.addEventListener("change", (event) => {
        const fontOption = getFontOption(event.target.value, fontSizeOptions)
        console.log("Setting quote to fontOption", fontOption);
        quoteBodyDOM.style.fontSize = fontOption.quoteBodySize;
        authorDOM.style.fontSize = fontOption.authorSize;
    })

    // Creating Select options
    const fontSizes = fontSizeOptions.map((option) => option.name);
    const fontSizeOptionsDOM = fontSizes.map((fontString) => {
        const option = document.createElement("option");
        option.value = fontString;
        option.textContent = fontString;
        option.setAttribute("class", "select__options options no-print");
        return option;
    });

    fontSizeOptionsDOM.forEach((option) => {
        fontSizeSelectDOM.appendChild(option);
    });

    pageDOM.appendChild(boxDOM);
    boxDOM.appendChild(textareaDOM);
    boxDOM.appendChild(inputDOM);
    boxDOM.appendChild(quoteBodyDOM);
    boxDOM.appendChild(authorDOM);
    quoteOptionsDOM.appendChild(fontSizeSelectDOM);

    if (config.multiQuotes == true) {
        const removeQuoteButtonDOM = document.createElement("button");
        removeQuoteButtonDOM.setAttribute("class", "button page__button no-print");
        removeQuoteButtonDOM.textContent = "Remove Quote"

        quoteOptionsDOM.appendChild(removeQuoteButtonDOM);
        removeQuoteButtonDOM.addEventListener("click", () => {
            pageDOM.remove();
        });
    }

    pageDOM.appendChild(quoteOptionsDOM);

    const updateBodyPara = () => {
        quoteBodyDOM.innerHTML = textareaDOM.value
                                    .replaceAll(/\n/g, '<br>')
                                    .replaceAll(/\s{2}/g, '&ensp;');
    }
    textareaDOM.addEventListener("input", updateBodyPara)

    const updateAuthorPara = () => {
        authorDOM.textContent = inputDOM.value;
    }
    inputDOM.addEventListener("input", updateAuthorPara)

    return pageDOM;
}

const quoteButtonId = "quote-add-button";

function createQuoteButton() {
    const quoteButtonDOM = document.createElement("button");
    quoteButtonDOM.setAttribute("class", "button button-box__button no-print");
    quoteButtonDOM.id = quoteButtonId;
    quoteButtonDOM.textContent = "Add Quote"
    return quoteButtonDOM;
}

const fontSelectId = "font-choice-select";

function createFontSelect(fontList) {
    const fontSelectDOM = document.createElement("select");
    fontSelectDOM.setAttribute("class", "button button-box__button no-print");
    fontSelectDOM.id = fontSelectId;
    fontSelectDOM.textContent = "Add Quote"

    // Creating Select options
    const fontSizeOptionsDOM = fontList.map((fontString) => {
        const option = document.createElement("option");
        option.value = fontString;
        option.textContent = fontString;
        option.style.fontFamily = fontString;
        option.setAttribute("class", "select__options options no-print");
        return option;
    });

    fontSizeOptionsDOM.forEach((optionDOM) => {
        fontSelectDOM.appendChild(optionDOM);
    })
    return fontSelectDOM;
}

function main() {
    const quoteSectionDOM = document.getElementById("quote-section");
    quoteSectionDOM.appendChild(createQuote(config));

    if (config.allowFontChoices == true) {
        const buttonBoxDOM = document.getElementById("button-box");
        const fontButtonDOM = createFontSelect(config.fontList)
        buttonBoxDOM.insertBefore(fontButtonDOM, buttonBoxDOM.children[0]);

        fontButtonDOM.addEventListener("change", (event) => {
            const pageDOMs = document.getElementsByClassName("box page__box");
            console.log(event);
            for (pageDOM of pageDOMs) {
                for (childDOM of pageDOM.children) {
                    childDOM.style.fontFamily = event.target.value;
                }
            }
        });

    }

    if (config.multiQuotes == true) {
        const buttonBoxDOM = document.getElementById("button-box");
        buttonBoxDOM.insertBefore(createQuoteButton(), buttonBoxDOM.children[0]);

        const addQuoteButton = document.getElementById(quoteButtonId);

        addQuoteButton.addEventListener("click", () => {
            quoteSectionDOM.appendChild(createQuote(config));
        });
    }
    const printButton = document.getElementById("print-button")
    printButton.addEventListener("click", () => {
        window.print();
    });
}

main();
