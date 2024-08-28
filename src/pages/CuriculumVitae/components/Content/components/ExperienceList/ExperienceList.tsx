import "./ExperienceList.css";

import { DATA_EXPERIENCES } from "_data/data_experiences";
import {
  ExperienceListProps,
  ExperienceProps,
} from "./ExperienceList.types.ts";
import Skill from "../Skill";
import React from "react";

const Experience = ({ experience, isSideMenuShown }: ExperienceProps) => {
  const listSkills = experience.skills.map((skill, key) => (
    <Skill skill={skill} key={key} />
  ));

  return (
    <div id={"exp" + experience.id} className="Experience">
      <div className="Experience-header">
        <p className="Experience-date">
          {experience.duration} - {experience.date}
        </p>
      </div>
      <div className="Experience-corps">
        <h4>
          <span
            className={
              isSideMenuShown
                ? "Experience-work sidemenuopen"
                : "Experience-work"
            }
          >
            {experience.work}
          </span>
          <br />
          <span className="Experience-entreprise">{experience.entreprise}</span>
          <a
            href={experience.locationRef}
            target="_blank"
            className="Experience-location"
          >
            <svg
              width="12"
              height="17"
              viewBox="0 0 12 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5.95C12 9.23609 7.71429 17 6 17C4.28571 17 0 9.23609 0 5.95C0 2.66391 2.68629 0 6 0C9.31371 0 12 2.66391 12 5.95Z"
                fill="#6CB0D7"
              />
            </svg>
            {" " + experience.location}
          </a>
        </h4>

        {experience.missions.map((missions) => (
          <React.Fragment key={missions.title}>
            <h5 className="Experience-title">{missions.title}</h5>
            <p className="Experience-description">{missions.description}</p>
          </React.Fragment>
        ))}

        <div className="Experience-skills">{listSkills}</div>
      </div>
    </div>
  );
};

const ExperienceList = ({ isSideMenuShown }: ExperienceListProps) => {
  const ExperienceList = DATA_EXPERIENCES.map((experience, key) => (
    <Experience
      experience={experience}
      key={key}
      isSideMenuShown={isSideMenuShown}
    />
  ));
  return (
    <div
      id="experiences"
      className={
        isSideMenuShown ? "ExperienceList sidemenuopen" : "ExperienceList"
      }
    >
      <h2 className="ExperienceList-title">Expériences</h2>
      {ExperienceList}
    </div>
  );
};

export default ExperienceList;
