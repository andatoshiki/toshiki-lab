var txtUrl = "hitokoto.txt"; // Set hitokoto txt path

function getQuotesTxt(id, url) {
    var i = 0,
        resultTxt = "",
        resultArr = [];

    if (!url) {
        return ".txt file directory undefined！"
    }
    x = fetch(url)
        .then(function(response) {
            return response.text();
        })
        .then(function(text) {
            resultArr = text.toString().split(/[\n]/);
            i = Math.floor(Math.random() * resultArr.length);
            resultTxt = resultArr[i];
            document.getElementById(id).innerHTML = resultTxt;
        });
}

window.onload = function() {
    getQuotesTxt('quotes', txtUrl); // Get Hitokoto
    window.setInterval("getQuotesTxt( 'quotes', txtUrl)", 30000); // Auto refresh 
}
// Get random content from .txt file

/*
* How to use? Require hitokoto.js from a CDN or local path, add <p id="quotes"></p> to <body> tag. 
*/
