import { getImage } from "@/helper";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { marked } from "marked";

import Header from "@/component/Header";
import Button from "@/component/Button";

import styles from "./page.module.scss";
import banner from "@/public/content/shared/banner.json";
import content from "@/public/content/pages/404/index.json";

export default async function Page() {
  const bannerImage = await getImage(banner.image);
  const bannerTitle = banner.title;
  const bannerTaglines = content.banner.taglines.map(
    (tagline) => tagline.tagline
  );

  return (
    <main className={styles.main}>
      <Header
        small={true}
        title={bannerTitle}
        banner={bannerImage}
        sentences={bannerTaglines}
      />

      <h2 className={styles.main__title}>{content.title}</h2>
      <div
        className={styles.main__content}
        dangerouslySetInnerHTML={{ __html: marked(content.content) }}
      ></div>

      <Button
        className={styles.main__button}
        icon={faHome}
        href="/"
        label="Go back to the homepage"
      />
    </main>
  );
}
