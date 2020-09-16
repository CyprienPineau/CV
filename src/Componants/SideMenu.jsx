import React, { Component } from 'react';
import RSC from "react-scrollbars-custom";
import './SideMenu.css'

import DATA_EXPERIENCES from './../../data/data_experiences'
import DATA_SKILLS from './../../data/data_skills'

function SkillExperience (data_experience) {
    return <a href={"#exp"+data_experience.experience.id} className="skillexperience">
        <h3 className="skillexperience-duration">{data_experience.experience.duration}</h3>
        <h4 className="skillexperience-work">{data_experience.experience.work}</h4>
        <h5 className="skillexperience-title">{data_experience.experience.title}</h5>
        {/* <p className="skillexperience-description">{data_experience.experience.description}</p> */}
    </a>
}

class SideMenu extends Component {
    
    constructor(props){
        super(props)
    }

    render() { 
        const subject = this.props.subject

        // selection les experiences correspondant au sujet du volet
        const list = DATA_EXPERIENCES.map(function(experience,key){
            let isIntheSubject = false;
            
            experience.skills.map(function(skill,key){
                if(skill == subject){
                    isIntheSubject = true; // a optimiser
                }
            })

            if (isIntheSubject == true) {
                return <SkillExperience
                        key = {key}
                        experience = {experience}
                    />
            }
        })

        // selection de la note correspondant au sujet
        const note = DATA_SKILLS.map(function(typeskills,key){
            let skillNote = ''

            typeskills.masterList.map(function(skill,key){
                if (skill.name == subject) {
                    skillNote = skill.note
                }
            })

            return <p key={key} className="sidemenu-infosupp">{skillNote}</p>
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
                    {list}
                    {/* <p className="sidemenu-infosupp"> */}
                        {note}
                    {/* </p> */}
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