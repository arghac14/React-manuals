import React, {Component} from 'react';

class Test extends Component {
    constructor(props){
        super(props);
    
    this.state = {
        name : 'arghac14',
        Age : 22
     }
}

    changeContent = () => {
        this.setState({Age: 20});
    }

    render(){
      const info = {role: 'Web Developer', Age: 21};
      return (
          <div className="test">
              <h1>Hello World!</h1>
              <h1>I am {this.state.name}</h1>
              <h1>My age is {this.state.Age} </h1>
              <button type="button" onClick = {this.changeContent}>Click Here</button>
          </div>
      );
  }
}


export default Test;
