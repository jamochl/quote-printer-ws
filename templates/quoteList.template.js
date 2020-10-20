/* Add quotes as javascript objects inside the "quotes" array. Each quote
  * object must have a "body" and a "author", ensure that you have proper
  * commas after the body. The reason this is done in a sort of convoluted
  * manner is so the precompiled handlebars template can parse this with
  * minimal modifications required on my part. */
let quoteList = {
        "quotes": [
        {
          "body": "example quote 1"
          ,"author": "author 1, 2020"
        },
        {
          "body":
`example
  quote
    2`
          ,"author": "author 2, 2020"
        },
    ]
}
