"use client";

import supabase from "@/utils/supabase";

import Image from "next/image";

import styles from "./RootCount.module.scss";

import { useEffect, useRef, useState } from "react";

type CountProps = {
  initial: number;
};

const UPDATE_INTERVAL = 10000;

export default function RootCount({ initial }: CountProps) {
  const [hidden, setHidden] = useState(initial);
  const [visible, setVisible] = useState(false);

  const [smooth, setSmooth] = useState(0);
  const [smoothInterval, setSmoothInterval] = useState<NodeJS.Timeout | null>();

  const smoothRef = useRef(smooth);
  const visibleRef = useRef(visible);
  const containerRef = useRef<HTMLDivElement>(null);

  smoothRef.current = smooth;
  visibleRef.current = visible;

  const scheduleSmooth = (updated: number, old: number) => {
    if (smoothInterval) {
      clearInterval(smoothInterval);
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

    setSmoothInterval(interval);

    return () => clearInterval(interval);
  };

  const subscribeCount = () => {
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
        }
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  };

  useEffect(() => {
    subscribeCount();

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

    observer.observe(containerRef.current!);
  }, []);

  return (
    <div className={styles.count} ref={containerRef}>
      <h2 className={styles.count__title}>
        <Image
          alt=""
          src="/doodles/exclamation.svg"
          width={145}
          height={127}
          className={styles.count__title__exclamation}
        />
        <Image
          alt=""
          src="/doodles/garlands.svg"
          width={444}
          height={112}
          className={styles.count__title__garlands}
        />
        <Image
          alt=""
          src="/doodles/upwards.svg"
          width={117}
          height={131}
          className={styles.count__title__upwards}
        />
        This month, my services have assisted or entertained over {smooth}{" "}
        individuals
      </h2>

      <p className={styles.count__content}>
        These statistics are collected from{" "}
        <a href="https://overworked.app/">Overworked</a>,{" "}
        <a href="https://presently.dev/">Presently</a>,{" "}
        <a href="https://uwuifier.com/">Uwuifier</a> and{" "}
        <a href="https://toolenburgerplas.nl/">Toolenburger plas</a> using
        Plausible Analytics. They are updated every 10 seconds with a 10 second
        delay.
      </p>
    </div>
  );
}
