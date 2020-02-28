import React from 'react';
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer"


// Elements are regular HTML
// Components hold regular elements
// Parent components hold components inside them

// App() is kind of like a table of contents of React Components
function App() {
  return (
    <div className="App"> {/* A JSX comment */}
        <NavBar/>
        <Main/>
        <Footer/> {/* This is how we can import elements from files */}
    </div>
  );
}

export default App;
