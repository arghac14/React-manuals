import React, {Component} from 'react';
import './App.css';
import  {BrowserRouter, Router, Route, Redirect, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Test from './components/Test';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Form from './components/Form';

class App extends Component {
    render(){
      return (
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
      );
  }
}


export default App;
