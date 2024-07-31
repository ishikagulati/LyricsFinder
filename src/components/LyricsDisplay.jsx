import  { useContext } from 'react';
import { LyricsContext } from '../Context/LyricsContext';
import './LyricsDisplay.css';

const LyricsDisplay = () => {
  const { lyrics, loading } = useContext(LyricsContext);

  return (
    <div className="lyrics-display">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <pre>{lyrics}</pre>
      )}
    </div>
  );
};

export default LyricsDisplay;
