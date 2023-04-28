const lang = prompt('Введите свой язык', 'ru');

switch(lang) {
    case 'ru': 
         console.log('Привет!');
         break;
    case 'en' : 
         console.log('Hello!');
         break;
    case 'fr' : 
         console.log('Bonjour!');
         break;
    default: 
    console.log('I do not know your language')
};