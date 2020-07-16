import React, {Component} from 'react';

class Test extends Component {
    constructor(props){
        super(props);
    //const n = props.name;

    this.state = {
        name : 'arghac14',
        Age : 22
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

    render(){
      const info = {role: 'Web Developer', Age: 21};
      return (
          <div className="test">
              <h1>Hello World!</h1>
              <h1>I am {this.state.name}</h1>
              <h1>My age is {this.state.Age} </h1>
              <button type="button" onClick = {()=>this.changeContent(25)}>Click Here</button>
              <div id="div1"></div>
        <div id="div2"></div>
          </div>
      );
  }
}


export default Test;
