const headerTitle = document.querySelector('h1');

const greetings = [
    'Hello!',
    'Вітаю!',
    'Добрий вечір!',
    'Buenos Dias!',
    'Greetings',
    'Привіт!'
];

const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

headerTitle.innerText = getRandomElement(greetings);
