export type FormationProps = {
  formation: Formation;
  isSideMenuShown: boolean;
};

export type FormationListProps = {
  isSideMenuShown: boolean; //TODO replace by a URL treatment
};

export type Formation = {
  name: string;
  imgRef: string;
  imgFond: string;
  location: string;
  locationRef: string;
  date: string;
  dominante: string;
  siteWeb: string;
};
