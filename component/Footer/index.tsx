import styles from "./Footer.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const about = {
    title: "Sjors van Holst",
    list: [
      {
        content:
          "Ontdek de kracht van vormgeving en fotografie met LXFrames. Neem vandaag nog contact met mij op om jouw project te bespreken en samen iets unieks te creëren. Ik kijk er naar uit om van je te horen!",
      },
      {
        content: `© ${currentYear} Sjors van Holst`,
        className: styles.footer__columns__column__list__item__copyright,
      },
    ],
  };

  const contact = {
    title: "Contact",
    list: [
      {
        icon: faEnvelope,
        link: "mailto:sjorsvanholst@gmail.com",
        content: "sjorsvanholst@gmail.com",
      },
      {
        icon: faPhone,
        link: "tel:+31612345678",
        content: "+31 6 123 456 78",
      },
      {
        icon: faMapLocation,
        content: "Splinterstraat 10 2134 LX Hoofddorp",
      },
    ],
  };

  const kvk = {
    title: "KvK",
    list: [
      {
        content: "12345678",
      },
      {
        content: "NL123456789B01",
      },
    ],
  };

  const social = {
    title: "Social",
    list: [
      {
        icon: faTwitter,
        link: "https://twitter.com/sjorsvanholst",
        content: "Twitter",
      },
      {
        icon: faLinkedin,
        link: "https://linkedin.com/in/sjorsvanholst",
        content: "LinkedIn",
      },
      {
        icon: faInstagram,
        link: "https://www.instagram.com/schotsl/",
        content: "Instagram",
      },
    ],
  };

  const content = [about, contact, kvk, social];

  return (
    <footer className={styles.footer}>
      <ul className={styles.footer__columns}>
        {content.map((column, index) => (
          <li key={index} className={styles.footer__columns__column}>
            <h3 className={styles.footer__columns__column__title}>
              {column.title}
            </h3>

            <ul className={styles.footer__columns__column__list}>
              {column.list.map((item, index) => (
                <li
                  key={index}
                  className={
                    item.className
                      ? item.className
                      : styles.footer__columns__column__list__item
                  }
                >
                  {item.icon && (
                    <FontAwesomeIcon
                      className={
                        styles.footer__columns__column__list__item__icon
                      }
                      icon={item.icon}
                    />
                  )}

                  {item.link ? (
                    <a
                      href={item.link}
                      className={
                        styles.footer__columns__column__list__item__link
                      }
                    >
                      {item.content}
                    </a>
                  ) : (
                    item.content
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}

        {/* <li className={styles.footer__columns__column}>
          <h3 className={styles.footer__columns__column__title}>
            Sjors van Holst
          </h3>
          <ul className={styles.footer__columns__column__list}>
            <li className={styles.footer__columns__column__list__item}>
              Ontdek de kracht van vormgeving en fotografie met LXFrames. Neem
              vandaag nog contact met mij op om jouw project te bespreken en
              samen iets unieks te creëren. Ik kijk er naar uit om van je te
              horen!
            </li>

            <li
              className={styles.footer__columns__column__list__item__copyright}
            >
              &copy; {currentYear} Sjors van Holst
            </li>
          </ul>
        </li>

        <li className={styles.footer__columns__column}>
          <h3 className={styles.footer__columns__column__title}>Contact</h3>
          <ul className={styles.footer__columns__column__list}>
            <li className={styles.footer__columns__column__list__item}>
              <FontAwesomeIcon
                className={styles.footer__columns__column__list__item__icon}
                icon={faEnvelope}
              />

              <a
                href="mailto:contact@sjorsvanholst.nl"
                className={styles.footer__columns__column__list__item__link}
              >
                contact@sjorsvanholst.nl
              </a>
            </li>

            <li className={styles.footer__columns__column__list__item}>
              <FontAwesomeIcon
                className={styles.footer__columns__column__list__item__icon}
                icon={faPhone}
              />
              <a
                href="tel:+3122747842"
                className={styles.footer__columns__column__list__item__link}
              >
                +31 22 747 842
              </a>
            </li>

            <li className={styles.footer__columns__column__list__item}>
              <FontAwesomeIcon
                className={styles.footer__columns__column__list__item__icon}
                icon={faMapLocation}
              />
              Splinterstraat 10 2134
              <br /> LX Hoofddorp
            </li>
          </ul>
        </li>

        <li className={styles.footer__columns__column}>
          <h3 className={styles.footer__columns__column__title}>KvK</h3>

          <ul className={styles.footer__columns__column__list}>
            <li className={styles.footer__columns__column__list__item}>
              12345678
            </li>

            <li className={styles.footer__columns__column__list__item}>
              NL123456789B01
            </li>
          </ul>
        </li>

        <li className={styles.footer__columns__column}>
          <h3 className={styles.footer__columns__column__title}>Social</h3>

          <ul className={styles.footer__columns__column__list}>
            <li className={styles.footer__columns__column__list__item}>
              <FontAwesomeIcon
                className={styles.footer__columns__column__list__item__icon}
                icon={faTwitter}
              />
              <a
                href="https://twitter.com/sjorsvanholst"
                className={styles.footer__columns__column__list__item__link}
              >
                Twitter
              </a>
            </li>

            <li className={styles.footer__columns__column__list__item}>
              <FontAwesomeIcon
                className={styles.footer__columns__column__list__item__icon}
                icon={faLinkedin}
              />
              <a
                href="https://linkedin.com/in/sjorsvanholst"
                className={styles.footer__columns__column__list__item__link}
              >
                LinkedIn
              </a>
            </li>

            <li className={styles.footer__columns__column__list__item}>
              <FontAwesomeIcon
                className={styles.footer__columns__column__list__item__icon}
                icon={faInstagram}
              />
              <a
                href="https://www.instagram.com/schotsl/"
                className={styles.footer__columns__column__list__item__link}
              >
                Instagram
              </a>
            </li>
          </ul>
        </li> */}
      </ul>
    </footer>
  );
}
