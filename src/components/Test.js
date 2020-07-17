import React, {Component} from 'react';
import Experience from '../components/Experience';
import {Switch, Route, Redirect} from 'react-router-dom';
import App from '../App';
class Test extends Component {
    constructor(props){
        super(props);
    //const n = props.name;

    this.state = {
        name : 'arghac14',
        Age : 22,
        show: true
     }
    }

    static getDerivedStateFromProps(props, state) {
        return {name: props.name};
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({Age: 22.1})
        }, 1000)
    }

    shouldComponentUpdate(){
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML =
        "Before the update, the age was " + prevState.Age;
    }
      componentDidUpdate() {
        document.getElementById("div2").innerHTML =
        "The updated age is " + this.state.Age;
    }

    changeContent = (age) => {
        this.setState({Age: age});
    }

    delHeader = () => {
        this.setState({show: false});
    }

    render(){
      const info = {role: 'Web Developer', Age: 21};
      let myheader;
          if(this.state.show){
              myheader = <Test2/>
          }

          const mystyle = {
            color: "yellow",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
          };
          const AppPage = ()=>{
              return <App/>;
          }

      return (
          <div className="test">
              {myheader}
              <h1 style={{backgroundColor: "blue"}}>Hello World!</h1>
              <h1>I am {this.state.name}</h1>
              <h1 style={{mystyle}}> My age is {this.state.Age} </h1>
              <button type="button" onClick = {()=>this.changeContent(25)}>Click Here</button>
              <button type="button" onClick = {this.delHeader}>Delete</button>
              <div id="div1"></div>
              <div id="div2"></div>
              <div id="div3">
                  <div className="container">
                      
                      <div className="row">
                          <div className="col-md-6 col-sm-6 col-lg-6 col-xs-6">
                                <h3>Boostrap working!</h3>
                          </div>
                          <div className="col-md-6 col-sm-6 col-lg-6 col-xs-6">
                                <h3>Boostrap working!</h3>
                                
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      );
  }
}

class Test2 extends React.Component{
    componentWillUnmount(){
        console.log("Component is about to be unmounted!");
    }
    render(){
        return (
        <h1>LOL!</h1>
        );
    }   
}

export default Test;
