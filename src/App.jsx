import React, {Component} from 'react'

import {BrowserRouter,Switch, Route} from "react-router-dom";

import './index.css';

import Home from './Componants/Home.jsx';
import NavBar from './Componants/NavBar.jsx';
import About from './Componants/About.jsx';
import CV from './Componants/CV.jsx';
import Portefolio from './Componants/Portefolio.jsx';

import Intro from './Componants/Intro.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            activePage : "Home" 
        }
        this.setActivePage = this.setActivePage.bind(this)
    }

    setActivePage(pageName){
        this.setState({ activePage : pageName });
    }

    render() {
        return <div className="app">
            <BrowserRouter>
                <Intro/> 
                <NavBar activePage={this.state.activePage}/>
                <Switch onChange={()=>console.log("change")}>
                    {/* TODO à intégrer */}
                    {/* <Route component={About} path="/about"></Route> */} 
                    <Route path="/CV">
                        <CV setActivePage= {this.setActivePage}/>
                    </Route>
                    <Route  path="/Portefolio">
                        <Portefolio setActivePage= {this.setActivePage}/>
                    </Route>
                    <Route path="/" >
                        <Home setActivePage= {this.setActivePage}/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    }
}

export default App