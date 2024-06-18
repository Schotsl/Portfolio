import styles from "./Content.module.scss";

import { marked } from "marked";

type ContentProps = {
  html?: string;
  intro: string;
};

export default function Content({ html, intro }: ContentProps) {
  return (
    <div className={styles.content}>
      <b className={styles.content__intro}>{intro}</b>
      {html && (
        <div
          className={styles.content__html}
          dangerouslySetInnerHTML={{ __html: marked(html) }}
        ></div>
      )}
    </div>
  );
}
