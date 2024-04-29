import styles from "./CarouselItemCategories.module.scss";

import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
        return styles["categories__category__link__dot--design"];
      case "development":
        return styles["categories__category__link__dot--development"];
      default:
        return styles["categories__category__link__dot--entertainment"];
    }
  };

  return (
    <li className={styles.categories__category}>
      <a className={styles.categories__category__link} href="#">
      <div className={`${styles.categories__category__link__dot} ${getCategory(category)}`}></div>
      {category}
      <FontAwesomeIcon className={styles.categories__category__link__icon} icon={faArrowUpRightFromSquare} />
      </a>
    </li>
  );
}
