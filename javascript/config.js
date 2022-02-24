export const config = {
    multiQuotes: true,
    allowFontChoices: true,
    fontList: [
        "Cardo",
        "Contrail One",
        "Playfair Display",
        "Raleway",
        "Redressed",
        "Roboto Serif",
        "Shizuru"
    ],
    fontSizeOptions: [
        {
            name: "Default",
            quoteBodySize: "calc((1.25vw + 0.75vh) * 2.0)",
            authorSize: "calc((1.25vw + 0.75vh) * 1.7)"
        },
        {
            name: "Big",
            quoteBodySize: "calc((1.25vw + 0.75vh) * 2.4)",
            authorSize: "calc((1.25vw + 0.75vh) * 2.0)"
        },
        {
            name: "Small",
            quoteBodySize: "calc((1.25vw + 0.75vh) * 1.6)",
            authorSize: "calc((1.25vw + 0.75vh) * 1.4)"
        }
    ]
}