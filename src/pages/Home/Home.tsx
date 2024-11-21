import "./Home.css";
import { IconCV, IconPortefolio, ImgHome, SvgLinkedin } from "../../assets";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

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
      <motion.img
        className="home-background-img"
        loading="lazy"
        src={ImgHome}
        alt="Image de fond"
        animate={{
          opacity: [0, 1],
        }}
        transition={{ duration: 0.7 }}
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
