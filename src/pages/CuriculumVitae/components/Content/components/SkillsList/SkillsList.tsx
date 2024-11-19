import DATA_SKILLS from "_data/data_skills";
import "./SkillsList.css";
import Skill from "../Skill";

const SkillsList = () => {
  const skillsList = DATA_SKILLS.map((category, key) => {
    const data_uniqueSkillsMastered = category.masterList.map((skill, key) => (
      <Skill key={key} skill={skill} />
    ));

    const data_uniqueSkillsNotion = category.juniorList.map((skill, key) => (
      <Skill key={key} skill={skill} />
    ));

    return (
      <div key={key}>
        <h3 className="skillslist-skilltype-title">{category.catégorie}</h3>
        <div className="skills">
          {data_uniqueSkillsMastered}
          {data_uniqueSkillsNotion}
        </div>
      </div>
    );
  });

  return (
    <div id="skills" className="skillslist">
      <h2 className="skillslist-title">Compétences</h2>

      <div className="skillslist-content">{skillsList}</div>
    </div>
  );
};

export default SkillsList;
