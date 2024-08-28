export type SkillProps = {
  skill: Skill | string;
};

export type Skill = {
  name: string;
  duration?: string;
  note: string;
};
