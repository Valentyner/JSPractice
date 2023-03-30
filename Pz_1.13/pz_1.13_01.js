//Об'єкт з мовами та днями тижня
const languages = {
    ua: ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"],
    en: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
};

//Функція для відображення модального вікна з питаннями
function showModalWindow(message) {
    const input = prompt(message);
    return input ? input.toLowerCase() : "";
};

//Функція для перевірки коректності даних
function validateInput(input, options) {
    return options.includes(input);
}

//Отримання коректної мови
let language = "";
while (!language) {
    const input = showModalWindow("Виберіть мову 'ua' або 'en'?");
    if(validateInput(input, ['ua', 'en'])){
        language = input;
    }else {
        alert('Неправильний ввід даних, спробуйте ще раз');
    }
}

//Отримання номеру дня тижня
let dayNumber = 0;
while (!dayNumber) {
    const message = language === "ua" ? 'Введіть номер дня тижня від 1 до 7' : "Enter the day number of the week (from 1 to 7)"
    const input = showModalWindow(message);
    if(validateInput(input, ['1', '2', '3', '4', '5', '6', '7'])){
        dayNumber = parseInt(input);
    } else {
        alert('Неправильний ввід даних. Спробуйте ще раз')
    }
}

//Виведення результату
const dayName = languages[language][dayNumber - 1];
alert(dayName);