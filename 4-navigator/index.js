function navigator (adLat, addLong, posLat, posLong){
    return Math.hypot(adLat-posLat, addLong - posLong)
}

