import { useState, useEffect } from 'react';
import Persons from './components/Persons';
import Filter from './components/Filter';
import Form from './components/Form';
import personService from './services/Persons';

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [filterBy, setFilterBy] = useState('');
    const personsToList =
        filterBy.trim().length === 0
            ? persons
            : persons.filter((person) =>
                  person.name.toLowerCase().includes(filterBy.toLowerCase())
              );

    useEffect(() => {
        personService
            .getAll()
            .then((initialPersons) => setPersons(initialPersons));
    }, []);

    const handleNameChange = (e) => {
        const { value } = e.target;
        setNewName(value);
    };

    const handleNumberChange = (e) => {
        const { value } = e.target;
        setNewNumber(value);
    };

    const handleFilterChange = (e) => {
        const { value } = e.target;
        setFilterBy(value);
    };

    const addPerson = (e) => {
        e.preventDefault();
        if (newName.trim().length === 0 || newName.trim().length === 0) return;
        const personObj = {
            name: newName,
            number: newNumber,
        };
        if (personExists(personObj)) return;
        personService.create(personObj).then((addedPerson) => {
            setPersons([...persons, addedPerson]);
            setNewName('');
            setNewNumber('');
        });
    };

    const deletePerson = (id) => {
        const person = persons.find((p) => p.id === id);
        if (
            window.confirm(`Are you sure you want to delete '${person.name}'?`)
        ) {
            personService
                .delPerson(id)
                .then(() => {
                    setPersons(persons.filter((p) => p.id !== id));
                })
                .catch(() => {
                    alert(`Person '${person.name}' was already deleted.`);
                    setPersons(persons.filter((p) => p.id !== id));
                });
        }
    };

    const personExists = (newPerson) => {
        if (
            persons.filter((person) => person.name === newPerson.name)
                .length !== 0
        ) {
            alert(`"${newPerson.name}" is already in the phonebook!`);
            return true;
        }
        const regex = /[\s-]/g;
        const number = newPerson.number.replaceAll(regex, '');
        if (
            persons.filter(
                (person) => person.number.replaceAll(regex, '') === number
            ).length !== 0
        ) {
            alert(`"${newPerson.number}" is already in the phonebook!`);
            return true;
        }
        return false;
    };

    return (
        <div>
            <h1>Phonebook</h1>
            <Filter value={filterBy} handler={handleFilterChange} />
            <h2>Add a new person</h2>
            <Form
                nameValue={newName}
                nameHandler={handleNameChange}
                numberValue={newNumber}
                numberHandler={handleNumberChange}
                submitHandler={addPerson}
            />
            <h2>Numbers</h2>
            <Persons persons={personsToList} deleteHandler={deletePerson} />
        </div>
    );
};

export default App;
