function crypto(passward, numberOne, numberSecond) {
  const changePassward = passward.split("");
  const partOfPassward = changePassward
    .splice(numberOne, numberSecond)
    .reverse();
  return (newPassward = changePassward
    .reverse()
    .concat(partOfPassward)
    .join(""));
}

function check(result, passward) {
  const newPassward = crypto(result, -4);
  return newPassward === passward;
}

console.log(check(crypto("password", 0, 4), "password"));
