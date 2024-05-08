import styles from "./RootAbout.module.scss";

import Image from "@/component/Image";
import Button from "@/component/Button";

import { marked } from "marked";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Image as ImageType } from "@/types";

type RootAboutProps = {
  image: ImageType;
  title: string;
  content: string;
};

export default async function RootAbout({
  image,
  title,
  content,
}: RootAboutProps) {
  return (
    <div className={styles.about}>
      <Image className={styles.about__image} image={image} sizes={"24rem"} />

      <section className={styles.about__section}>
        <h2 className={styles.about__section__title}>{title}</h2>

        <div
          className={styles.about__section__content}
          dangerouslySetInnerHTML={{ __html: marked(content) }}
        ></div>

        <Button
          href="/contact"
          icon={faDownload}
          label="Download my CV"
          className={styles.about__section__button}
        />
      </section>
    </div>
  );
}
