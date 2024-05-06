import styles from "./About.module.scss";

import Image from "@/component/Image";
import Button from "../Button";

import { getImage } from "@/helper";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default async function About() {
  const banner = await getImage("/images/profile.png", "Me");

  return (
    <div className={styles.about}>
      <Image className={styles.about__image} image={banner} sizes={"24rem"} />

      <section className={styles.about__section}>
        <h2 className={styles.about__section__title}>About Me</h2>
        <p className={styles.about__section__text}>
          Hey! I&apos;m Sjors van Holst, an experienced web developer and a
          learning web designer. I absolutely love creating websites and mobile
          apps for a wide variety of use cases—from a fun, simple website to
          check the swimming weather, to a fully-fledged, complex workout app. I
          love learning and using new technologies, which is confirmed by the
          fact that I probably refactor old projects a bit too often...
        </p>

        <p className={styles.about__section__text}>
          I&apos;m confident that I can help you with many technical and design
          challenges, from creating a mobile app or company website, to
          improving UX and consulting on an offer or project. Don&apos;t
          hesitate to contact me.
        </p>

        <p className={styles.about__section__text}>
          I&apos;ve got a broad knowledge of frameworks and tools; I currently
          prefer working with TypeScript and React in Next.js and Supabase,
          although I&apos;ve also spent a lot of time with Vue, PHP, WordPress,
          MySQL, and more!
        </p>

        <Button href="/contact" label="Download my CV" icon={faDownload} />
      </section>
    </div>
  );
}
