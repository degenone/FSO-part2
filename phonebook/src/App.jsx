import { useState } from 'react';
import Person from './components/Person';

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123-4567' },
    ]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');

    const handleNameChange = (e) => {
        const { value } = e.target;
        setNewName(value);
    };

    const handleNumberChange = (e) => {
        const { value } = e.target;
        setNewNumber(value);
    };

    const addPerson = (e) => {
        e.preventDefault();
        if (newName.trim().length === 0 || newName.trim().length === 0) return;
        const personObj = { name: newName, number: newNumber };
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
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    <label htmlFor='newName'>Name:</label>
                    <input
                        type='text'
                        name='newName'
                        id='newName'
                        placeholder='Add name'
                        value={newName}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    <label htmlFor='newNumber'>Number:</label>
                    <input
                        type='text'
                        name='newNumber'
                        id='newNumber'
                        minLength={12}
                        maxLength={12}
                        placeholder='Add phone number'
                        pattern='[0-9]{3}[\s\-][0-9]{3}[\s\-][0-9]{4}'
                        title='Phone number e.g. 123 123 1234 or 123-123-1234'
                        value={newNumber}
                        onChange={handleNumberChange}
                    />
                </div>
                <div>
                    <button type='submit'>Add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map((person) => (
                <Person key={person.name} person={person} />
            ))}
        </div>
    );
};

export default App;
