import { findItems } from "../../api/requests";
import { type Categories, Product } from "../../types";
import { useAppContext } from "../../context/ContextProvider";
import { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard";
import ResumeCard from "../ResumeCard";
import Search from "../Search";

const Items = () => {
  const { items, setItems, search } = useAppContext();
  const [categories, setCategories] = useState<Categories>();

  const categoryCount = (res: [Product], category: string): number => {
    return res.filter(product => product.category === category).length;
  };

  useEffect(() => {
    setItems(null);
    const getItems = async () => {
      const res = await findItems(search);
      if (res.length < 1) {
        setItems(null);
        setCategories(undefined);
      }
      setCategories([
        { name: "Smartphones", count: categoryCount(res, "smartphones") },
        { name: "Fragrances", count: categoryCount(res, "fragrances") },
        { name: "Groceries", count: categoryCount(res, "groceries") },
        { name: "Skincare", count: categoryCount(res, "skincare") },
        {
          name: "home-decoration",
          count: categoryCount(res, "home-decoration"),
        },
        { name: "Laptops", count: categoryCount(res, "laptops") },
      ]);
      setItems(res);
    };
    getItems();
  }, [search, location.pathname]);

  return (
    <main>
      <div className="min-w-full">
        <Search />
      </div>
      <div className="flex flex-col min-w-full flex-wrap gap-4">
        {items !== null && (
          <>
            <div className="flex flex-wrap min-h-[100px] items-center gap-x-4 gap-y-2 justify-center">
              {categories ? (
                categories
                  .filter(category => category.count > 0)
                  .map(category => (
                    <CategoryCard key={category.name} category={category} />
                  ))
              ) : (
                <p className="text-lg font-semibold">Loading...</p>
              )}
            </div>
            <div className="flex flex-col gap-5 xl:grid xl:grid-cols-2">
              {items.map(product => (
                <div key={product.id}>
                  <ResumeCard product={product} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Items;
