import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Button.module.scss";

type ButtonProps = {
  href: string;
  label: string;
  icon?: IconDefinition;
  className?: string;
};

export default function Button({ href, label, icon, className }: ButtonProps) {
  return (
    <a href={href} className={`${styles.button} ${className}`}>
      <label className={styles.button__label}>{label}</label>

      {icon && <FontAwesomeIcon className={styles.button__icon} icon={icon} />}
    </a>
  );
}
