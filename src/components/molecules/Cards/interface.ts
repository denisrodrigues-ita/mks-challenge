export interface CardsProps {
  data: {
    count: number;
    products: {
      id: number;
      name: string;
      brand: string;
      description: string;
      updateAt: string;
      createdAt: string;
      price: number;
      photo: string;
    }[];
  };
}
