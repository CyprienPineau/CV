import { IconQuoteLeft, IconQuoteRight } from "_icons/index";
import Paragraph from "../Paragraph";
import { Project } from "../Project/Project.types";
import "./ProjectContent.css";

const ProjectContent = ({ project }: { project: Project }) => {
  const paragraphs = project.paragraphs.map((paragraph, key) => {
    return <Paragraph key={key} id={key} paragraph={paragraph} />;
  });

  return (
    <div
      className="ProjectContent"
      style={{ backgroundColor: project.primarycolor }}
    >
      <div
        className="ProjectContent-intro"
        style={{ backgroundColor: project.secondaryColor }}
      >
        <IconQuoteLeft
          className="ProjectContent-icon"
          style={{ color: project.hightlightColor }}
        />
        <p className="ProjectContent-intro-texte">{project.introduction}</p>
        <IconQuoteRight
          className="ProjectContent-icon"
          style={{ color: project.hightlightColor }}
        />
      </div>

      {paragraphs}

      <div className="ProjectContent-footer">
        {project.extraLink.length && (
          <div className="ProjectContent-links">
            <h2>Liens externes</h2>
            <ul>
              {project.extraLink.map((link) => (
                <li key={link.name}>
                  <a target="_blank" href={link.link}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectContent;
