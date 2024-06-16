import styles from "./Links.module.scss";

import Button from "@/component/Button";

import { Link } from "@/types";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faAppStore,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";

type LinksProps = {
  links: Link[];
};

export default function Links({ links }: LinksProps) {
  const getIcon = (icon: string) => {
    switch (icon) {
      case "globe":
        return faGlobe;
      case "github":
        return faGithub;
      case "app-store":
        return faAppStore;
      default:
        return faGooglePlay;
    }
  };

  return (
    <ul className={styles.links}>
      {links.map((link) => {
        const { url, icon, title } = link;

        return (
          <li className={styles.links__link} key={url}>
            <Button href={url} icon={getIcon(icon)} label={title} />
          </li>
        );
      })}
    </ul>
  );
}
