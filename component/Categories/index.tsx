import styles from "./Categories.module.scss";

import { Category } from "@/types";

type CategoriesProps = {
  categories: Category[];
  className?: string;
};

export default function Categories({ categories, className }: CategoriesProps) {
  return (
    <ul className={`${styles.categories} ${className}`}>
      {categories.map((category, index) => (
        <li className={styles.categories__category} key={index}>
          {category.title}
        </li>
      ))}
    </ul>
  );
}
