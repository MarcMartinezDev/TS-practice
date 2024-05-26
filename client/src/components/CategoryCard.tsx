import { ReactNode } from "react";
import { Categories } from "../types";

const CategoryCard: React.FC<{ children: ReactNode, category: Categories }> = ({ children, category }) => {
  return (
    <div className="">
      <img src="" alt="some" />
      <p>{children}</p>
    </div>
  )
};

export default CategoryCard;
