import React, {Component} from 'react';
import './App.css';
import  {BrowserRouter, Router, Route, Redirect, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Test from './components/Test';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Form from './components/Form';

import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/ConfigureStore';
const store = ConfigureStore();


class App extends Component {
    render(){
      return (
        <Provider store = {store}>
        <BrowserRouter>
        <>
              <Navbar/>
              <Switch>
                  <Route exact path='/test' component = {()=><Test name="Arghadip Chakraborty"/>}/>
                  <Route exact path='/form' component = {()=><Form/>}/>
                  <Route path='/test/:username/:age' component = {({match})=><Test name={match.params.username} age={match.params.age}/>}/>
                  <Route exact path ='/exp' component = {Experience}/>
                  <Redirect to='/'/>
              </Switch>
              <Footer/>
        </>
        </BrowserRouter>
        </Provider>
      );
  }
}


export default App;
