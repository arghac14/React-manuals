import React, {Component} from 'react';
import './App.css';
import  {BrowserRouter, Router, Route, Redirect, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Test from './components/Test';
import Footer from './components/Footer';
import Experience from './components/Experience';


class App extends Component {
    render(){
      return (
        <BrowserRouter>
        <>
              <Navbar/>
              <Switch>
                  <Route exact path='/test' component = {Test}/>
                  <Route exact path ='/exp' component = {Experience}/>
                  <Redirect to='/'/>
              </Switch>
              <Footer/>
        </>
        </BrowserRouter>
      );
  }
}


export default App;
