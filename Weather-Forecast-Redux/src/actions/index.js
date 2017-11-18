import axios from 'axios';

const API_KEY = 'c013e3fd1af4d559dd02f479bba94f75';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

  const url = `${ROOT_URL}&q=${city},US`;
  const request = axios.get(url);

  return {
    type : FETCH_WEATHER,
    payload : request
  };
}
