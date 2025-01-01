export type Product = {
  name: string;
  description: string;
  composition: string;
  size: string;
  price: number;
  quantity: number;
  image_url: string;
  color: string;
  categoryId: {
    value: string;
    label: string;
  };
  id: string;
  handleProducts: () => void;
};
