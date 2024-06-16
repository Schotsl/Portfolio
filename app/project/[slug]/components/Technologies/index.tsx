import styles from "./Technologies.module.scss";
import Image from "next/image";

import { Technology } from "@/types";

type TechnologiesProps = {
  technologies: Technology[];
};

export default function Technologies({ technologies }: TechnologiesProps) {
  const getIcon = (technologies: string) => {
    const iconSpaced = technologies.replace(/\s/g, "-");
    const iconLowered = iconSpaced.toLowerCase();
    const iconPath = `/icons/${iconLowered}.svg`;

    return iconPath;
  };

  return (
    <ul className={styles.technologies}>
      {technologies.map((technology) => {
        const { url, slug, color, title } = technology;

        return (
          <li className={styles.technologies__technology} key={slug}>
            <a
              href={url}
              target="_blank"
              className={styles.technologies__technology__link}
            >
              <div
                style={{ backgroundColor: color }}
                className={styles.technologies__technology__link__background}
              ></div>

              <Image
                src={getIcon(slug)}
                alt={title}
                width={16}
                height={16}
                className={styles.technologies__technology__link__icon}
              />

              {title}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
