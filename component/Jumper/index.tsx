import styles from "./Jumper.module.scss";

import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Jumper() {
  return (
    <a href="#main" className={styles.jumper}>
      View all my projects
      <FontAwesomeIcon className={styles.jumper__icon} icon={faArrowDown} />
    </a>
  );
}
