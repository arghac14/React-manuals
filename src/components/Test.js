import React, {Component} from 'react';

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
      return (
          
          <div className="test">
              {myheader}
              <h1>Hello World!</h1>
              <h1>I am {this.state.name}</h1>
              <h1>My age is {this.state.Age} </h1>
              <button type="button" onClick = {()=>this.changeContent(25)}>Click Here</button>
              <button type="button" onClick = {this.delHeader}>Delete</button>
              <div id="div1"></div>
            <div id="div2"></div>
          </div>
      );
  }
}

class Test2 extends React.Component{
    componentWillUnmount(){
        alert("Component is about to be unmounted!");
        console.log("Component is about to be unmounted!");
    }
    render(){
        return (
        <h1>LOL!</h1>
        );
    }   
}


export default Test;
