import React, {Component} from 'react'
import './Header.css'
import imageCyprienP from "./../Ressources/CyprienP.jpg"

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            y:0,
            opacity:1,
        }
    }

    render() { 
        return <div id='header' className={this.props.isSideMenuShown ? "header sidemenuopen" : "header"}>
            <nav>
                <ul className={this.props.isSideMenuShown ? "header-navbar sidemenuopen" : "header-navbar"}>
                    <li className="header-navbar-button">
                        <a href="#experiences" className="header-navbar-button-text">Expériences</a>
                    </li>
                    <li className="header-navbar-button">
                        <a href="#skills" className="header-navbar-button-text">Compétences</a>
                    </li>
                    <li className="header-navbar-button">
                        <a href="#formations" className="header-navbar-button-text">Formation</a>
                    </li>
                    {/* TODO futur dévellopement
                    <li className="header-navbar-button">
                        <a href="#projects" className="header-navbar-button-text">Projets</a>
                    </li> */}
                </ul>
            </nav>
            <div className={this.props.isSideMenuShown ? "header-textbox sidemenuopen" : "header-textbox"}>
                <h1 className={this.props.isSideMenuShown ? "header-textbox-title sidemenuopen" : "header-textbox-title"}>Cyprien PINEAU</h1>
                <p className="header-textbox-introduction">« Je cherche à mettre ma créativité et force de proposition au profit de projets innovants en apportant une vision sortant des sentiers battus. »</p>
            </div>
            <img 
                className={this.props.isSideMenuShown ? "header-pofileimg sidemenuopen" : "header-pofileimg"}
                src={imageCyprienP} 
                alt="Photo de Cyprien"
            />
        </div>
    }
}

export default Header;

// Image par <a href="https://pixabay.com/fr/users/Yuri_B-2216431/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1487545">Yuri_B</a> de <a href="https://pixabay.com/fr/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1487545">Pixabay</a>