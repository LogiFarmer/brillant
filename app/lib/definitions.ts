export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Store = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Product = {
  id: string;
  name: string;
  brand: string;
  type: 'eggs' | 'milk' | 'beef';
  amount: number;
  description: string;
  image_url: string;
};

export type Price = {
  id: string;
  product_id: string;
  store_id: string;
  image_url: string;
  active_date: string;
  expire_date: string;
  price: number;
  unit_price: number;
  status: 'expired' | 'active' | 'coming';
}

export type EggPricesTable = {
  id: string;
  name: string;
  store: string;
  image_url: string;
  active_date: string;
  expire_date: string;
  amount: number;
  price: number;
  unit_price: number;
  status: 'expired' | 'active' | 'coming';
};

export type Deal = {
  id: string;
  name: string;
  store: string;
  image_url: string;
  active_date: string;
  expire_date: string;
  description: string;
  amount: number;
  price: number;
  unit: string;
  unit_price: number;
  status: 'expired' | 'active' | 'coming';
};