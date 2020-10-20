/* Add quotes as javascript objects inside the "quotes" array. Each quote
  * object must have a "body" and a "author", ensure that you have proper
  * commas after the body. The reason this is done in a sort of convoluted
  * manner is so the precompiled handlebars template can parse this with
  * minimal modifications required on my part. */

let quoteList = {
        "quotes": [
        {
          "body": 
`The law of the Lord is perfect,
     reviving the soul;
the testimony of the Lord is sure,
     making wise the simple;
the precepts of the Lord are right,
     rejoicing the heart;
the commandment of the Lord is pure 
     enlightening the eyes; 
the fear of the Lord is clean, 
     enduring forever; 
the ordinances of the Lord are true, 
     and righteous altogether. 
More to be desired are they than gold, 
     even fine gold; 
sweeter also than honey 
     and the drippings of the honeycomb`
          ,"author": "Psalm 19:7-10"
        },
    ]
}
