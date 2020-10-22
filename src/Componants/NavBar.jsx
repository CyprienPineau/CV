import React, { Component } from 'react';
import {Link} from "react-router-dom";

import './NavBar.css'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHomeSlected : true,
            isCvSlected : false,
            isPorfolioSlected : false,
        }
        this.handleClickHome = this.handleClickHome.bind(this)
        this.handleClickCv = this.handleClickCv.bind(this)
        this.handleClickPorfolio = this.handleClickPorfolio.bind(this)
    }

    

    handleClickHome(){
        this.setState({isHomeSlected : true, isCvSlected : false, isPorfolioSlected : false});
    }
    handleClickCv(){
        this.setState({isHomeSlected : false, isCvSlected : true, isPorfolioSlected : false});
    }
    handleClickPorfolio(){
        this.setState({isHomeSlected : false, isCvSlected : false, isPorfolioSlected : true});
    }
    

    render() { 
        return <div className="navbar" >
            <Link className="navbar-button" to ="/" onClick={this.handleClickHome}>
                <p>Accueil</p>
                <div className={ this.state.isHomeSlected ? "navbar-button-cursor" : "navbar-button-nocursor"}/>
            </Link>

            <Link className="navbar-button" to ="/CV" onClick={this.handleClickCv}>
                <p>CV</p>
                <div className={ this.state.isCvSlected ? "navbar-button-cursor" : "navbar-button-nocursor"}/>
            </Link>
            
            {/* <Link className="navbar-button" to ="/Portefolio" onClick={this.handleClickPorfolio}>
                <p>Portefolio</p>
                <div className={ this.state.isPorfolioSlected ? "navbar-button-cursor" : "navbar-button-nocursor"}/>
            </Link> */}
        </div>;
    }
}
 
export default NavBar;