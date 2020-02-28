import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Starting 'functional components practice (https://www.youtube.com/watch?v=DLX62G4lc44&t=1472s)'.
// Use CamelCase for function names

function MyInfo() {
    //Return the JSX you want the functional component to produce
    return (
        <div>
            <h1>I am DIMITRI</h1>
            <p>I like this so far</p>
            <p>I want to visit:</p>
            <ul>
                <li>Spain</li>
                <li>Portugal</li>
                <li>Eastern Europe</li>
                <li>France & Germany</li>
            </ul>
        </div>
    )
} // You can only return a single JSX element. Wrap it in a div if you need more than one thing.

//Default line: ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<MyInfo/>  // Render the MyApp function above
    ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


