import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type Image = {
  src: string;
  alt: string;
  blur: string;
  width: number;
  height: number;
};

export type Link = {
  url: string;
  icon: string;
  title: string;
};

export type Category = {
  slug: string;
  title: string;
};

export type Project = {
  slug: string;
  title: string;
  intro: string;
  video: string;
  image: Image;
  links: Link[];
  images?: Image[];
  content: string;
  tagline: string;
  categories?: Category[];
  technologies?: Technology[];
};

export type Technology = {
  url: string;
  slug: string;
  title: string;
  color: string;
};

export type CarouselItem = {
  image: Image;
  slug?: string;
  title?: string;
  intro?: string;
  video?: string;
  categories?: Category[];
};
