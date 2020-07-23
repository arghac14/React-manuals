import React, {Component} from 'react';
import '../App.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            error: ''
        }
    }
    onChangeHandler = (event) => {
        let err = '';
        let nam = event.target.name;
        let val = event.target.value;
        if(Number(nam)){
            err= <p>Username can't be Number!</p>;
        }
        this.setState({error: err});
        this.setState({
            [nam]: val
        })
    }

    onSubmitHandler = (event) => {
        event.preventDefault();   //Prevents from reload
        alert("Submitted!");
    }
    render(){
       
        return(
            <>
                <h1>FORM PAGE:</h1>
                <h2>Hello {this.state.username} of age {this.state.age}!</h2>
                <form onSubmit= {this.onSubmitHandler}>
                    <input type="text" name="username" onChange = {this.onChangeHandler}/>
                    <input type="number" name="age" onChange = {this.onChangeHandler}/>
                    <input type="submit" />
                </form>
                {this.state.error}

            </>
        );
    }
}

export default Form;
