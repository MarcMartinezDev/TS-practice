import { useEffect, useState } from "react";
import { useAppContext } from "../../context/ContextProvider";
import ResumeCard from "../ResumeCard";
import { findItems } from "../../api/requests";
import { useLocation } from "react-router-dom";
import Search from "../Search";
import { Categories, Product } from "../../types";

const Items = () => {
  const { items, setItems, setMessage, message } = useAppContext();
  const [categories, setCategories] = useState<Categories>();
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search);
  const search = searchParam.get("search");

  const categoryCount = (res: [Product], category: string): number => {
    return res.filter((product) => product.category === category).length;
  };

  useEffect(() => {
    const getItems = async () => {
      setItems(null);
      const res = await findItems(search ? search : "");
      if (res.length < 1) {
        return setMessage(`Ningún producto encontrado en @${search}`);
      }
      setItems(res);
      setCategories({
        smartphones: categoryCount(res, "smartphones"),
        laptops: categoryCount(res, "laptops"),
        fragances: categoryCount(res, "fragrances"),
        skincare: categoryCount(res, "skincare"),
        groceries: categoryCount(res, "groceries"),
        homeDecoration: categoryCount(res, "home-decoration"),
      });
    };
    getItems();
  }, [search]);

  return (
    <main>
      <div className="min-w-full">
        <img
          src="/shop.png"
          alt="bazar online logo"
          width={80}
          className="m-auto mb-4 drop-shadow-md"
        />
        <Search />
        <p className="italic text-base font-semibold mt-4 text-center">
          Resultados de búsqueda de "{search}": {items?.length}
        </p>
      </div>
      <div className="flex flex-col flex-wrap">
        <div>
          {categories?.smartphones ? (
            <span>Smartphones - {categories.smartphones}</span>
          ) : null}
          {categories?.laptops ? (
            <span>Laptops - {categories.laptops}</span>
          ) : null}
          {categories?.fragances ? (
            <span>Fragances - {categories.fragances}</span>
          ) : null}
          {categories?.groceries ? (
            <span>Groceries - {categories.groceries}</span>
          ) : null}
          {categories?.skincare ? (
            <span>Skincare - {categories.skincare}</span>
          ) : null}
          {categories?.homeDecoration ? (
            <span>Home Decoration - {categories.homeDecoration}</span>
          ) : null}
        </div>
        {items?.map((product) => (
          <div key={product.id}>
            <ResumeCard product={product} />
          </div>
        ))}
      </div>
      {message && <p>{message}</p>}
    </main>
  );
};

export default Items;
