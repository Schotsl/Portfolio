export interface Project {
  thumbnail_video: string;
  thumbnail_cover: string;
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
