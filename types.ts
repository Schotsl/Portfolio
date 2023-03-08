export interface Address {
  street: string;
  number: string;
  postal: string;
  city: string;
}

export interface Row {
  title: string;
  image: string;
  content: string;
  subtitle: string;
}

export interface Image {
  alt: string;
  src: string;
  width?: number;
  height?: number;
}

export interface ProjectImage {
  image: string;
}

export interface Project {
  title: string;
  cover: string;
  images: ProjectImage[];
}

export interface Video {
  src: string;
  width: number;
  title: string;
  height: number;
}

export interface Palet {
  background: string;
  foreground: string;
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

export interface Faq {
  answer: string;
  question: string;
}

export interface Column {
  title?: string;
  image?: Image;
  content?: string;
  actions?: Action[];
}

export interface Option {
  image: Image;
  title: string;
  ranking: string;
  features: string[];
}
