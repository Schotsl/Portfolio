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
          Hi, I&apos;m Me. I&apos;m a web developer and designer. I love
          creating beautiful and functional websites. I&apos;m passionate about
          learning new technologies and improving my skills. I&apos;m always
          looking for new challenges and opportunities to grow.
        </p>

        <h3 className={styles.about__section__subtitle}>Skills</h3>
        <p>
          Lorum ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          suscipit, nunc in ultricies ultricies, turpis sapien ultricies nunc,
          nec fermentum turpis turpis nec libero. Nullam suscipit, nunc in
          ultricies ultricies, turpis sapien ultricies nunc, nec fermentum
          turpis turpis nec libero.
        </p>
      </section>
    </div>
  );
}
