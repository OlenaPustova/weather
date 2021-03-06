// const jsondb = require('../config.json');
// const API_KEY = jsondb.API_KEY;
const API_KEY = '9c081f3513903579de43b61708675364';
export const today = 'weather';
export const fiveDays = 'forecast';

export async function getWeatherData(city, page = today) {
  return await fetch(
    `https://api.openweathermap.org/data/2.5/${page}?q=${city}&appid=${API_KEY}&units=metric`,
  ).then(res => {
    if (!res.ok) return Promise.reject('404');
    return res.json();
  });
}

export async function oneCallApi(lat, lon) {
  return await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
  ).then(res => {
    if (!res.ok) return Promise.reject('404');
    return res.json();
  });
}
