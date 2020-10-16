import React, {Component} from 'react'
import './Home.css'
import imageCyprienP from "./../../Ressources/CyprienP.jpg"

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            y:0,
            opacity:1,
        }
    }

    render() { 
        return <div className="home">
            <div className="home-textbox">
                <h1 className="home-textbox-title">Cyprien PINEAU</h1>
                <p className="home-textbox-introduction">« Je cherche à mettre ma créativité et force de proposition au profit de projets innovants en apportant une vision sortant des sentiers battus. »</p>
            </div>
            <img 
                className="home-pofileimg"
                src={imageCyprienP} 
                alt="Photo de Cyprien"
            />
        </div>
    }
}

export default Home;

// Image par <a href="https://pixabay.com/fr/users/Yuri_B-2216431/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1487545">Yuri_B</a> de <a href="https://pixabay.com/fr/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1487545">Pixabay</a>