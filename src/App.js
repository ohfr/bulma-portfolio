import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import AboutPage from './Components/AboutPage';

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/About" component={AboutPage} /> */}
    </div>
  );
}

export default App;
