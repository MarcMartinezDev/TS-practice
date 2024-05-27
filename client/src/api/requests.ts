import { Product } from "../types";

export const findItems = async (query: string): Promise<[Product]> => {
  try {
    const res: [Product] = await fetch(
      `http://localhost:3000/api/items?q=${query}`
    ).then(response => response.json());
    return res;
  } catch (error) {
    console.error(error);
    throw new Error("Error al hacer la petición.");
  }
};

export const findItem = async (id: string): Promise<Product> => {
  try {
    const res: Product = await fetch(
      `http://localhost:3000/api/items/${id}`
    ).then(response => response.json());
    return res;
  } catch (error) {
    console.error(error);
    throw new Error("Error al hacer la petición.");
  }
};
