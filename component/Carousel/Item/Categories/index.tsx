import styles from "./CarouselItemCategories.module.scss";

type CarouselItemCategoriesProps = {
  categories: string[];
  className?: string;
};

export default function CarouselItemCategories({
  categories,
  className,
}: CarouselItemCategoriesProps) {
  return (
    <ul className={`${styles.categories} ${className}`}>
      {categories.map((category, index) => (
        <CarouselItemCategoriesItem key={index} category={category} />
      ))}
    </ul>
  );
}

type CarouselItemCategoriesItemProps = {
  category: string;
};

export function CarouselItemCategoriesItem({
  category,
}: CarouselItemCategoriesItemProps) {
  const getCategory = (category: string) => {
    switch (category) {
      case "design":
        return styles["categories__category__dot--design"];
      case "development":
        return styles["categories__category__dot--development"];
      default:
        return styles["categories__category__dot--entertainment"];
    }
  };

  return (
    <li className={styles.categories__category}>
        <div
          className={`${styles.categories__category__dot} ${getCategory(category)}`}
        ></div>
        {category}
    </li>
  );
}
