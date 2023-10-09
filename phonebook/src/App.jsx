import { useState } from 'react';
import Person from './components/Person';

const App = () => {
    const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
    const [newName, setNewName] = useState('');

    const handleNameChange = (e) => {
        const { value } = e.target;
        setNewName(value);
    };

    const addPerson = (e) => {
        e.preventDefault();
        if (newName.trim().length === 0) return;
        const personObj = { name: newName };
        if (personExists(personObj.name)) {
            alert(`"${personObj.name}" is already in the phonebook!`);
            return;
        }
        setPersons([...persons, personObj]);
        setNewName('');
    };

    const  personExists = name => persons.filter(person => person.name === name).length !== 0;

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
                        placeholder='Add a new name'
                        value={newName}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    <button type='submit'>add</button>
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
