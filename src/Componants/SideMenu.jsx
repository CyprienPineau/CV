import React, { Component } from 'react';
import RSC from "react-scrollbars-custom";
import './SideMenu.css'

import DATA_EXPERIENCES from './../../data/data_experiences'
import DATA_SKILLS from './../../data/data_skills'

class SkillExperience extends Component {
    
    render() { 
        return <a 
            href={"#exp"+this.props.experience.id} 
            className="skillexperience"
            onClick={this.props.innerWidth < 700 ? this.props.show : null} 
        >
            <h3 className="skillexperience-duration">{this.props.experience.duration}</h3>
            <h4 className="skillexperience-work">{this.props.experience.work}</h4>
            <h5 className="skillexperience-title">{this.props.experience.title}</h5>
            {/* <p className="skillexperience-description">{experience.description}</p> */}
        </a>
    }
}

class SideMenu extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            
            windowInnerWidth : window.innerWidth
        }
        
        //surveillance du resize fenètre pour la mise à jour du comportement de SkillExperience
        this.UpdateWindowInnerWidth = this.UpdateWindowInnerWidth.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.UpdateWindowInnerWidth);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.UpdateWindowInnerWidth);
    }

    UpdateWindowInnerWidth(){
        this.setState({windowInnerWidth : window.innerWidth})
    }

    render() { 
        const subject = this.props.subject
        const show = this.props.show
        const windowInnerWidth = this.state.windowInnerWidth

        // selection les experiences correspondant au sujet du volet
        const experienceList = DATA_EXPERIENCES.map(function(experience,key){
            let isIntheSubject = false;
            
            experience.skills.map(function(skill,key){
                if(skill == subject){
                    isIntheSubject = true; // TODO a optimiser
                }
            })

            if (isIntheSubject == true) {
                return <SkillExperience
                        key = {key}
                        experience = {experience}
                        show = {show}
                        innerWidth = {windowInnerWidth}
                    />
            }
        })

        // selection de la note correspondant au sujet
        const skillNote = DATA_SKILLS.map(function(typeskills,key){
            let skillNoteToReturn = ''

            typeskills.masterList.map(function(skill,key){
                if (skill.name == subject) {
                    skillNoteToReturn = skill.note // TODO a optimiser
                }
            })
            typeskills.juniorList.map(function(skill,key){
                if (skill.name == subject) {
                    skillNoteToReturn = skill.note // TODO a optimiser
                }
            })

            return <p key={key} className="sidemenu-infosupp">{skillNoteToReturn}</p>
        })     

        return <div className={this.props.isShawn ? "sidemenu shown" : "sidemenu" }>
            <a onClick={this.props.show} className={this.props.isShawn ? "sidemenu-buttonclose shown" : "sidemenu-buttonclose" }>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.707107" y1="0.707108" x2="14.8492" y2="14.8492" stroke="white" strokeWidth="2"/>
                    <line x1="14.8493" y1="0.707107" x2="0.707121" y2="14.8492" stroke="white" strokeWidth="2"/>
                </svg>
            </a>
            <RSC>
                <div className="sidemenu-scrollcontainer">
                    <h2 className="sidemenu-title">
                        {this.props.subject}
                    </h2>

                    {experienceList}

                    {skillNote}

                </div>
            </RSC>
        </div>     
    }
}

// defining default values for the properties
SideMenu.defaultProps={
    isShawn: false
};
 
export default SideMenu;