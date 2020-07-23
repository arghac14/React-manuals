import React, {Component} from 'react';
import '../App.css';
import Experience from '../components/Experience';
import Form from '../components/Form';
import {Switch, Route, Redirect, Link, Router, NavLink} from 'react-router-dom';


class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <>
                <nav className="navbar navbar-fixed-top navbar-inverse" style={{fontSsize: "17px", background: "rgba(0,0,0,0.8)", filter: "blur(0px)", borderColor: "rgba(0,0,0,0)"}}>
                    <div className="container-fluid">
                        <div className="navbar-head">
                        <button style={{background:"rgba(0,0,0,1)"}} id="togglemenu" type="button" class="navbar-toggle" data-toggle="collapse" data-target="#mynav">
                             <div classNameName="three col">
                                <div className="hamburger" id="hamburger-11">
                                    <span className="line"></span>
                                    <span className="line"></span>
                                    <span className="line"></span>
                                </div>
                            </div>
                        </button>

                        </div>
                        <div className="collapse navbar-collapse" id="mynav">
                        
                            <ul className="nav navbar-nav navbar-right" style={{fontSize: "17px", display: "inline-block"}}>
                            <li><NavLink to={'/test'}><a href="#home" id="u"><i className="fa fa-home "></i> Home</a></NavLink></li>
                            <li><Link to={'/exp'}><a href="#experience"  id="u"><i className="fa fa-briefcase"></i> Experience</a></Link></li>
                            <li><Link to={`/test/${"lol"}`}><a href="#skills"  id="u"><i className="fa fa-code"></i> Skills</a></Link></li>
                            <li><Link to={`/form`}><a href="#form"  id="u"><i className="fa fa-form"></i> Form</a></Link></li>
                          
                            </ul>
                        
                        </div>
                    </div>
                </nav>
        
            </>
        );
    }
}

export default Navbar;
