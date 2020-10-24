import React, { Component } from 'react';

import './PortefolioZoom.css'

function Paragraph ({paragraph, rawNumber}){
    // optention de la méthode d'affichage en fonction su numéro du rang
    let displayDirection = (rawNumber%2==0) ? "row" : "row-reverse"
    let displayAlignVideo = (rawNumber%2==0) ? "flex-end" : "flex-start"
    let displayAlignContent = (rawNumber%2==0) ? "flex-start" : "flex-end"

    return <div className="paragraph" style={{flexDirection:displayDirection}}>
        <div className="paragraph-illustration" style={{backgroundImage: `url(${paragraph.background})`, alignItems:displayAlignVideo}}>
            
            { paragraph.video != "" 
                && <div className="paragraph-video">
                    <div className="paragraph-illustration-videowrapper">
                        <iframe className="paragraph-video-frame" src={paragraph.video} width="100%" height="100%" scrolling="no" frameBorder="1" allowFullScreen/>
                    </div>
                </div>
            }
            { paragraph.imgs !=null
                &&<div className="paragraph-img">
                    {paragraph.imgs.map((img,key)=>{
                        return <img key={key} className="paragraph-illustration-image" src={img} alt={"image "+ paragraph.title }/>
                    })}
                </div>
            }
        </div>

        <div className="paragraph-content" style={{alignItems:displayAlignContent}}>
            <h3 className="paragraph-content-title">{paragraph.title}</h3>
            <p className="paragraph-content-texte">{paragraph.content}</p>
        </div>
    </div>
}

class PortefolioZoom extends Component {

    constructor(props){
        super(props)
    }

    render() { 
        //on traque le numéro du rang pour savoir le sens de display
        let rawNumber=0;

        let paragraphs = this.props.section.paragraphs.map((paragraph,key)=>{
            rawNumber=rawNumber+1;
            return <Paragraph key={key} paragraph={paragraph} rawNumber={rawNumber} />
        })

        return <div className="portefoliozoom" style={{backgroundColor: this.props.section.primarycolor}}>
            <div className="portefoliozoom-intro" style={{backgroundColor: this.props.section.secondaryColor}}>
                <p className="portefoliozoom-intro-texte">{this.props.section.noteIntroduction}</p>                
            </div>

            {paragraphs}

            {/* TODO ajouter les lien utiles */}
            <div className="portefoliozoom-footer">
                {/* <p>Liens utiles</p> */}
                <a href=""></a>
                <a href=""></a>
            </div>

        </div>;
    }
}
 
export default PortefolioZoom;