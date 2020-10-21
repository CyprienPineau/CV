import React, { Component } from 'react';

import DATA_PORTEFOLIO from './../../data/data_porfolio'

import './PortefolioZoom.css'

function Section ({section, rawNumber}){
    // optention de la direction d'affichage
    let displayDirection = (rawNumber%2==0) ? "row" : "row-reverse"
    let displayAlignVideo = (rawNumber%2==0) ? "flex-end" : "flex-start"
    let displayAlignContent = (rawNumber%2==0) ? "flex-start" : "flex-end"

    return <div className="section" style={{flexDirection:displayDirection}}>
        <div className="section-video" style={{backgroundImage: `url(${section.img})`, justifyContent:displayAlignVideo}}>
            { section.video != "" && 
                <iframe className="section-video-frame" width="560" height="315" src={section.video} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
            }
        </div>

        <div className="section-content" style={{alignItems:displayAlignContent}}>
            <h3 className="section-content-title">{section.title}</h3>
            <p className="section-content-texte">{section.content}</p>
        </div>
    </div>
}


class PortefolioZoom extends Component {

    render() { 
        // this.props.selectedSectionName;
        let selectedSection;

        //on traque le numéro du rang pour savoir le sens de display
        let rawNumber=0;

        DATA_PORTEFOLIO.map((section,key)=>{
            if(section.name == "Spirit of Adventure"){
                selectedSection = section;
            }
        });

        let paragraph = selectedSection.paragraph.map((section,key)=>{
            rawNumber=rawNumber+1;
            return <Section key={key} section={section} rawNumber={rawNumber} />
        })

        return <div className="portefoliozoom" style={{backgroundColor: selectedSection.primarycolor}}>
            <a href="" className="portefoliozoom-btnClose" style={{backgroundColor: selectedSection.hightlightColor}}>
            </a>
            
            <div className="portefoliozoom-background" style={{backgroundImage: `url(${selectedSection.background})`}}>
                <div className="portefoliozoom-background-filter" style={{backgroundColor: selectedSection.backgroundColor}}>
                    <img className="portefolio-section-logo" src={selectedSection.logo} alt="Logo de ..."/>
                </div>
            </div>
            
            <div className="portefoliozoom-content" style={{backgroundColor: selectedSection.secondaryColor}}>
                <p className="portefoliozoom-content-texte">{selectedSection.noteIntroduction}</p>                
            </div>

            {paragraph}

        </div>;
    }
}
 
export default PortefolioZoom;