import styles from "./Content.module.scss";

import { marked } from "marked";

type ContentProps = {
  html: string;
};

export default function Content({ html }: ContentProps) {
  return (
    <div
      className={styles.content}
      dangerouslySetInnerHTML={{ __html: marked(html) }}
    ></div>
  );
}
