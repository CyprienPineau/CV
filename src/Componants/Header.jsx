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
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll(e) {
        // e.preventDefault()
        // console.log('ici cest y : '+ this.state.y + ' op :' + this.state.opacity)
        // this.setState(function(state,props) {
        //     return {
        //         y : window.scrollY,
        //         opacity : this.getRelativeOpacity((window.innerHeight-state.y),300,500)
        //     }
        // })
        // console.log('puis cest y : '+ this.state.y + ' op :' + this.state.opacity)
    }

    getRelativeOpacity(value, minValueOpacity, maxValueOpacity){
        let maxDiff = maxValueOpacity-minValueOpacity;
        let actualDiff = value-minValueOpacity;

        if (actualDiff<=0){
            return 0;
        } else if ( actualDiff > maxDiff) {
            return 1;
        }
        else{
            console.log(actualDiff/maxDiff)
            return actualDiff/maxDiff
        }
    }

    render() { 
        return <div className={this.props.isSideMenuShown ? "header sidemenuopen" : "header"}>
            <nav>
                <ul className={this.props.isSideMenuShown ? "header-navbar sidemenuopen" : "header-navbar"}>
                    <li className="header-navbar-button">
                        <a href="#experiences" className="header-navbar-button-text">Expériences</a>
                    </li>
                    <li className="header-navbar-button">
                        <a href="#formations" className="header-navbar-button-text">Formation</a>
                    </li>
                    <li className="header-navbar-button">
                        <a href="#skills" className="header-navbar-button-text">Compétences</a>
                    </li>
                    <li className="header-navbar-button">
                        <a href="#projects" className="header-navbar-button-text">Projets</a>
                    </li>
                </ul>
            </nav>
            <div className={this.props.isSideMenuShown ? "header-textbox sidemenuopen" : "header-textbox"}>
                <h1 className={this.props.isSideMenuShown ? "header-textbox-title sidemenuopen" : "header-textbox-title"}>Cyprien PINEAU</h1>
                <p className="header-textbox-introduction">Bonjour je suis un jeune ingénieur dynamique, je viens de finir de mettre en ligne mon site internet !</p>
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

// pointe sur ovh 213.186.33.5