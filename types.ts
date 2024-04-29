export type Image = {
  src: string;
  alt: string;
  blur: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  title: string;
  intro: string;
  video: string;
  image: Image;
};
