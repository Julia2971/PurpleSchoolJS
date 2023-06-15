function crypto(passw){
    const changePassw = passw.split('');  
    const partOfPassw = changePassw.splice(0, 4).reverse();
    return newPassw = changePassw.reverse().concat(partOfPassw).join('');
}

function check(res, passw) {
    const makePassw = res.split('')
    const newPartOsPassw = makePassw.splice(-4);
    const newPassw2 = newPartOsPassw.reverse().concat(makePassw.reverse()).join('');
    if (newPassw2 === passw){
        console.log(true)
    } else {
        console.log(false)
    }
};
check(crypto('password'), 'password')

