/*var converter = CurrencyConverter({
    API : { 
        url: 'https://free.currencyconverterapi.com/',
    }
});
const endpoint = 'https://free.currencyconverterapi.com/';
var converter = CurrencyConverter({
    API : { 
        url: 'http://www.currencyconverterapi.com/api/v3/convert',
        queryParams: {
            apiKey: '987654321'
        }
    }
});


function loadCurrencies()
{

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
      const xmlHttp = new XMLHttpRequest();
    xHttp.onreadystatechange = function(){
        if (xHttp.readystate == 4 && xHttp.state == 200{
            le obj = JSON.parse(this.responseText)
        } )
    }
}



function convertCurrency(){
    const from = documentById('from').value;
    const from = documentById('to').value;
    const from = documentById('currency').value;


    if (from.length>0 && to.length>0 && currency.length>0) {
        const xHttp = new XMLHttpRequest();
        Http.open('GET','https://www.currencyconverterapi.com/api/v5/convert?q={$query}&compact=ultra', true);
        xHttp.send();
    }
}
    return xmlHttp.responseText;



function convertCurrency() {
    let from = documentById('from').value;
    let to = documentById('to').value;
    let query = from + '_' + to;

    const url = 'https://www.currencyconverterapi.com/api/v5/convert?q='
            + query + '&compact=ultra;

    
    fetch(url).then(
    (response) => {
    return response.json();
}).then((data) => {
console.log(data)
})
}
    */


   fetch('https://free.currencyconverterapi.com/api/v5/currencies')
   .then((response) => response.json()) // Transform the data into json
   .then((response) => {
    console.log('OK');
    let from = document.getElementById("from");
    let to = document.getElementById("to");
    Object.entries(response.results).forEach(([key, value]) => {
        let fromOption = new Option(`${value.currencyName} (${value.currencySymbol})`, key);
        let toOption = new Option(`${value.currencyName} (${value.currencySymbol})`, key);
        from.add(fromOption);
        to.add(toOption);
    });

    from.onchange = (event) => {
        console.log(event.target.value)
    };

    to.onchange = (event) => {
        console.log(event.target.value)
    };

   });



