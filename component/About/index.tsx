import styles from "./About.module.scss";

import Image from "@/component/Image";

import { getImage } from "@/helper";

export default async function About() {
  const banner = await getImage("/images/profile.png", "Me");

  return (
    <div className={styles.about}>
      <Image className={styles.about__image} image={banner} sizes={"30rem"} />

      <section className={styles.about__section}>
        <h2 className={styles.about__section__title}>About Me</h2>
        <p className={styles.about__section__text}>
          Hi, I&apos;m Me. I&apos;m a web developer and designer. I love creating
          beautiful and functional websites. I&apos;m passionate about learning new
          technologies and improving my skills. I&apos;m always looking for new
          challenges and opportunities to grow.
        </p>

        <h3 className={styles.about__section__subtitle}>Skills</h3>
        <ul className={styles.about__section__list}>
          <li className={styles.about__section__list__item}>HTML</li>
          <li className={styles.about__section__list__item}>CSS</li>
          <li className={styles.about__section__list__item}>JavaScript</li>
          <li className={styles.about__section__list__item}>React</li>
          <li className={styles.about__section__list__item}>Next.js</li>
          <li className={styles.about__section__list__item}>Node.js</li>
          <li className={styles.about__section__list__item}>MongoDB</li>
          <li className={styles.about__section__list__item}>Git</li>
        </ul>
      </section>
    </div>
  );
}
