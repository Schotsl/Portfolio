export interface Project {
  categories: string[];
  title: string;
  cover: string;
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
