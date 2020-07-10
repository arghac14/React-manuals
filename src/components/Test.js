import React, {Component} from 'react';

class Test extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const info = {role: 'Web Developer', Age: 21};
      return (
          <div className="test">
              <h1>Hello World!</h1>
              <h1>I am {this.props.name}</h1>
              <h1>My age is {info.Age} </h1>
          </div>
      );
  }
}


export default Test;
