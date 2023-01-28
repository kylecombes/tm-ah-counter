import { FillerWord } from '../../types';
import './WordGrid.css';

interface WordGridProps {
  className?: string;
  disabled?: boolean;
  onWordClick: (word: FillerWord) => void;
  wordCounts: Record<string, number>;
  words: FillerWord[];
}

export const WordGrid: React.VFC<WordGridProps> = ({ className, disabled, onWordClick, wordCounts, words }) => {
  return (
    <div className={'WordGrid ' + (className || '')}>
      {words.map((word) => (
        <button className="WordGrid__word" disabled={disabled} key={word.id} onClick={() => onWordClick(word)}>
          <span className="WordGrid__word-count">{wordCounts[word.id] || 0}</span>
          <span className="WordGrid__word-name">{word.name}</span>
        </button>
      ))}
    </div>
  );
};
