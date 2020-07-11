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
          </div>
      );
  }
}


export default Test;
