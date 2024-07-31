import  { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// Create a Context for Lyrics
export const LyricsContext = createContext();

export const LyricsProvider = ({ children }) => {
  const [lyrics, setLyrics] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchLyrics = async (song) => {
    setLoading(true);
    try {
      // Example API call - replace with your actual lyrics API
      const response = await fetch(`https://api.lyrics.ovh/v1/${song}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setLyrics(data.lyrics || 'Lyrics not found');
    } catch (error) {
      console.error('Error fetching lyrics:', error); // Log error for debugging
      setLyrics('Error fetching lyrics');
    }
    setLoading(false);
  };

  return (
    <LyricsContext.Provider value={{ lyrics, loading, fetchLyrics }}>
      {children}
    </LyricsContext.Provider>
  );
};

// Define PropTypes for LyricsProvider
LyricsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default LyricsProvider;
