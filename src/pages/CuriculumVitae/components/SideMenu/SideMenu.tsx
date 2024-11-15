import { useSearchParams } from "react-router-dom";
import { DATA_EXPERIENCES } from "../../../../data/data_experiences";
import { DATA_SKILLS } from "../../../../data/data_skills";
import ExperienceCard from "./components/ExperienceCard";

import "./SideMenu.css";
import { IconClose } from "_icons/index";

const SideMenu = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedSkill = searchParams.get("selectedSkill");

  // selection les experiences correspondant au sujet du volet
  const ExperienceFiltered = DATA_EXPERIENCES.filter((experience) =>
    experience.missions
      .flatMap((mission) => mission.skills)
      .includes(selectedSkill ?? "")
  ).map((experience) => (
    <ExperienceCard key={experience.id} experience={experience} />
  ));

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
        <IconClose />
      </a>

      <div className="sidemenu-scrollcontainer">
        <h2 className="sidemenu-title">{selectedSkill}</h2>
        {ExperienceFiltered}
        {skillNote && <p className="sidemenu-infosupp">{skillNote}</p>}

        {ExperienceFiltered.length == 0 && !skillNote && (
          <p className="sidemenu-infosupp">
            Aucune experience n'est reliée à cette compétence.
          </p>
        )}
      </div>
    </div>
  );
};

export default SideMenu;
