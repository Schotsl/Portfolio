export interface Project {
  thumbnail_video: string;
  thumbnail_cover: string;
  deliverable: string;
  categories: string[];
  title: string;
  video: string;
  slug: string;
  gif: string;
}

export interface Image {
  alt: string;
  src: string;
  width?: number;
  height?: number;
}

export interface Action {
  link: string;
  label: string;

  hash?: string;
  icon?: string;
  image?: Image;
  target?: string;
  button?: boolean;

  hover?: Palet;
  normal?: Palet;
}
