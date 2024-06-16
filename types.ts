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
  images?: Image[];
  content: string;
  tagline: string;
  categories?: string[];
  technologies?: Technology[];
};

export type Technology = {
  url: string;
  slug: string;
  title: string;
  color: string;
}

export type CarouselItem = {
  image: Image;
  slug?: string;
  title?: string;
  intro?: string;
  video?: string;
  categories?: string[];
};
