import React, {Component} from 'react'

import './CV.css'

import Content from './Content.jsx'
import SideMenu from './SideMenu.jsx'
import RSC from "react-scrollbars-custom"

class CV extends Component {
    
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

    componentDidMount() {
        window.addEventListener('scroll', ()=>{
            console.log("scroll")
        });
        console.log("addeventlistener")
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        console.log("removeEventListener")
    }

    render() { 

        return <div className="cv">
            <div className="cv-maincontent">
                <RSC className="cv-maincontent-scrollbox">
                    <Content
                        showSideMenu={this.handleShowSideMenu}
                        isSideMenuShown = {this.state.isSideMenuShown}
                    />
                </RSC>
                {/* TODO a faire apparaitre au bon moment */}
                {/* <a href="" className="cv-maincontent-returnTop">
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

export default CV;