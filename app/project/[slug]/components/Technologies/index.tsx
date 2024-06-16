import styles from "./Technologies.module.scss";

import Image from "next/image";

import { Technology } from "@/types";

type TechnologiesProps = {
  technologies: Technology[];
};

export default function Technologies({ technologies }: TechnologiesProps) {
  return (
    <ul className={styles.technologies}>
      {technologies.map((technology) => {
        const { url, slug, color, title } = technology;

        return (
          <li className={styles.technologies__technology} key={slug}>
            <a
              href={url}
              style={{ backgroundColor: color }}
              target="_blank"
              className={styles.technologies__technology__link}
            >
              <div className={styles.technologies__technology__link__inner}>
                <Image
                  src={`/icons/${slug}.svg`}
                  alt={title}
                  width={16}
                  height={16}
                  className={styles.technologies__technology__link__inner__icon}
                />

                {title}
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
