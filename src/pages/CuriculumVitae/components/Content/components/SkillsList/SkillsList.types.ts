import { Skill } from "../Skill/Skill.types";

export type SkillList = {
  catégorie: string;
  masterList: Skill[];
  juniorList: Skill[];
}[];
