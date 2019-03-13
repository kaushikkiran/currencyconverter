function convertCurrency()
{
    var currency = document.getElementById("currency").value;
    var inputCurrencyValue = document.getElementById("inputCurrencyValue").value;
    var selectedCurrency = document.getElementById("selectedCurrency").value;

    var url = "https://api.exchangeratesapi.io/latest?base=" + currency;
    $.get(url, function(data, status){
        
        var currencyValue = data["rates"][selectedCurrency];
        $("#displayAnswer").html("Today's " + inputCurrencyValue + currency + " value in " + selectedCurrency + " is " + (inputCurrencyValue*currencyValue));
    });
}