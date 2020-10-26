import React, { Component } from 'react';
import Radium from 'radium'; // permet d'ecrire des props css type :hover en jsx

import './Portefolio.css';

import DATA_PORTEFOLIO from './../../data/data_porfolio'
import PortefolioSection from './PortefolioSection'

class Portefolio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index : 0,
            isConsulting : false
        }
        this.handleGoRight = this.handleGoRight.bind(this)
        this.handleGoLeft = this.handleGoLeft.bind(this)
        this.handleConsult = this.handleConsult.bind(this)
        this.handleCloseConsult = this.handleCloseConsult.bind(this)
    }

    componentDidMount(){
        this.props.setActivePage("Portefolio")
    }

    // Ajustement du mode consultation
    handleConsult(){this.setState({isConsulting : true})}
    handleCloseConsult(){this.setState({isConsulting : false})}

    // Navigation dans le carousel
    handleGoRight(){this.setState((lastState)=>({index : lastState.index + 1}))}
    handleGoLeft(){this.setState((lastState)=>({index : lastState.index - 1}))}

    render() {
        // obtention de l'index relatif au nombre maximum de sections
        let indexRef = Math.abs(this.state.index % DATA_PORTEFOLIO.length)  

        // Constuction des Sections
        const portefolioSections = DATA_PORTEFOLIO.map((section,key)=>{
            // return <div style={{backgroundColor:'yellow',border:'1px solid blue',minWidth:'100%',width:'100%'}}></div>
            return <div 
                key = {key}
                className="porfolio-slide" 
                style= {{transform:`translateX(-${indexRef*100}%`,backgroundColor:section.secondaryColor}}
            >  
                <a 
                    key={"CloseButton"+section.name} // Besoin de motifier la key pour utiliser Radium
                    onClick={this.handleCloseConsult} 
                    className="porfolio-slide-btnClose"
                    style={{                        
                        top : !this.state.isConsulting ? "-200px":"-50px",
                        backgroundColor: section.hightlightColor, 
                        ':hover':{ // Possible avec Radium
                            cursor: 'pointer',
                            backgroundColor : section.hightlightColorHover,
                            transition : '0.3s'
                        } 
                    }}>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.707107" y1="0.707108" x2="14.8492" y2="14.8492" stroke="white" strokeWidth="2"/>
                        <line x1="14.8493" y1="0.707107" x2="0.707121" y2="14.8492" stroke="white" strokeWidth="2"/>
                    </svg>
                </a>

                <PortefolioSection
                    section = {section}
                    handleConsult = {this.handleConsult}
                    isConsulting = {this.state.isConsulting}
                /> 
            </div>
        })

        const porfolioIndicators = DATA_PORTEFOLIO.map((section,key)=>{
            return <div key={key} className={indexRef == key ? "portefolio-pageindicator-active":"portefolio-pageindicator-unactive" }/>
        })

        // retour du portefolio complet
        return <div className="portefolio">
            {!this.state.isConsulting && <a onClick={this.handleGoRight} className="portefolio-buttonRight">
                {/* Arrow right */}
                <svg width="34" height="52" viewBox="0 0 34 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.1421 26L7.14209 -2.27299e-06L7.14209 52L33.1421 26Z" fill="#FFFFFF00"/>
                    <rect x="7.07104" y="33" width="10" height="10" transform="rotate(-135 7.07104 33)" fill="white"/>
                </svg>
            </a>}

            {portefolioSections}

            {!this.state.isConsulting && <a onClick={this.handleGoLeft} className="portefolio-buttonLeft">
                {/* Arrow left */}
                <svg width="34" height="52" viewBox="0 0 34 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-4.54598e-06 26L26 52L26 4.54598e-06L-4.54598e-06 26Z" fill="#FFFFFF00"/>
                    <rect x="26.071" y="19" width="10" height="10" transform="rotate(45 26.071 19)" fill="white"/>
                </svg>
            </a>}

            {!this.state.isConsulting && <div className="portefolio-pageindicator">
                {porfolioIndicators}
            </div>}
        </div>;
    }
}
 
export default  Radium(Portefolio);