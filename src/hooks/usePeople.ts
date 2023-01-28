import { useLocalStorage } from 'react-use';
import { Person } from '../types';

export const usePeople = () => {
  const [people, setPeople] = useLocalStorage<Person[]>('people', []);

  const addPerson = (person: Omit<Person, 'id'>) => {
    const newPeople = [...(people || []), { ...person, id: Date.now().toString() }].sort((a, b) =>
      a.name.localeCompare(b.name),
    );
    setPeople(newPeople);
  };

  return {
    addPerson,
    people,
  };
};
