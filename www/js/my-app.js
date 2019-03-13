// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
})

function convertCurrency()
{

    //get the currency value
    var currency = $("#currency").val();
    var inputCurrencyValue = $("#inputCurrency").val();
    if (inputCurrencyValue == "" || isNaN(inputCurrencyValue))   // Validate Input Value
    {
        alert("Please enter a Currency value");
        return;
    }
    var selectedCurrency = $("#selectedCurrency").val();    //Validate Selected Currency
    if (currency == selectedCurrency)
    {
        alert("Same currency selected! Please choose a different Currency to convert");
        return;
    }

    //Building a URL and sending a GET request
    var url = "https://api.exchangeratesapi.io/latest?base=" + currency;
    $.get(url, function(data, status){
        
        var currencyValue = data["rates"][selectedCurrency];
        $("#displayAnswer").html("Today's " + inputCurrencyValue + currency + " value in " + selectedCurrency + " is " + (inputCurrencyValue*currencyValue));
    });
}