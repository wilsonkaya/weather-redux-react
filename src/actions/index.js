import axios from 'axios'

const API_KEY = '6d84d5b32c6258c4e5d195d086db695a'
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function featchWather(city) {
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url)
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
