"use client";

import supabase from "@/utils/supabase";

import Image from "next/image";

import styles from "./RootCount.module.scss";

import { useCallback, useEffect, useRef, useState } from "react";
import WavesFull from "@/component/WavesFull";

type CountProps = {
  initial: number;
};

const UPDATE_INTERVAL = 10000;

export default function RootCount({ initial }: CountProps) {
  const [hidden, setHidden] = useState(initial);
  const [visible, setVisible] = useState(false);

  const [smooth, setSmooth] = useState(0);

  const smoothRef = useRef(smooth);
  const visibleRef = useRef(visible);
  const containerRef = useRef<HTMLDivElement>(null);
  const smoothIntervalRef = useRef<NodeJS.Timeout | null>(null);

  smoothRef.current = smooth;
  visibleRef.current = visible;

  const scheduleSmooth = useCallback((updated: number, old: number) => {
    if (smoothIntervalRef.current) {
      clearInterval(smoothIntervalRef.current);
    }

    const timestamp = Date.now();
    const difference = updated - old;

    const interval = setInterval(() => {
      setSmooth(() => {
        const elapsed = Date.now() - timestamp;
        const progress = elapsed / UPDATE_INTERVAL;

        // If we've reached the target interval
        if (progress >= 1) {
          clearInterval(interval);

          return updated;
        }

        // Otherwise increase the value using easing
        const easing = 1 - Math.pow(1 - progress, 6);
        const increased = Math.round(old + difference * easing);

        return increased;
      });
    }, 10);

    smoothIntervalRef.current = interval;
  }, []);

  const subscribeCount = useCallback(() => {
    const channel = supabase
      .channel("schema-db-changes")
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          table: "statistics",
          schema: "public",
        },
        (payload: any) => {
          const pageviewsNew = payload.new.pageviews;
          const pageviewsOld = smoothRef.current;

          if (visibleRef.current) {
            scheduleSmooth(pageviewsNew, pageviewsOld);
          } else {
            setHidden(pageviewsNew);
          }
        },
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, [scheduleSmooth]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const unsubscribe = subscribeCount();
    const element = containerRef.current;

    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];

      if (!entry.isIntersecting || visible) {
        return;
      }

      // If the element is visible start the smooth transition and disconnect the observer
      setVisible(true);
      scheduleSmooth(hidden, 0);

      observer.disconnect();
    });

    if (element) {
      observer.observe(element);
    }

    return () => {
      unsubscribe();

      if (element) {
        observer.unobserve(element);
      }

      if (smoothIntervalRef.current) {
        clearInterval(smoothIntervalRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.count}>
      <WavesFull className={styles.count__waves} />

      <h2 className={styles.count__title}>
        <Image
          alt=""
          src="/doodles/exclamation.svg"
          width={145}
          height={127}
          sizes="10rem"
          className={styles.count__title__exclamation}
        />
        <Image
          alt=""
          src="/doodles/garlands.svg"
          width={444}
          height={112}
          sizes="(min-width: 768px) 21rem, 14rem"
          className={styles.count__title__garlands}
        />
        <Image
          alt=""
          src="/doodles/upwards.svg"
          width={117}
          height={131}
          sizes="6rem"
          className={styles.count__title__upwards}
        />
        This month, my services have assisted or entertained over{" "}
        <span className={styles.count__title__value}>
          {smooth.toLocaleString()}
        </span>{" "}
        individuals!
      </h2>

      <p className={styles.count__content}>
        These statitistics are collect from projects I fully manage like{" "}
        <a
          href="https://overworked.app/"
          target="_blank"
          className={styles.count__content__link}
        >
          Overworked
        </a>
        ,{" "}
        <a
          href="https://presently.dev/"
          target="_blank"
          className={styles.count__content__link}
        >
          Presently
        </a>
        ,{" "}
        <a
          href="https://uwuifier.com/"
          target="_blank"
          className={styles.count__content__link}
        >
          Uwuifier
        </a>{" "}
        and{" "}
        <a
          href="https://toolenburgerplas.nl/"
          target="_blank"
          className={styles.count__content__link}
        >
          Toolenburger plas
        </a>
        . They are updated every 10 seconds with a 10 second delay.
      </p>
    </div>
  );
}
