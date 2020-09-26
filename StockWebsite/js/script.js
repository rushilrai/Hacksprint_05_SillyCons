let name, high, low, cap;

function stockData(){
    console.log("HI TEST");
    fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-financials?region=US&symbol=${code}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
                    "x-rapidapi-key": "3ffaa43085mshb1441d47434b2c5p165a0bjsn2e1c7fde6f39"
                }
            })
                .then(res => res.json())
                // .then(obj => {console.log(obj['quoteType']['longName'])})
                .then(obj => {
                   name= obj['quoteType']['longName'],
                        //code: obj['quoteType']['symbol'],
                        high= obj['summaryDetail']['dayHigh']['fmt'],
                        low= obj['summaryDetail']['dayLow']['fmt'],
                        cap= obj['price']['marketCap']['fmt']
                })

                .then({
                    replace()
                })
                
}

function replace(){
    document.getElementById("high")=high,
    document.getElementById("low")=low,
    document.getElementById("cap")=cap
}



