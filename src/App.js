import { Route, Router } from 'react-router-dom';
import Home from './pages/home';
import Store from './components/store';
import './App.css';
import React from 'react';


const App = () => {


  return (
    <Router>
      <Route path='/' Component={Home}/>
      < Route path='/store' element = {<Store/>} />
    </Router>
    // <div className="App">
    // <Store />
    // </div>
  );
}

export default App;
