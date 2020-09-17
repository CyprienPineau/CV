import React, {Component} from 'react'
import './ExperienceList.css'
import DATA_EXPERIENCES from '../../data/data_experiences.js'
import ButtonSkills from './ButtonSkills'


class Experience extends Component {

    constructor(props){
        super(props)
    }

    render() {
        const listSkills = this.props.experience.skills.map((skill,key) =>
            <ButtonSkills 
                skill={skill}
                key={key}
                showSideMenu={this.props.showSideMenu}
            />
        );

        return <div id={"exp"+ this.props.experience.id} className="experience">
            <div className="experience-header">
                <p className="experience-date">{this.props.experience.date}</p>
            </div>
            <div className="experience-corps">
                <h4>
                    <span className={this.props.isSideMenuShown ? "experience-work sidemenuopen" : "experience-work"}>{this.props.experience.work}</span>                    
                    <br/>
                    <span className="experience-entreprise">{this.props.experience.entreprise}</span>
                    <a href={this.props.experience.locationRef} target="_blank" className="experience-location">
                        <svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 5.95C12 9.23609 7.71429 17 6 17C4.28571 17 0 9.23609 0 5.95C0 2.66391 2.68629 0 6 0C9.31371 0 12 2.66391 12 5.95Z" fill="#6CB0D7"/>
                        </svg>
                        {" " + this.props.experience.location}
                    </a>
                </h4>

                <h5 className="experience-title">{this.props.experience.title}</h5>

                <p className="experience-description">{this.props.experience.description}</p>
                <div className="experience-skills">
                    {listSkills}
                </div>
            </div>
    </div>
    }
}

class ExperienceList extends Component {
    
    constructor(props){
        super(props)
    }

    render() { 
        const ExperienceList = DATA_EXPERIENCES.map((experience, key)=>
            <Experience 
                experience={experience} 
                key={key}
                showSideMenu={this.props.showSideMenu}
                isSideMenuShown={this.props.isSideMenuShown}
            />
        )
        return <div 
            id="experiences" 
            className={this.props.isSideMenuShown ? "experienceList sidemenuopen" : "experienceList"}
        >
            <h2 className="experienceList-title" >Expériences</h2>
            {ExperienceList}
        </div>
    }
}
 
export default ExperienceList;