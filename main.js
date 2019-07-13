console.log('Elo elo 5 2 0!');

const main__header = document.querySelector('.header__title');

console.log(main__header.innerHTML);

main__header.innerHTML = 'Pozdro!';

const day = document.querySelectorAll('.to-do__day--js');

console.log(day);
console.log(day[4].innerHTML);


const age = 27;
const name = 'Tomek';

function welcome(name, age) {
    console.log(`Cześć, mam na imię ${name} i mam ${age} lat`);
}
welcome("Tomasz", 27);

const welcome1 = (name, age) => {
    console.log(`Cześć, mam na imię ${name} i mam ${age} lat`);
}
welcome1(name, age);