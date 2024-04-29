export interface CartStateProps {
  cart: ProductsEntityProps[] | [];
  addToCart: (product: ItemProps) => void;
  removeFromCart: (productId: number) => void;
  increaseItem: (productId: number) => void;
  decreaseItem: (productId: number) => void;
  countIndividualItem: (productId: number) => number;
  countItems: () => number;
  totalPrice: () => number;
}

export interface ProductsEntityProps extends ItemProps {
  count: number;
}

export interface ItemProps {
  id: number;
  name: string;
  brand: string;
  description: string;
  updateAt: string;
  createdAt: string;
  price: number;
  photo: string;
}
