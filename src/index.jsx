import React, {Component} from 'react'
import ReactDOM, {render} from 'react-dom'
import {BrowserRouter,Switch, Route, Link} from "react-router-dom";

import './index.css';

import Home from './Componants/Home.jsx';
import NavBar from './Componants/NavBar.jsx';
import About from './Componants/About.jsx';
import CV from './Componants/CV.jsx';
import Portefolio from './Componants/Portefolio.jsx';
// import PortefolioZoom from './Componants/PortefolioZoom.jsx';

import Intro from './Componants/Intro.jsx';

render(
    <BrowserRouter>
        <div className="mainpage">
        
            {/* <Intro/>  */}
            <NavBar/>
            <Switch onChange={()=>console.log("change")}>
                <Route component={About} path="/about" />
                <Route component={CV} path="/CV" />
                <Route component={Portefolio} path="/Portefolio" />
                {/* <Route component={PortefolioZoom} path="/Portefolio" /> */}
                <Route component={Home} path="/" />
            </Switch>
        </div>
    </BrowserRouter>, document.getElementById('app')    
)

// ScrollbarCustom
// https://github.com/xobotyi/react-scrollbars-custom

// Implement smoof scrolling
//https://www.digitalocean.com/community/tutorials/how-to-implement-smooth-scrolling-in-react

// Hide Scrollbards
// https://www.geeksforgeeks.org/hide-scroll-bar-but-while-still-being-able-to-scroll-using-css/
