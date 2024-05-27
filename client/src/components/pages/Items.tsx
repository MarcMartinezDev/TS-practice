import { findItems } from "../../api/requests";
import { type Categories, Product } from "../../types";
import { useAppContext } from "../../context/ContextProvider";
import { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard";
import ResumeCard from "../ResumeCard";
import Search from "../Search";

const Items = () => {
  const { items, setItems, setMessage, message, search } = useAppContext();
  const [categories, setCategories] = useState<Categories>();

  const categoryCount = (
    res: [Product],
    category: string | undefined
  ): number => {
    return res.filter(product => product.category === category).length;
  };

  useEffect(() => {
    const getItems = async () => {
      const res = await findItems(search ? search : "");
      if (res.length < 1) {
        setItems(null);
        setCategories(undefined);
        return setMessage(`No results found on @${search}`);
      }
      setItems(res);
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
    };
    getItems();
  }, [search]);

  return (
    <main>
      <div className="min-w-full">
        <Search />
        {items !== null && (
          <p className="text-base font-semibold mt-4 text-center">
            Results for @{search}: {items?.length}
          </p>
        )}
      </div>
      <div className="flex flex-col min-w-full flex-wrap gap-4">
        <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center">
          {categories
            ?.filter(category => category.count > 0)
            .map(category => (
              <CategoryCard key={category.name} category={category} />
            ))}
        </div>
        <div className="flex flex-col px-4 gap-5 xl:grid xl:grid-cols-2">
          {items !== null ? (
            items.map(product => (
              <div key={product.id}>
                <ResumeCard product={product} />
              </div>
            ))
          ) : (
            <p className="text-center">{message}</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default Items;
