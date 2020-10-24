import React, { Component } from 'react';
import Radium from 'radium'; // permet d'ecrire des props css type :hover en jsx

import './PortefolioSection.css';
import PortefolioZoom from './PortefolioZoom.jsx'

class PortefolioSection extends Component {
    
    constructor(props) {
        super(props);
    }

    render() { 

        return <div className="portefoliosection">
            <div className="portefoliosection-background" 
                style={{
                    backgroundImage: `url(${this.props.section.background})`,
                    height: this.props.isConsulting ? "40%":"100%",
                    transition: this.props.isConsulting ? 'ease-in-out 0.5s':'ease-in-out 0.2s'
                    }}>
                <div 
                    className="portefoliosection-background-filter"  
                    style={{backgroundColor: this.props.section.backgroundColor}}
                >
                    <img 
                        className=  {this.props.isConsulting ? "portefoliosection-logominimized" : "portefoliosection-logo" }
                        src={this.props.section.logo} 
                        alt={"Logo de"+this.props.section.name}
                    />
                    
                    {!this.props.isConsulting && <a 
                        key={"ConsultButton"+this.props.section.name}
                        onClick={this.props.handleConsult}
                        className="portefoliosection-button" 
                        style={{
                            backgroundColor: this.props.section.hightlightColor,
                            ':hover':{ 
                                cursor: 'pointer',
                                backgroundColor: this.props.section.hightlightColorHover, 
                                transition:'0.3s'
                            }
                        }}>
                            Consulter
                    </a>}
                </div>
            </div>
            {this.props.isConsulting && <PortefolioZoom
                section = {this.props.section}
            />}
        </div>
    }
}
 
export default Radium(PortefolioSection);