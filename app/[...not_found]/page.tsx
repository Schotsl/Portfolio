import { getImage } from "@/helper";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { marked } from "marked";

import Header from "@/component/Header";
import Button from "@/component/Button";

import Breadcrumb from "../project/[slug]/components/Breadcrumb";
import Content from "../project/[slug]/components/Content";
import Links from "../project/[slug]/components/Links";
import styles from "./page.module.scss";
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
        small={true}
        title={bannerTitle}
        taglines={bannerTaglines}
      />

      <section className={styles.found__content}>
        <Breadcrumb items={[{ title: "Not found", href: "#" }]} />

        <h2>Not found</h2>

        <Content
          intro={
            "It appears that this page doesn't exist. The link you followed may be broken, or the page may have been removed."
          }
        />

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
