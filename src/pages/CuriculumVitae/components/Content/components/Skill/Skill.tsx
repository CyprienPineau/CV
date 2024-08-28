import { SkillProps } from "./Skill.types";
import "./Skill.css";
import { useSearchParams } from "react-router-dom";

const Skill = ({ skill }: SkillProps) => {
  const skillName = typeof skill === "string" ? skill : skill.name;
  const skillDuration = typeof skill === "string" ? undefined : skill.duration;

  const [, setSearchParams] = useSearchParams();

  return (
    <>
      <div className="skill">
        <a
          onClick={() => setSearchParams({ selectedSkill: skillName })}
          className="skill-button"
        >
          {skillName}
        </a>
        {skillDuration && <p className="skill-duration">{skillDuration}</p>}
      </div>
    </>
  );
};

export default Skill;
