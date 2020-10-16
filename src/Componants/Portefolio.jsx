import React, { Component } from 'react';

import './Portefolio.css';

class Portefolio extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return <div className="portefolio">
            <img 
                className="imgworking"
                src={require("./../../Ressources/undraw_coding_6mjf.svg")} 
                alt=""
            />

            <p className="working">En cours de réalisation...</p>
            <p className="working">N'hésitez pas à revenir plus tard !</p>

            {/* <div className="portefolio-section">
                <div className="portefolio-section-filter">
                    <img className="portefolio-section-logo" src={require("./../../Ressources/LogoSpiritOfAdventure.png")} alt="Logo Spirit of Adventure"/>
                    <button className="portefolio-section-button">Consulter</button>
                </div>
            </div>
            <div className="portefolio-section">
                <p>PORTEFOLIO</p>
            </div> */}

        </div>;
    }
}
 
export default Portefolio;