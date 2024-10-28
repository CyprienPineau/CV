import { useState } from "react";
import "./Portefolio.css";

import { DATA_PORTEFOLIO } from "../../data/data_porfolio";
import Project from "./components/Project";
import { useSearchParams } from "react-router-dom";

const Portefolio = () => {
  const [index, setIndex] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const isDetailDiplay = searchParams.get("display") === "details";

  // Navigation dans le carousel
  const handleGoRight = () => {
    setIndex((value) => value + 1);
  };
  const handleGoLeft = () => {
    setIndex((value) => value - 1);
  };
  // obtention de l'index relatif au nombre maximum de sections
  const indexRef = Math.abs(index % DATA_PORTEFOLIO.length);

  // Constuction des Sections
  const ProjectList = DATA_PORTEFOLIO.map((project, key) => {
    return (
      <div
        key={key}
        className="porfolio-slide"
        style={{
          transform: `translateX(-${indexRef * 100}%`,
          backgroundColor: project.secondaryColor,
        }}
      >
        <button
          key={"CloseButton" + project.name}
          onClick={() => setSearchParams()}
          className="porfolio-slide-btnClose"
          style={{
            top: !isDetailDiplay ? "-200px" : "-50px",
            backgroundColor: project.hightlightColor,
          }}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.707107"
              y1="0.707108"
              x2="14.8492"
              y2="14.8492"
              stroke="white"
              strokeWidth="2"
            />
            <line
              x1="14.8493"
              y1="0.707107"
              x2="0.707121"
              y2="14.8492"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </button>

        <Project project={project} />
      </div>
    );
  });

  const porfolioIndicators = DATA_PORTEFOLIO.map((_, key) => {
    return (
      <div
        key={key}
        className={
          indexRef == key
            ? "portefolio-pageindicator-active"
            : "portefolio-pageindicator-unactive"
        }
      />
    );
  });

  // retour du portefolio complet
  return (
    <div className="portefolio">
      {!isDetailDiplay && (
        <a onClick={handleGoRight} className="portefolio-buttonRight">
          {/* Arrow right */}
          <svg
            width="34"
            height="52"
            viewBox="0 0 34 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.1421 26L7.14209 -2.27299e-06L7.14209 52L33.1421 26Z"
              fill="#FFFFFF00"
            />
            <rect
              x="7.07104"
              y="33"
              width="10"
              height="10"
              transform="rotate(-135 7.07104 33)"
              fill="white"
            />
          </svg>
        </a>
      )}

      {ProjectList}

      {!isDetailDiplay && (
        <a onClick={handleGoLeft} className="portefolio-buttonLeft">
          {/* Arrow left */}
          <svg
            width="34"
            height="52"
            viewBox="0 0 34 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-4.54598e-06 26L26 52L26 4.54598e-06L-4.54598e-06 26Z"
              fill="#FFFFFF00"
            />
            <rect
              x="26.071"
              y="19"
              width="10"
              height="10"
              transform="rotate(45 26.071 19)"
              fill="white"
            />
          </svg>
        </a>
      )}

      {!isDetailDiplay && (
        <div className="portefolio-pageindicator">{porfolioIndicators}</div>
      )}
    </div>
  );
};

export default Portefolio;
