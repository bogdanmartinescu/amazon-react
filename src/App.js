import React from 'react';
import Header from './components/header';
import Home from './components/home';
// import app styles
import './App.scss';

function App() {
  return (
    <div className="app">
        <Header />
        <Home />
    </div> 
  );
}

export default App;
