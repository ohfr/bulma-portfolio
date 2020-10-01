import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/" component={Home} />
    </div>
  );
}

export default App;
