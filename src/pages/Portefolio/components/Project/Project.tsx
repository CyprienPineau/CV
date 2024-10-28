import "./Project.css";
import ProjectContent from "../ProjectContent";
import { ProjectProps } from "./Project.types";
import { useSearchParams } from "react-router-dom";

const Project = ({ project }: ProjectProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isDetailDiplay = searchParams.get("display") === "details";

  return (
    <div className="portefoliosection">
      <div
        className="portefoliosection-background"
        style={{
          backgroundImage: `url(${project.background})`,
          height: isDetailDiplay ? "40%" : "100%",
          transition: isDetailDiplay ? "ease-in-out 0.5s" : "ease-in-out 0.2s",
        }}
      >
        <div
          className="portefoliosection-background-filter"
          style={{ backgroundColor: project.backgroundColor }}
        >
          <img
            className={
              isDetailDiplay
                ? "portefoliosection-logominimized"
                : "portefoliosection-logo"
            }
            src={project.logo}
            alt={"Logo de" + project.name}
          />
          <h1 className="portefoliosection-title">{project.name}</h1>
          <div className="portefoliosection-subtitle">{project.subtitle}</div>

          {!isDetailDiplay && (
            <button
              key={"ConsultButton" + project.name}
              onClick={() => setSearchParams({ display: "details" })}
              className="portefoliosection-button"
              style={{
                backgroundColor: project.hightlightColor,
              }}
            >
              Consulter
            </button>
          )}
        </div>
      </div>
      {isDetailDiplay && <ProjectContent project={project} />}
    </div>
  );
};

export default Project;
