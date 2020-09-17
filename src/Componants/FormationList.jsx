import React, {Component} from 'react'
import './FormationList.css'

// TODO rendre flexibles la fonction pour plusieur formation et passer les img en base 64
class Formation extends Component {

    constructor(props){
        super(props)
    }

    render() {

        return <div className="formation">
            <div className="formation-header">
                <p className="formation-date">2016</p>
            </div>
            <div className={this.props.isSideMenuShown ? "formation-corps-img sidemenuopen" : "formation-corps-img"}>
                <div className="formation-corps-img-transparency">
                    <img 
                        className="formation-corps-img-logo"
                        src={require("./../Ressources/LogoESIGELEC.svg")} 
                        alt="Logo Esigelec"
                    />
                </div> 
            </div>
            <div className="formation-corps">
                <h4>
                    <span className={this.props.isSideMenuShown ? "formation-name sidemenuopen" : "formation-name"}>Diplôme d'Ingénieur Généraliste</span>                    
                    <br/>
                    <a 
                        href="https://www.google.com/maps/place/ESIGELEC+-+%C3%89cole+d'ing%C3%A9nieurs-es+g%C3%A9n%C3%A9raliste/@49.3832749,1.0746961,17z/data=!3m1!4b1!4m5!3m4!1s0x47e0dfc08f8fbfdd:0xd0dbc46c529975c2!8m2!3d49.3832749!4d1.0768848"
                        target="_blank" 
                        className="formation-location"
                    >
                        <svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 5.95C12 9.23609 7.71429 17 6 17C4.28571 17 0 9.23609 0 5.95C0 2.66391 2.68629 0 6 0C9.31371 0 12 2.66391 12 5.95Z" fill="#6CB0D7"/>
                        </svg>
                        {" Saint-Étienne-du-Rouvray"}
                    </a>
                </h4>

                <h5 className="formation-subtitle">Dominante Mécatronique</h5>
            </div>
    </div>
    }
}

class formationList extends Component {
    
    constructor(props){
        super(props)
    }

    render() { 
        return <div 
            id="formation" 
            className={this.props.isSideMenuShown ? "formationList sidemenuopen" : "formationList"}
        >
            <h2 className="formationList-title">Formation</h2>
            <Formation
                isSideMenuShown={this.props.isSideMenuShown}
            />
        </div>
    }
}
 
export default formationList;