import { Product, ProductContextType } from "../types";
import { ReactNode, createContext, useContext, useState } from "react";

const AppContext = createContext<ProductContextType | null>(null);

export const useAppContext = (): ProductContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("Context not found");
  }
  return context;
};

const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<Product[] | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [search, setSearch] = useState<string>("");
  const [product, setProduct] = useState<Product | null>(null);

  return (
    <AppContext.Provider
      value={{
        items,
        setItems,
        message,
        setMessage,
        search,
        setSearch,
        product,
        setProduct,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
