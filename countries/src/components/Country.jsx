import { useState } from 'react';
import weatherService from '../services/Weather';
import { useEffect } from 'react';

const Country = (props) => {
    const [weather, setWeather] = useState(null);
    const { country } = props;

    useEffect(() => {
        weatherService
            .get(country.capitalInfo.latlng)
            .then((w) => setWeather(w));
    }, [country.capitalInfo.latlng]);

    return (
        <div>
            <h2>{country.name.common}</h2>
            <img
                className='flag'
                src={country.flags.svg}
                alt={country.flags.alt}
            />
            <p>
                Calital: <strong>{country.capital}</strong>
            </p>
            <p>
                Area:{' '}
                <strong>
                    {country.area} km<sup>2</sup>
                </strong>
            </p>
            <p>
                Population <strong>{country.population}</strong>
            </p>
            <div>
                <p>Official language&#40;s&#41;:</p>
                <ul>
                    {Object.values(country.languages).map((lang) => (
                        <li key={lang}>{lang}</li>
                    ))}
                </ul>
            </div>
            {weather !== null && (
                <div>
                    <h3>Weather in {country.capital}</h3>
                    <p>
                        Currently: {weather.description} with temperature of{' '}
                        {weather.temperature} &deg;C &mdash; feels like{' '}
                        {weather.feelsLike} &deg;C &mdash; and wind speed of{' '}
                        {weather.wind} m/s.
                    </p>
                    <img
                        src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                        alt={weather.description}
                    />
                </div>
            )}
        </div>
    );
};

export default Country;
