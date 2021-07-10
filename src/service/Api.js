import axios from 'axios';

const URL = 'api.openweathermap.org/data/2.5/weather';
const API_KEY = 'bab40587a342187de65704ffbf6a5e1a';

export const getWeather = async(city, country) => {
    const data = await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
    return data;
}