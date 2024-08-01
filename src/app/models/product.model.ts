export interface Iproduct {
  id?: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: Category;
  rating?: Rating;
}

export enum Category {
    Electronics = "electronics",
    jewelery = "jewelery",
    MenSClothing = "men's Clothing",
    WomenSClothing = "women's Clothing",
}

export interface Rating {
    rate: number;
    count: number;
}
