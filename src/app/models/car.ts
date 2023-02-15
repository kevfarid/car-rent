export interface SpecificationsCar {
  engine: string;
  power: string;
  transmission: string;
  fuel: string;
  capacity: string;
}

export interface Car {
  id: number;
  photo: string;
  name: string;
  model: string;
  brand: string;
  price: number;
  description: string;
  specifications: SpecificationsCar;
}
