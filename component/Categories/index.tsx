import styles from "./Categories.module.scss";

import { Category } from "@/types";

type CategoriesProps = {
  categories: Category[];
  className?: string;
};

export default function Categories({ categories, className }: CategoriesProps) {
  const sorted = categories.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });

  return (
    <ul className={`${styles.categories} ${className}`}>
      {sorted.map((category, index) => (
        <li key={index} className={styles.categories__item}>
          {category.title}
        </li>
      ))}
    </ul>
  );
}
