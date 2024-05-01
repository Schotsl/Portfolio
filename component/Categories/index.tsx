import styles from "./Categories.module.scss";

type CategoriesProps = {
  categories: string[];
  className?: string;
};

export default function Categories({ categories, className }: CategoriesProps) {
  return (
    <ul className={`${styles.categories} ${className}`}>
      {categories.map((category, index) => (
        <li className={styles.categories__category} key={index}>
          {category}
        </li>
      ))}
    </ul>
  );
}
