import Paragraph from "../Paragraph";
import { Project } from "../Project/Project.types";
import "./ProjectContent.css";

const ProjectContent = ({ project }: { project: Project }) => {
  const paragraphs = project.paragraphs.map((paragraph, key) => {
    return <Paragraph key={key} id={key} paragraph={paragraph} />;
  });

  return (
    <div
      className="portefoliozoom"
      style={{ backgroundColor: project.primarycolor }}
    >
      <div
        className="portefoliozoom-intro"
        style={{ backgroundColor: project.secondaryColor }}
      >
        <p className="portefoliozoom-intro-texte">{project.introduction}</p>
      </div>

      {paragraphs}

      {/* TODO ajouter les lien utiles */}
      <div className="portefoliozoom-footer">
        {/* <p>Liens utiles</p> */}
        <a href=""></a>
        <a href=""></a>
      </div>
    </div>
  );
};

export default ProjectContent;
