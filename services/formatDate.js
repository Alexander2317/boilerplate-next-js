/* eslint-disable import/prefer-default-export */

function checkTwoDigitNumber(number) {
  return number < 10 ? `0${number}` : number;
}

export function formatDate(date) {
  const monthNames = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'фвгуста',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];

  const currentDate = new Date(date);
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const monthName = monthNames[currentDate.getMonth()];
  const day = checkTwoDigitNumber(currentDate.getDate());
  const hours = currentDate.getHours();
  const minutes = checkTwoDigitNumber(currentDate.getMinutes());

  return {
    year,
    month,
    monthName,
    day,
    hours,
    minutes,
  };
}
