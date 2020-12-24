//importing packages
import React,{Fragment,useEffect} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

//imporitng styles
import './App.css';
import './styles/index.css'

//importing compenents
import Home from './components/home/Home.js'

function App() {
  return (
    <Router>
    <Fragment>
      <Route exact path='/' component={Home}/>
    </Fragment>
    </Router>
  
  );
}

export default App;
