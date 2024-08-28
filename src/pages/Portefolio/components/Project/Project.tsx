import "./Project.css";
import ProjectContent from "../ProjectContent";
import { ProjectProps } from "./Project.types";

const Project = ({ project, isConsulting, handleConsult }: ProjectProps) => {
  return (
    <div className="portefoliosection">
      <div
        className="portefoliosection-background"
        style={{
          backgroundImage: `url(${project.background})`,
          height: isConsulting ? "40%" : "100%",
          transition: isConsulting ? "ease-in-out 0.5s" : "ease-in-out 0.2s",
        }}
      >
        <div
          className="portefoliosection-background-filter"
          style={{ backgroundColor: project.backgroundColor }}
        >
          <img
            className={
              isConsulting
                ? "portefoliosection-logominimized"
                : "portefoliosection-logo"
            }
            src={project.logo}
            alt={"Logo de" + project.name}
          />
          <h1 className="portefoliosection-title">{project.name}</h1>
          <div className="portefoliosection-subtitle">{project.subtitle}</div>

          {!isConsulting && (
            <button
              key={"ConsultButton" + project.name}
              onClick={handleConsult}
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
      {isConsulting && <ProjectContent project={project} />}
    </div>
  );
};

export default Project;
