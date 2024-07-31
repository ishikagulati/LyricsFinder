import  { useState, useContext } from 'react';
import { LyricsContext } from '../Context/LyricsContext';
import './SearchBar.css';

const SearchBar = () => {
  const [song, setSong] = useState('');
  const { fetchLyrics } = useContext(LyricsContext);

  const handleSearch = () => {
    if (song.trim()) {
      fetchLyrics(song);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter song name"
        value={song}
        onChange={(e) => setSong(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
