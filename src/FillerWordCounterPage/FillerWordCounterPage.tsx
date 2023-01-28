import { useState } from 'react';
import { useFillerWords } from '../hooks/useFillerWords';
import { usePeople } from '../hooks/usePeople';
import { useTimer } from '../hooks/useTimer';
import { Person, PersonPerformance } from '../types';
import { WordGrid } from './_internal/WordGrid';

export const FillerWordCounter = () => {
  const { people } = usePeople();
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  const { fillerWords } = useFillerWords();
  const [performances, setPerformances] = useState<Record<string, PersonPerformance>>({});

  const { elapsedTime, isRunning, resetTimer, startTimer, stopTimer } = useTimer();

  return (
    <div>
      <select
        disabled={isRunning}
        onChange={(e) => {
          const personId = e.target.value;
          const person = people?.find((person) => person.id === personId) ?? null;
          setSelectedPerson(person);
          if (!person) return;
          const previousTime = performances[person.id]?.elapsedTime || 0;
          resetTimer(previousTime);
        }}
      >
        <option value="">Select a person</option>
        {people?.map((person) => (
          <option key={person.id} value={person.id}>
            {person.name}
          </option>
        ))}
      </select>
      <button
        disabled={!selectedPerson}
        onClick={() => {
          if (isRunning) {
            stopTimer();
            setPerformances((prevPerformances) => ({
              ...prevPerformances,
              [selectedPerson!.id]: {
                ...prevPerformances[selectedPerson!.id],
                elapsedTime,
              },
            }));
          } else {
            startTimer();
          }
        }}
      >
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <span>{elapsedTime} second(s)</span>
      <WordGrid
        disabled={!selectedPerson || !isRunning}
        onWordClick={(word) => {
          setPerformances((prevPerformances) => ({
            ...prevPerformances,
            [selectedPerson!.id]: {
              ...prevPerformances[selectedPerson!.id],
              fillerWordCounts: {
                ...prevPerformances[selectedPerson!.id]?.fillerWordCounts,
                [word.id]: (prevPerformances[selectedPerson!.id]?.fillerWordCounts[word.id] || 0) + 1,
              },
            },
          }));
        }}
        words={fillerWords || []}
        wordCounts={performances[selectedPerson?.id || '']?.fillerWordCounts || {}}
      />
    </div>
  );
};
