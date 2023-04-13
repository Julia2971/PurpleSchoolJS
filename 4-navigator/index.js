function navigator (adLat, addLong, posLat, posLong){
    return Math.hypot(adLat-posLat, addLong - posLong)
}


console.log( navigator(10, 15, 20, 30))