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
    
    componentDidMount(){
        this.props.setActivePage("CV")
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

        return <div className="cv">
            <SideMenu 
                isShawn={this.state.isSideMenuShown}
                subject={this.state.SideMenuSubject}
                show={this.handleHideSideMenu}                
            />
            <div className="cv-maincontent">           
            {/* <div style={{backgroundColor:'red',border:'1px solid blue',flex:1}}>eze</div>
            <div style={{backgroundColor:'red',border:'1px solid blue',flex:1}}>zerzer</div> */}

                <RSC className="cv-maincontent-scrollbox">
                    <Content
                        showSideMenu={this.handleShowSideMenu}
                        isSideMenuShown = {this.state.isSideMenuShown}
                    />
                </RSC>
            </div>

        </div>;
    }
}

export default CV;