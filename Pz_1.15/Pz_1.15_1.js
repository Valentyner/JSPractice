function numberToObject(number) {
  if (number > 9999) {
    console.log("Число більше 9999. Введіть число від 0 до 9999.");
    return {};
  }

  const units = number % 10;
  const tens = Math.floor((number / 10) % 10);
  const hundreds = Math.floor((number / 100) % 10);
  const thousands = Math.floor((number / 1000) % 10);

  const result = {
    одиниці: units,
    десятки: tens,
    cотні: hundreds,
    тисячі: thousands,
  };

  return result;
}

const number = 3718;
const resultObject = numberToObject(number);
console.log(resultObject);
