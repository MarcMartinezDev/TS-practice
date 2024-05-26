import { type Category } from "../types";

const CategoryCard: React.FC<{ category: Category }> = ({ category }) => {
  return (
    <p className="flex gap-2 min-w-[150px] p-2 shadow-md rounded-md font-semibold justify-center items-center bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200">
      <img
        src={`/${category.name.toLowerCase()}.png`}
        alt={`${category.name} icon`}
        width={25}
        height={25}
        className="bg-transparent"
      />
      {category.name === "home-decoration" ? "Home" : category.name} (
      {category.count})
    </p>
  );
};

export default CategoryCard;
