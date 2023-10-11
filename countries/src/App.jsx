import { useState, useEffect } from 'react';
import countriesService from './services/Countries';
import Search from './components/Search';
import Country from './components/Country';
import Results from './components/Results';

const App = () => {
    const [allCountries, setAllCountries] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [country, setCountry] = useState(null);
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        if (allCountries.length === 0) return;
        if (searchValue === '') {
            setSearchResult([]);
            setCountry(null);
            return;
        }
        const val = searchValue.toLowerCase();
        const match = allCountries.find((c) => c.toLowerCase() === val);
        if (match !== undefined) {
            countriesService.getOne(match).then((c) => setCountry(c));
            return;
        }
        setCountry(null);
        const possibleMatches = allCountries.filter((c) =>
            c.toLowerCase().includes(val)
        );
        if (possibleMatches.length === 1) {
            countriesService
                .getOne(possibleMatches[0])
                .then((c) => setCountry(c));
            return;
        }
        setSearchResult(possibleMatches);
    }, [searchValue, allCountries]);

    useEffect(() => {
        countriesService.getAll().then((names) => setAllCountries(names));
    }, []);

    return (
        <div>
            <Search value={searchValue} handler={setSearchValue} />
            {searchValue !== '' &&
                ((country && <Country country={country} />) || (
                    <Results results={searchResult} />
                ))}
        </div>
    );
};

export default App;
