"use client";

import { useEffect, useRef, useState } from "react";

import supabase from "@/utils/supabase";

type CountProps = {
  initial: number;
};

const UPDATE_INTERVAL = 10000;

export default function Count({ initial }: CountProps) {
  const [smooth, setSmooth] = useState(0);
  const [smoothInterval, setSmoothInterval] = useState<NodeJS.Timeout | null>();

  const smoothRef = useRef(smooth);

  smoothRef.current = smooth;

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

          scheduleSmooth(pageviewsNew, pageviewsOld);
        }
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  };

  useEffect(() => {
    scheduleSmooth(initial, 0);
    subscribeCount();
  }, []);

  return (
    <div>
      <h1>Count {smooth}</h1>
    </div>
  );
}
