import React, { Component } from 'react';

import './Portefolio.css';

import DATA_PORTEFOLIO from './../../data/data_porfolio'

function Section ({section}) {

    return <div className="portefolio-section" style={{background: `url(${section.background}) center center`}}>
        <div 
            className="portefolio-section-filter"  
            style={{backgroundColor: section.backgroundColor}}
        >
            <img className="portefolio-section-logo" src={section.logo} alt="Logo de ..."/>
            <a 
                className="portefolio-section-button" 
                style={{backgroundColor: section.hightlightColor}}
                >
                    {/* Consulter */}
                    <p className="working">En cours de réalisation...</p>
                    <p className="working">N'hésitez pas à revenir plus tard !</p>
            </a>
        </div>
    </div> 
}


class Portefolio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index : 0
        }
        this.handleGoRight = this.handleGoRight.bind(this)
        this.handleGoLeft = this.handleGoLeft.bind(this)
    }

    handleGoRight(){
        this.setState((lastState)=>({index : lastState.index + 1}))
    }

    handleGoLeft(){
        this.setState((lastState)=>({index : lastState.index - 1}))
    }

    render() {
        // obtention de l'index relatif au nombre maximum de sections
        let indexRef = Math.abs(this.state.index % DATA_PORTEFOLIO.length)  

        const porfolioSections = DATA_PORTEFOLIO.map((section,key)=>{
            return <div 
                key = {key}
                className="porfolio-slide" 
                style= {{transform:`translateX(-${indexRef*100}%`}}
            >
                <Section
                    section = {section}
                /> 
            </div>
        })

        const porfolioIndicators = DATA_PORTEFOLIO.map((section,key)=>{
            return <div key={key} className={indexRef == key ? "portefolio-pageindicator-active":"portefolio-pageindicator-unactive" }/>
        })

        return <div className="portefolio">
            {/* <Working/> */}
            
            <a onClick={this.handleGoRight} className="portefolio-buttonRight">
                <svg width="34" height="52" viewBox="0 0 34 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.1421 26L7.14209 -2.27299e-06L7.14209 52L33.1421 26Z" fill="#EB4E22"/>
                    <rect x="7.07104" y="33" width="10" height="10" transform="rotate(-135 7.07104 33)" fill="white"/>
                </svg>
            </a>

            {porfolioSections}

            <a onClick={this.handleGoLeft} className="portefolio-buttonLeft">
                <svg width="34" height="52" viewBox="0 0 34 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-4.54598e-06 26L26 52L26 4.54598e-06L-4.54598e-06 26Z" fill="#EB4E22"/>
                    <rect x="26.071" y="19" width="10" height="10" transform="rotate(45 26.071 19)" fill="white"/>
                </svg>
            </a>

            <div className="portefolio-pageindicator">
                {porfolioIndicators}
            </div>
        </div>;
    }
}
 
export default Portefolio;