import React, { Component } from 'react';
import DATA_SKILLS from './../../data/data_skills';
import './SkillsList.css'
import ButtonSkills from './ButtonSkills'

class Skills extends Component {

    constructor(props){
        super(props);
    }

    render() { 
        const data_uniqueSkillsMastered = this.props.skillsType.masterList.map((item, key)=>
            <ButtonSkills 
                key={key}
                showSideMenu={this.props.showSideMenu}
                skill={item.name}
                duration={item.duration}
            />
        )
        const data_uniqueSkillsNotion = this.props.skillsType.juniorList.map((item, key)=>
            <ButtonSkills 
                key={key}
                showSideMenu={this.props.showSideMenu}
                skill={item.name}
            />
        )
        return <div className="skills">
            {data_uniqueSkillsMastered}
            {data_uniqueSkillsNotion}
        </div>;
    }
}

class SkillsList extends Component {
    constructor(props){
        super(props)
    }
    render() { 
        const skillsList = DATA_SKILLS.map((item, key)=>
            <div key={key} className="skillslist-skilltype">
                <h3 className="skillslist-skilltype-title">{item.catégorie}</h3>
                <Skills
                    skillsType={item} 
                    key={key}
                    showSideMenu={this.props.showSideMenu}
                />
            </div>
        )

        return <div id="skills" className="skillslist">
            <h2 className="skillslist-title" >Compétences</h2>
            
            <div className="skillslist-content">
                {skillsList}    
            </div>
            
        </div>
    }
}
 
export default SkillsList;