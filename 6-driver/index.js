const hasLicence = true;
const age = 19;
const isDrunk = true;


const canDrive = (hasLicence && age>=18 && !isDrunk);
console.log(`Может пользователь водить машину: ${canDrive ? 'Может' : 'Не может'}`)