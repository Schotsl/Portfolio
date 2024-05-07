import styles from "./About.module.scss";

import Image from "@/component/Image";
import Button from "../Button";

import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Image as ImageType } from "@/types";

type AboutProps = {
  image: ImageType;
  title: string;
  content: string;
};

export default async function About({ image, title, content }: AboutProps) {
  return (
    <div className={styles.about}>
      <Image className={styles.about__image} image={image} sizes={"24rem"} />

      <section className={styles.about__section}>
        <h2 className={styles.about__section__title}>{title}</h2>

        {content}

        <Button href="/contact" label="Download my CV" icon={faDownload} />
      </section>
    </div>
  );
}
