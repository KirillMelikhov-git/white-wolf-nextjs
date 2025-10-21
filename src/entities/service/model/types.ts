export interface Service {
  id: string;
  name: string;
  price: string;
  category: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  services: Service[];
}
