function getCurrentTime() {
  const daysOfWeek = [
    "неділя",
    "понеділок",
    "вівторок",
    "середа",
    "четвер",
    "п'ятниця",
    "субота",
  ];
  const months = [
    "січня",
    "лютого",
    "березня",
    "квітня",
    "травня",
    "червня",
    "липня",
    "серпня",
    "вересня",
    "жовтня",
    "листопада",
    "грудня",
  ];

  const currentDate = new Date();

  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getSeconds()).padStart(2, "0");
  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  const formattedDate = `${hours}:${minutes}:${seconds}, ${dayOfWeek}, ${day} ${month} ${year} року`;

  console.log(formattedDate);

  return formattedDate;
}

getCurrentTime();

const curDate = new Date();
console.log(String(curDate.getHours()).padStart(2, "0") + ":" + curDate.getMinutes() + ":" + curDate.getSeconds());

//padStart(2, "0") - додає перед цислом "0" до тих пір поки довжина не буде рівна 2
