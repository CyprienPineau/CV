import React, {Component} from 'react';
import './Footer.css'

class Footer extends Component {
    
    render() { 
        return <div className="footer">
            <a href="#header" className="footer-returnatthetop">
                <svg className="footer-returnatthetop-svg" width="29" height="16" viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="13.7071" y1="0.707108" x2="27.8492" y2="14.8492" stroke="white" strokeWidth="2"/>
                    <line x1="14.8493" y1="0.707107" x2="0.707121" y2="14.8492" stroke="white" strokeWidth="2"/>
                </svg>
                Retourner en haut de la page
            </a>
        </div>
    }
}
 
export default Footer;