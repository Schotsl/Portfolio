import { getImage } from "@/helper";

import Header from "@/component/Header";
import Links from "../component/Links";
import Breadcrumb from "../component/Breadcrumb";

import styles from "./not-found.module.scss";
import banner from "@/public/content/shared/banner.json";
import content from "@/public/content/pages/not_found/index.json";

export const dynamic = "force-static";

export default async function NotFoundPage() {
  const bannerBack = await getImage(banner.back);
  const bannerFront = await getImage(banner.front);
  const bannerTitle = banner.title;
  const bannerTaglines = content.banner.taglines.map(
    (tagline) => tagline.tagline,
  );

  return (
    <main className={styles.found}>
      <Header
        back={bannerBack}
        front={bannerFront}
        title={bannerTitle}
        taglines={bannerTaglines}
      />

      <section className={styles.found__content}>
        <Breadcrumb items={[{ title: "Not found", href: "#" }]} />

        <div className={styles.found__content__intro}>
          <h2 className={styles.found__content__intro__title}>Not found</h2>
          <b className={styles.found__content__intro__content}>
            It appears that this page doesn&apos;t exist. The link you followed
            may be broken, or the page may have been removed.
          </b>
        </div>

        <Links
          links={[
            {
              url: "/",
              icon: "home",
              title: "Homepage",
            },
          ]}
        />
      </section>
    </main>
  );
}
