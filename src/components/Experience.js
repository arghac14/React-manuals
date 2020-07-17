import React, {Component} from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Test from '../components/Test';

class Experience extends Component {
    constructor(props){
        super(props);
    }
    render(){
      return (
        <>
          <h1>THIS IS THE Experience PAGE!!!</h1>
          <Test name = "Arghadip"/>
        </>
      );
  }
}


export default Experience;
