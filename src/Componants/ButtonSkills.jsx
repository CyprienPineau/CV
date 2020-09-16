import React, {Component} from 'react';
import './ButtonSkills.css'

class ButtonSkills extends Component {
    
    constructor(props){
        super(props)
    }

    render() {
        return <div className="skill">
                {(this.props.skill!=undefined) 
                && <a 
                        data-user={this.props.skill}
                        onClick={this.props.showSideMenu}
                        className="skill-button"
                    >
                        {this.props.skill}                    
                    </a>
                }
                {(this.props.duration!=undefined)
                    &&<p className="skill-duration">{this.props.duration}</p>
                }
            </div>
    }
}
 
export default ButtonSkills;