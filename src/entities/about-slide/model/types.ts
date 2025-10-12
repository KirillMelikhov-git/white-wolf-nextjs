export interface AboutSlide {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: {
    to: string;
    text: string;
  };
}
