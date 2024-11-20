import { ParagraphProps } from "./Paragraph.types";

import "./Paragraph.css";
import classNames from "classnames";
import { IconPlay } from "_icons/index";
import { motion } from "motion/react";

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
              <motion.img
                key={key}
                className="paragraph-illustration-image"
                src={img}
                alt={"image " + paragraph.title}
                animate={{
                  opacity: [0, 1],
                }}
                transition={{ duration: 0.7 }}
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
                <motion.img
                  className="paragraph-video-image"
                  src={video.img}
                  alt={"image " + paragraph.title}
                  animate={{
                    opacity: [0, 1],
                  }}
                  transition={{ duration: 0.7 }}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Paragraph;
