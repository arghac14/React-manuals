import React, {Component} from 'react';
import '../App.css';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <>
                <footer className="container-fluid" style={{fontSize: "20px",position:"fixed",bottom: "0%", color: "rgb(192,192,192)" ,textAlign: "center", background: "rgba(0,0,0,0.4)"}}>
                <p><span>&copy; 2019 </span> Arghadip Chakaborty</p>
                </footer> 

            </>
        );
    }
}

export default Footer;
