import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?units=metric';
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const get = (latlng) => {
    const url = formatUrl(latlng[0], latlng[1]);
    const req = axios.get(url);
    return req.then((resp) => {
        return {
            description: resp.data.weather[0].description,
            icon: resp.data.weather[0].icon,
            temperature: resp.data.main.temp,
            feelsLike: resp.data.main.feels_like,
            wind: resp.data.wind.speed,
        };
    });
};

const formatUrl = (lat, lon) => {
    return `${BASE_URL}&lat=${lat}&lon=${lon}&appid=${API_KEY}`;
};

export default { get };
