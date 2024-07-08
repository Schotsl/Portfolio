import Link from "next/link";

import { faChevronRight, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Breadcrumb.module.scss";

export default function Breadcrumb({
  items,
}: {
  items: { title: string; href: string }[];
}) {
  return (
    <nav className={styles.breadcrumb}>
      <ul className={styles.breadcrumb__list}>
        <li className={styles.breadcrumb__list__item} key="/">
          <Link className={styles.breadcrumb__list__item__link} href="/">
            <FontAwesomeIcon
              icon={faHome}
              size={"sm"}
              className={styles.breadcrumb__list__item__icon}
            />
            Home
          </Link>
        </li>

        <li className={styles.breadcrumb__list__item} key="separator">
          <FontAwesomeIcon icon={faChevronRight} />
        </li>

        {items.map((item, index) => (
          <>
            <li className={styles.breadcrumb__list__item} key={item.href}>
              <Link
                href={item.href}
                className={styles.breadcrumb__list__item__link}
              >
                {item.title}
              </Link>
            </li>

            {index !== items.length - 1 && (
              <li
                key={`${item.href}-seperator`}
                className={styles.breadcrumb__list__item}
              >
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className={styles.breadcrumb__list__item__icon}
                />
              </li>
            )}
          </>
        ))}
      </ul>
    </nav>
  );
}
