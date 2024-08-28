import { Paragraph } from "../Paragraph/Paragraph.types";

export type Project = {
  name: string;
  subtitle: string;
  logo: string;
  background?: string;
  backgroundColor: string;
  primarycolor: string;
  secondaryColor: string;
  hightlightColor: string;
  hightlightColorHover: string;
  introduction: string;
  paragraphs: Paragraph[];
  liens: [];
};

export type ProjectProps = {
  project: Project;
};
