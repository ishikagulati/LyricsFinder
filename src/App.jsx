
import LyricsProvider from './Context/LyricsContext.jsx';
import SearchBar from './components/SearchBar.jsx';
import LyricsDisplay from './components/LyricsDisplay.jsx';
import './App.css';

const App = () => {
  return (
    <LyricsProvider>
      <div className="app">
        <h1>Lyrics Finder</h1>
        <SearchBar />
        <LyricsDisplay />
      </div>
    </LyricsProvider>
  );
};

export default App;
