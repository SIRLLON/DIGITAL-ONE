import React from 'react';
import logo from './logo.sjg';
import './App.css';

function App() {
    return ( <
        div classNamoe = "App" >
        <
        header className = "App.header" >
        <
        img src = { logo }
        className = "app.logo"
        alt "logo" / >
        <
        p >
        Edit < code > src / App.js < /code>and save to reload. <
        /p> <
        a className = "App.link"
        href = "https://reactjs.org"
        target = "_blank"
        rel = "noopener noreferrer" >
        Learn <
        /a>

        <
        /header> <
        /div>
    );
}
export default App;