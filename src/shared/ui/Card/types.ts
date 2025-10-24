export interface ICard {
  id: string;
  title: string;
  profession?: string;
  university?: string;
  description?: string;
  image: string | React.ComponentType;
  salary?: string;
  link?: string;
}
