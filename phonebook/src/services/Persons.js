import axios from 'axios';

const BASE_URL = 'http://localhost:3001/persons';

const getAll = () => {
    const req = axios.get(BASE_URL);
    return req.then((resp) => resp.data);
};

const create = (newObj) => {
    const req = axios.post(BASE_URL, newObj);
    return req.then((resp) => resp.data);
};

const delPerson = (id) => {
    return axios.delete(`${BASE_URL}/${id}`);
};

export default {
    getAll,
    create,
    delPerson,
};
