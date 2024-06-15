import styles from "./Technologies.module.scss";
import { technologies as technologiesVariable } from "@/variables";

import Image from "next/image";

type TechnologiesProps = {
  technologies: string[];
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
      {technologies?.map((technology: string) => {
        const technologySpaced = technology.replace(/\s/g, "_");
        const technologyLowered = technologySpaced.toLowerCase();
        const technologyKey =
          technologyLowered as keyof typeof technologiesVariable;
        const technologyVariable = technologiesVariable[technologyKey];

        return (
          <li className={styles.technologies__technology} key={technology}>
            <a
              href={technologyVariable.url}
              target="_blank"
              className={styles.technologies__technology__link}
            >
              <div
                style={{ backgroundColor: technologyVariable.color }}
                className={styles.technologies__technology__link__background}
              ></div>

              <Image
                src={getIcon(technology)}
                alt={technology}
                width={16}
                height={16}
                className={styles.technologies__technology__link__icon}
              />

              {technology}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
