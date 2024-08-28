import "./Home.css";
import { IconCV, IconPortefolio, ImgHome, SvgLinkedin } from "../../assets";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="home">
    <a
      className="home-linkedin"
      href="https://www.linkedin.com/in/cyprien-pineau-b04726115"
      target="_blank"
    >
      <img src={SvgLinkedin} alt="Logo Linkedin" />
    </a>

    <div className="home-background">
      <img
        className="home-background-img"
        loading="lazy"
        src={ImgHome}
        alt="Image de fond"
      />
    </div>
    <div className="home-textbox">
      <h1 className="home-textbox-title">
        Bonjour c'est <strong>Cyprien</strong>
      </h1>
      <p className="home-textbox-introduction">
        Je cherche à mettre ma créativité et force de proposition au profit de
        projets innovants en y apportant de nouvelles visions.
      </p>

      <div className="homme-buttonsGroup">
        <Link className="home-button" to="/CV">
          <img className="home-button-img" src={IconCV} />
          <div className="home-button-box">
            <div className="home-button-text">Le CV</div>
          </div>
        </Link>
        <Link className="home-button" to="/Portefolio">
          <img className="home-button-img" src={IconPortefolio} />
          <div className="home-button-box">
            <div className="home-button-text">Le portefolio</div>
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default Home;
