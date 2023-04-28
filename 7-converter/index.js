function doConv(money, currency ){
    const rate = { 
        euro : 0.011,
        usd : 0.012
    } 

    if (!rate[currency]){
        return null
    } else {
        return money * rate[currency] 
    }
}

console.log(doConv(10000, 'usd'))