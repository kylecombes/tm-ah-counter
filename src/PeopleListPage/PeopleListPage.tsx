import { useState } from 'react';
import { usePeople } from '../hooks/usePeople';

export const PeopleListPage = () => {
  const { people, addPerson } = usePeople();
  const [newPersonName, setNewPersonName] = useState('');

  const addNewPerson = () => {
    addPerson({ name: newPersonName });
    setNewPersonName('');
  };

  return (
    <div className="page padded-section">
      <h1>People List</h1>
      <section>
        <h2>Add Person</h2>
        <input
          onChange={(e) => setNewPersonName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addNewPerson();
            }
          }}
          autoCapitalize="words"
          value={newPersonName}
        />
        <button onClick={addNewPerson}>Add Person</button>
      </section>
      <section>
        <h2>Existing People</h2>
        <ul>
          {people?.map((person) => (
            <li key={person.id}>{person.name}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};
