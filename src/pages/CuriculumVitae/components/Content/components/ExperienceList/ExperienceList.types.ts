export type ExperienceListProps = {
  isSideMenuShown: boolean;
};

export type ExperienceProps = {
  isSideMenuShown: boolean;
  experience: Experience;
};

export type Experience = {
  id: string;
  work: string;
  entreprise: string;
  imgRef?: string;
  location: string;
  locationRef: string;
  date: string;
  duration: string;
  missions: {
    title: string;
    description: string;
  }[];
  skills: string[];
};
