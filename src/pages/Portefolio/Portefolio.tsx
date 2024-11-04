import { useState } from "react";
import "./Portefolio.css";

import { DATA_PORTEFOLIO } from "../../data/data_porfolio";
import Project from "./components/Project";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { IconArrowLeft, IconArrowRight, IconClose } from "_icons/index";

const Portefolio = () => {
  const { id } = useParams();
  const indexFind = DATA_PORTEFOLIO.findIndex((project) => project.slug == id);
  const defaultIndex = indexFind > 0 ? indexFind : 0;

  const [searchParams, setSearchParams] = useSearchParams();
  const isDetailDiplay = searchParams.get("display") === "details";

  const [index, setIndex] = useState(defaultIndex);
  const navigate = useNavigate();

  // Navigation dans le carousel
  const handleCarroussel = (direction: "right" | "left") => {
    const newIndex = Math.abs(
      (index + (direction == "right" ? 1 : -1)) % DATA_PORTEFOLIO.length
    );
    setIndex(newIndex);
    navigate("/Portefolio/" + DATA_PORTEFOLIO[newIndex].slug);
  };

  // Constuction des Sections
  const ProjectList = DATA_PORTEFOLIO.map((project, key) => {
    return (
      <div
        key={key}
        className="porfolio-slide"
        style={{
          transform: `translateX(-${index * 100}%`,
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
          <IconClose />
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
          index == key
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
        <a
          onClick={() => handleCarroussel("right")}
          className="portefolio-buttonRight"
        >
          <IconArrowRight />
        </a>
      )}

      {ProjectList}

      {!isDetailDiplay && (
        <a
          onClick={() => handleCarroussel("left")}
          className="portefolio-buttonLeft"
        >
          <IconArrowLeft />
        </a>
      )}

      {!isDetailDiplay && (
        <div className="portefolio-pageindicator">{porfolioIndicators}</div>
      )}
    </div>
  );
};

export default Portefolio;
