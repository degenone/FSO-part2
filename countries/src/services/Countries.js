import axios from 'axios';

const BASE_URL = 'https://studies.cs.helsinki.fi/restcountries/api/';

const getAll = () => {
    const req = axios.get(BASE_URL + 'all');
    return req.then((resp) => {
        const names = resp.data.map((c) => c.name.common);
        return names;
    });
};

const getOne = (name) => {
    const req = axios.get(BASE_URL + 'name/' + name);
    return req.then((resp) => resp.data);
};

export default {
    getAll,
    getOne,
};
