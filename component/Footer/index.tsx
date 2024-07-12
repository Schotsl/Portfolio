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
import { ReactNode } from "react";
import Waves from "../WavesPartial";

type FooterItem = {
  icon?: any;
  aria?: string;
  link?: string;
  content?: ReactNode;
  className?: string;
};

type FooterColumn = {
  title: string;
  list: FooterItem[];
};

export default function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const columns: FooterColumn[] = [
    {
      title: "Sjors van Holst",
      list: [
        {
          content:
            "Hey! I'm Sjors van Holst, a web developer and aspiring designer passionate about creating websites and apps. I excel in TypeScript, React, Next.js, Supabase, and design tools like Figma and Photoshop!",
        },
      ],
    },
    {
      title: "Contact",
      list: [
        {
          icon: faEnvelope,
          link: "mailto:contact@sjorsvanholst.nl",
          content: "contact@sjorsvanholst.nl",
        },
        {
          icon: faPhone,
          link: "tel:+31612345678",
          content: "+31 6 123 456 78",
        },
        {
          icon: faMapLocation,
          content: (
            <>
              Splinterstraat 10
              <br />
              2134 LX Hoofddorp
            </>
          ),
        },
      ],
    },
    {
      title: "KvK",
      list: [
        {
          content: "87500337",
        },
        {
          content: "NL004426461B18",
        },
      ],
    },
  ];

  const contact = {
    title: undefined,
    list: [
      {
        content: `© ${currentYear} Sjors van Holst`,
        link: "https://sjorsvanholst.nl",
      },
      {
        aria: "Twitter",
        icon: faTwitter,
        link: "https://twitter.com/sjorsvanholst",
      },
      {
        aria: "LinkedIn",
        icon: faLinkedin,
        link: "https://linkedin.com/in/sjorsvanholst",
      },
      {
        aria: "Instagram",
        icon: faInstagram,
        link: "https://www.instagram.com/schotsl/",
      },
    ],
  };

  return (
    <footer className={styles.footer}>
      <Waves reverse className={styles.footer__waves} />
      <ul className={styles.footer__columns}>
        {columns.map((column, index) => (
          <li key={index} className={styles.footer__columns__column}>
            <h3 className={styles.footer__columns__column__title}>
              {column.title}
            </h3>

            <ul className={styles.footer__columns__column__list}>
              {column.list.map((item, index) => (
                <li
                  key={`${index}-${item.content}`}
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
                      target="_blank"
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
      </ul>

      <ul className={styles.footer__socials}>
        {contact.list.map((item, index) => (
          <li key={index} className={styles.footer__socials__item}>
            <a
              href={item.link}
              target="_blank"
              className={styles.footer__socials__item__link}
              aria-label={item.aria}
            >
              {item.icon && (
                <FontAwesomeIcon
                  className={styles.footer__socials__item__icon}
                  icon={item.icon}
                />
              )}

              {item.content}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
