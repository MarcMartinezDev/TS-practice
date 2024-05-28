import { Product } from "../types";

const serverUrl = "https://baazar-online.vercel.app";

export const findItems = async (query: string): Promise<[Product]> => {
  try {
    const res: [Product] = await fetch(
      `${serverUrl}/api/items?q=${query}`
    ).then(response => response.json());
    return res;
  } catch (error) {
    console.error(error);
    throw new Error("Error");
  }
};

export const findItem = async (id: string): Promise<Product> => {
  try {
    const res: Product = await fetch(`${serverUrl}/api/items/${id}`).then(
      response => response.json()
    );
    return res;
  } catch (error) {
    console.error(error);
    throw new Error("Error");
  }
};
