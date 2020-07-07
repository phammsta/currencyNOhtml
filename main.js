const exchangeRate = 23208;
let from = prompt("enter from currency, vnd or usd?").toLowerCase()
let amount = prompt("How much?")
let output = 0// global variable 

if (isNaN(amount) === true) {
    console.log("enter a number!")
} else {
    if (from.toLowerCase() === "vnd") {
        output = vndToUsd(amount); 
        console.log("your value is",formatCurrency("USD",output))
    } else if (from.toLowerCase() === "usd") {
        output = usdToVnd(amount);
        console.log("your value is",formatCurrency("VND",output))
    } else {
        console.log("error!")
    }
}

//2 rates of exchange
function vndToUsd(amountVND) {
    return (amountVND / exchangeRate).toFixed(2);
}
function usdToVnd(amountUSD) {
    return (amountUSD * exchangeRate).toFixed(0);
}

function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
      currency: type,
      style: "currency"
    })
    return formatter.format(value);
  }
