import { getImage } from "@/helper";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { marked } from "marked";

import Header from "@/component/Header";
import Button from "@/component/Button";

import styles from "./page.module.scss";
import banner from "@/public/content/shared/banner.json";
import content from "@/public/content/pages/not_found/index.json";

export default async function NotFoundPage() {
  const bannerImage = await getImage(banner.image);
  const bannerTitle = banner.title;
  const bannerTaglines = content.banner.taglines.map(
    (tagline) => tagline.tagline,
  );

  return (
    <main className={styles.not_found}>
      <Header
        small={true}
        title={bannerTitle}
        banner={bannerImage}
        taglines={bannerTaglines}
      />

      <h2 className={styles.not_found__title}>{content.title}</h2>
      <div
        className={styles.not_found__content}
        dangerouslySetInnerHTML={{ __html: marked(content.content) }}
      ></div>

      <Button
        icon={faHome}
        href="/"
        label="Go back to the homepage"
        className={styles.not_found__button}
      />
    </main>
  );
}
