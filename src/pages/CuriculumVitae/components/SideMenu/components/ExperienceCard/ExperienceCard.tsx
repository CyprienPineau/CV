import { ExperienceCardProps } from "./ExperienceCard.types";
import "./ExperienceCard.css";
import { useSearchParams } from "react-router-dom";

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const [, setSearchParams] = useSearchParams();

  return (
    <a
      href={"#exp" + experience.id}
      className="ExperienceCard"
      onClick={innerWidth < 700 ? () => setSearchParams() : undefined}
    >
      <h3 className="ExperienceCard-duration">{experience.duration}</h3>
      <h4 className="ExperienceCard-work">{experience.work}</h4>

      {experience.missions.map((mission) => (
        <h5 className="ExperienceCard-title">{mission.title}</h5>
      ))}
    </a>
  );
};
export default ExperienceCard;
