//importing packages
import React,{Fragment,useEffect} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

//imporitng styles
import './App.css';
import './styles/index.css'

//importing compenents
import Home from './components/home/Home.js';
import Addfile from './components/addFile/Addfile'

//redux
import {Provider} from 'react-redux';
import store from './store';


function App() {
  return (
    <Provider store={store}>
    <Router>
    <Fragment>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/addfile' component={Addfile}/>
      </Switch>
    </Fragment>
    </Router>
    </Provider>
  );
}

export default App;
