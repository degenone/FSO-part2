const Country = (props) => {
    const { country } = props;
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
        </div>
    );
};

export default Country;
