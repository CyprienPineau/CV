import React, { Component } from 'react';
import {Link} from "react-router-dom";

import './NavBar.css'

class NavBar extends Component {

    render() { 
        return <div className="navbar" >
            <Link className="navbar-button" to ="/" >
                <p>Accueil</p>
                <div className={ this.props.activePage =='Home' ? "navbar-button-cursor" : "navbar-button-nocursor"}/>
            </Link>

            <Link className="navbar-button" to ="/CV">
                <p>CV</p>
                <div className={ this.props.activePage =='CV' ? "navbar-button-cursor" : "navbar-button-nocursor"}/>
            </Link>
            
            <Link className="navbar-button" to ="/Portefolio">
                <p>Portefolio</p>
                <div className={ this.props.activePage =='Portefolio' ? "navbar-button-cursor" : "navbar-button-nocursor"}/>
            </Link>
        </div>;
    }
}
 
export default NavBar;