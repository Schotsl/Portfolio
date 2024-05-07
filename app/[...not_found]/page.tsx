import { getImage } from "@/helper";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import Header from "@/component/Header";

import styles from "./page.module.scss";
import Button from "@/component/Button";

export default async function Page() {
  const banner = await getImage("/images/banner.png", "Me");

  return (
    <main className={styles.main}>
      <Header
        banner={banner}
        small={true}
        sentences={["Looking for this page"]}
      />
      <h2 className={styles.main__title}>This page could not be found</h2>
      <p className={styles.main__content}>
        It appears that this page doesn&apos;t exist. The link you followed may
        be broken, or the page may have been removed.
      </p>

      <Button
        className={styles.main__button}
        icon={faHome}
        href="/"
        label="Go back to the homepage"
      />
    </main>
  );
}
