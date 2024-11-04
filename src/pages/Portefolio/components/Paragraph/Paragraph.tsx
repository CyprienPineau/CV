import { ParagraphProps } from "./Paragraph.types";

import "./Paragraph.css";
import classNames from "classnames";
import { IconPlay } from "_icons/index";

const Paragraph = ({ id, paragraph }: ParagraphProps) => {
  return (
    <div
      className={classNames("paragraph", {
        "paragraph--backgroundVariation": id % 2,
      })}
    >
      <div className="paragraph-content">
        <h3 className="paragraph-content-title">{paragraph.title}</h3>
        <p className="paragraph-content-texte">{paragraph.content}</p>
      </div>

      <div className="paragraph-illustration">
        {paragraph.imgs &&
          paragraph.imgs.map((img, key) => {
            return (
              <img
                key={key}
                className="paragraph-illustration-image"
                src={img}
                alt={"image " + paragraph.title}
              />
            );
          })}

        {paragraph.videos &&
          paragraph.videos.map((video, key) => {
            return (
              <div className="paragraph-illustration-video" key={key}>
                <a
                  href={video.link}
                  target="_blank"
                  className={classNames("paragraph-video-play", video.player)}
                >
                  <IconPlay />
                  <div className="paragraph-video-play-text">
                    Regarder sur {video.player}
                  </div>
                </a>
                <img
                  className="paragraph-video-image"
                  src={video.img}
                  alt={"image " + paragraph.title}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Paragraph;
