function countWordsByLetterType(text) {
    if (typeof text !== 'string') {
      throw new Error('Функція приймає тільки строкові аргументи.');
    }
  
    const words = text.split(/\s+/); // Розділити текст на окремі слова
    const vowels = 'аеєиіїоуюяАЕЄИІЇОУЮЯ'; // Список голосних літер
  
    let vowelsCount = 0;
    let consonantsCount = 0;
  
    for (const word of words) {
      const firstLetter = word.toLowerCase()[0]; // Перетворити букву в нижній регістр
      if (vowels.includes(firstLetter)) {
        vowelsCount++;
      } else {
        consonantsCount++;
      }
    }
  
    const result = {
      текст: text,
      голосних: vowelsCount,
      приголосних: consonantsCount,
    };
  
    return result;
  }
  
  // Приклад використання функції
  const text = "Це є аби деякий текст для прикладу орбіта афера брат афіша Індія";
  const wordCountByLetterType = countWordsByLetterType(text);
  console.log(wordCountByLetterType);