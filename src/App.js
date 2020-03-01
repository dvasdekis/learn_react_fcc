import React from 'react';
import './App.css';
import Jokes from './components/Jokes'
import JokesData from './components/JokesData'



function App() {
    // The Map function takes an object as an input (can be data or a return or a function),
    // and returns an output that can reference imported functions
      const jokeComponents = JokesData.map(function(eachJoke) {
          return (
              <Jokes key={eachJoke.id}
                     joke={eachJoke.question}
                     answer={eachJoke.punchLine}
              />
          )
      } )

    // We still need to finally create a return with the product of all the iterations of Map.
    // This is what gets displayed in the browser.
    return (
        <div>
            {jokeComponents}
        </div>
    )

}

export default App;
