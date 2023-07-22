function countWordFrequency(text) {
  if (typeof text !== "string") {
    throw new Error("Функція приймає тільки строкові аргументи.");
  }

  const cleanedText = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

  const words = cleanedText.toLowerCase().split(/\s+/);

  const wordFrequency = {};

  for (const word of words) {
    wordFrequency[word] = (wordFrequency[word] || 0) + 1;
  }

  return wordFrequency;
}

const text =
  "Це є деякий текст. Текст містить декілька слів. Це - слово. Слово текст";

const wordFrequency = countWordFrequency(text);
console.log(wordFrequency);
