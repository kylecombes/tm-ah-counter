import { useLocalStorage } from 'react-use';
import { FillerWord } from '../types';

export const useFillerWords = () => {
  const [fillerWords, setFillerWords] = useLocalStorage<FillerWord[]>('fillerWords', []);

  const addFillerWord = (fillerWord: Omit<FillerWord, 'id'>) => {
    const newWords = [...(fillerWords || []), { ...fillerWord, id: Date.now().toString() }].sort((a, b) =>
      a.name.localeCompare(b.name),
    );
    setFillerWords(newWords);
  };

  return {
    addFillerWord,
    fillerWords,
  };
};
