import { FillerWord } from '../../types';

interface WordGridProps {
  onWordClick: (word: FillerWord) => void;
  wordCounts: Record<string, number>;
  words: FillerWord[];
}

export const WordGrid: React.VFC<WordGridProps> = ({ onWordClick, wordCounts, words }) => {
  return (
    <div className="WordGrid">
      {words.map((word) => (
        <button className="WordGrid__word" key={word.id} onClick={() => onWordClick(word)}>
          <span className="WordGrid__word-count">{wordCounts[word.id] || 0}</span>
          <span className="WordGrid__word-name">{word.name}</span>
        </button>
      ))}
    </div>
  );
};
