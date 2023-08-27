
function convert(money, currencyFrom, currencyTo,){
    const rate = { 
        euro : 102,
        usd : 94,
        rubleEuro :0.009779,
        rubleUsd :0.010558,
    } 
    if (rate[currencyTo] === null){
        return null;
    } 
    if (currencyFrom === 'usd') {
        return money / rate.rubleUsd;
    } 
    if (currencyFrom === 'euro') {
        return money / rate.rubleEuro;
    }
    return money / rate[currencyTo] ;
}

console.log(convert(10000, 'rub', 'usd'));
console.log(convert(10000, 'rub', 'euro'));
console.log(convert(10000, 'euro', 'rub'));
console.log(convert(10000, 'usd', 'rub'));