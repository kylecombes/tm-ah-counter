import { useState } from 'react';
import { useFillerWords } from '../storage/useFillerWords';
import { usePeople } from '../storage/usePeople';
import { Person } from '../types';
import { WordGrid } from './_internal/WordGrid';

export const FillerWordCounter = () => {
  const { people } = usePeople();
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  const { fillerWords } = useFillerWords();
  const [wordCounts, setWordCounts] = useState<Record<string, number>>({});

  return (
    <div>
      <select
        onChange={(e) => {
          const personId = e.target.value;
          const person = people?.find((person) => person.id === personId);
          setSelectedPerson(person!);
        }}
      >
        <option value="">Select a person</option>
        {people?.map((person) => (
          <option key={person.id} value={person.id}>
            {person.name}
          </option>
        ))}
      </select>
      <WordGrid
        onWordClick={(word) => {
          setWordCounts((prevWordCounts) => ({
            ...prevWordCounts,
            [word.id]: (prevWordCounts[word.id] || 0) + 1,
          }));
        }}
        words={fillerWords || []}
        wordCounts={wordCounts}
      />
    </div>
  );
};
