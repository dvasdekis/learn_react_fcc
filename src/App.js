import React from 'react';
import './App.css';
import Jokes from './components/jokes'

function App() {
  return (
    <div className="App">
      <Jokes gag={{joke: "What kind of Dog poos well?", answer: "FroYo"}}/>
      <Jokes gag={{joke: "What kind of Dog poos badly?", answer: "Curry and Rice"}}/>
    </div>
  );
}

export default App;
