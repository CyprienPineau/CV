import { useSearchParams } from "react-router-dom";
import { DATA_EXPERIENCES } from "../../../../data/data_experiences";
import { DATA_SKILLS } from "../../../../data/data_skills";
import ExperienceCard from "./components/ExperienceCard";

import "./SideMenu.css";

const SideMenu = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedSkill = searchParams.get("selectedSkill");

  // selection les experiences correspondant au sujet du volet
  const experienceList = selectedSkill
    ? DATA_EXPERIENCES.filter((experience) =>
        experience.skills.includes(selectedSkill)
      ).map((experience, key) => (
        <ExperienceCard key={key} experience={experience} />
      ))
    : undefined;

  // selection de la note correspondant au sujet
  const skillNote = DATA_SKILLS.flatMap((typeskills) => {
    return [...typeskills.masterList, ...typeskills.juniorList];
  }).find((skill) => skill.name == selectedSkill)?.note;

  return (
    <div className={selectedSkill ? "sidemenu shown" : "sidemenu"}>
      <a
        onClick={() => setSearchParams()}
        className={
          selectedSkill ? "sidemenu-buttonclose shown" : "sidemenu-buttonclose"
        }
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.707107"
            y1="0.707108"
            x2="14.8492"
            y2="14.8492"
            stroke="white"
            strokeWidth="2"
          />
          <line
            x1="14.8493"
            y1="0.707107"
            x2="0.707121"
            y2="14.8492"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </a>

      <div className="sidemenu-scrollcontainer">
        <h2 className="sidemenu-title">{selectedSkill}</h2>

        {experienceList}

        {skillNote && <p className="sidemenu-infosupp">{skillNote}</p>}
      </div>
    </div>
  );
};

export default SideMenu;
