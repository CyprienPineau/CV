import "./Project.css";
import ProjectContent from "../ProjectContent";
import { ProjectProps } from "./Project.types";
import { useSearchParams } from "react-router-dom";
import { motion } from "motion/react";

const Project = ({ project }: ProjectProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isDetailDiplay = searchParams.get("display") === "details";

  return (
    <div className="portefoliosection">
      <motion.div
        className="portefoliosection-background"
        style={{
          backgroundImage: `url(${project.background})`,
          height: isDetailDiplay ? "40%" : "100%",
          transition: isDetailDiplay ? "ease-in-out 0.5s" : "ease-in-out 0.2s",
        }}
        animate={{
          opacity: [0, 1],
        }}
        transition={{ duration: 0.7 }}
      >
        <div
          className="portefoliosection-background-filter"
          style={{ backgroundColor: project.backgroundColor }}
        >
          <motion.img
            className={
              isDetailDiplay
                ? "portefoliosection-logominimized"
                : "portefoliosection-logo"
            }
            src={project.logo}
            alt={"Logo de" + project.name}
            animate={{
              opacity: [0, 1],
            }}
            transition={{ duration: 0.7 }}
          />
          <h1 className="portefoliosection-title">{project.name}</h1>
          <div className="portefoliosection-subtitle">
            {project.subtitle} - {project.date}
          </div>

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
      </motion.div>
      {isDetailDiplay && <ProjectContent project={project} />}
    </div>
  );
};

export default Project;
