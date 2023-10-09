import { useState } from 'react';
import Persons from './components/Persons';
import Filter from './components/Filter';
import Form from './components/Form';

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123-456', id: 1 },
        { name: 'Ada Lovelace', number: '394 453 2523', id: 2 },
        { name: 'Dan Abramov', number: '124-323-4345', id: 3 },
        { name: 'Mary Poppendieck', number: '392 364 2122', id: 4 },
    ]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [filterBy, setFilterBy] = useState('');
    const personsToList =
        filterBy.trim().length === 0
            ? persons
            : persons.filter((person) =>
                  person.name.toLowerCase().includes(filterBy.toLowerCase())
              );

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
            id: persons.length + 1,
        };
        if (personExists(personObj)) return;
        setPersons([...persons, personObj]);
        setNewName('');
        setNewNumber('');
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
            <Persons persons={personsToList} />
        </div>
    );
};

export default App;
