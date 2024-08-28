import { ParagraphProps } from "./Paragraph.types";

import "./Paragraph.css";

const Paragraph = ({ id, paragraph }: ParagraphProps) => {
  // optention de la méthode d'affichage en fonction su numéro du rang
  const displayDirection = id % 2 == 0 ? "row" : "row-reverse";
  const displayAlignVideo = id % 2 == 0 ? "flex-end" : "flex-start";
  const displayAlignContent = id % 2 == 0 ? "flex-start" : "flex-end";

  return (
    <div className="paragraph" style={{ flexDirection: displayDirection }}>
      <div
        className="paragraph-illustration"
        style={{
          backgroundImage: `url(${paragraph.background})`,
          alignItems: displayAlignVideo,
        }}
      >
        {paragraph.video != "" && (
          <div className="paragraph-video">
            <div className="paragraph-illustration-videowrapper">
              <iframe
                className="paragraph-video-frame"
                src={paragraph.video}
                width="100%"
                height="100%"
                scrolling="no"
                frameBorder="1"
                allowFullScreen
              />
            </div>
          </div>
        )}
        {paragraph.imgs != null && (
          <div className="paragraph-img">
            {paragraph.imgs.map((img, key) => {
              return (
                <img
                  key={key}
                  className="paragraph-illustration-image"
                  src={img}
                  alt={"image " + paragraph.title}
                />
              );
            })}
          </div>
        )}
      </div>

      <div
        className="paragraph-content"
        style={{ alignItems: displayAlignContent }}
      >
        <h3 className="paragraph-content-title">{paragraph.title}</h3>
        <p className="paragraph-content-texte">{paragraph.content}</p>
      </div>
    </div>
  );
};

export default Paragraph;
