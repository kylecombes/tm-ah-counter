import { useState } from 'react';

import { useFillerWords } from '../hooks/useFillerWords';

export const FillerWordListPage = () => {
  const { addFillerWord, fillerWords } = useFillerWords();
  const [newFillerWord, setNewFillerWord] = useState('');

  const addNewFillerWord = () => {
    addFillerWord({ name: newFillerWord });
    setNewFillerWord('');
  };

  return (
    <div className="page padded-section">
      <h1>Filler Word List</h1>
      <section>
        <h2>Add Filler Word</h2>
        <input
          onChange={(e) => setNewFillerWord(e.target.value)}
          onKeyDown={(e) => {
            if (e.code === 'Enter') {
              addNewFillerWord();
            }
          }}
          value={newFillerWord}
        />
        <button onClick={addNewFillerWord}>Add Filler Word</button>
      </section>
      <section>
        <h2>Existing Filler Words</h2>
        <ul>
          {fillerWords?.map((fillerWord) => (
            <li key={fillerWord.id}>{fillerWord.name}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};
