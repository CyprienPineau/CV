import { Paragraph } from "../Paragraph/Paragraph.types";

export type Project = {
  slug: string;
  name: string;
  subtitle: string;
  date: string;
  logo: string;
  background?: string;
  backgroundColor: string;
  primarycolor: string;
  secondaryColor: string;
  hightlightColor: string;
  hightlightColorHover: string;
  introduction: string;
  paragraphs: Paragraph[];
  extraLink: { name: string; link: string }[];
};

export type ProjectProps = {
  project: Project;
};
