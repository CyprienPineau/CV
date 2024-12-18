export type ParagraphProps = { id: number; paragraph: Paragraph };

export type Paragraph = {
  title: string;
  content: string;
  imgs?: string[];
  videos?: { img: string; link: string; player: string }[];
};
