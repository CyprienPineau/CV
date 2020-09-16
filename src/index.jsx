import React, {Component} from 'react'
import ReactDOM, {render} from 'react-dom'
import './index.css'

import Header from './Componants/Header.jsx'
import Content from './Componants/Content.jsx'
import SideMenu from './Componants/SideMenu'
import RSC from "react-scrollbars-custom";

class Home extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            isSideMenuShown : false,
            SideMenuSubject : '',
        }
        this.handleShowSideMenu = this.handleShowSideMenu.bind(this)
        this.handleHideSideMenu = this.handleHideSideMenu.bind(this)
    }
    
    // fonction permettant de faire apparaitre le volet
    handleShowSideMenu(e){
        // récupération des donnée data-user sur e.target.dataset.user pour avoir le sujet sélectonné
        this.setState({isSideMenuShown : true, SideMenuSubject : e.target.dataset.user })
    }

    // fonction permettant de cacher le volet
    handleHideSideMenu(){
        this.setState({isSideMenuShown : false})
    }

    render() { 
        return <div className="home">
            <div className="home-maincontent">
                <RSC className="home-maincontent-scrollbox">
                    <Header/>
                    <Content
                        showSideMenu={this.handleShowSideMenu}
                    />
                </RSC>
                {/* <a href="" className="home-maincontent-returnTop">
                    <svg width="29" height="16" viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="13.7071" y1="0.707108" x2="27.8492" y2="14.8492" stroke="white" strokeWidth="2"/>
                        <line x1="14.8493" y1="0.707107" x2="0.707121" y2="14.8492" stroke="white" strokeWidth="2"/>
                    </svg>
                </a> */}
            </div>
            <SideMenu 
                isShawn={this.state.isSideMenuShown}
                subject={this.state.SideMenuSubject}
                show={this.handleHideSideMenu}                
            />
        </div>;
    }
}

render(
    <div className="mainpage">
        <Home/>
    </div>,
    document.getElementById('app')    
)


// ScrollbarCustom
// https://github.com/xobotyi/react-scrollbars-custom

// Implement smoof scrolling
//https://www.digitalocean.com/community/tutorials/how-to-implement-smooth-scrolling-in-react

// Hide Scrollbards
// https://www.geeksforgeeks.org/hide-scroll-bar-but-while-still-being-able-to-scroll-using-css/
