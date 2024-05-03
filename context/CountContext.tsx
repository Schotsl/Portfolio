"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

type CountContextType = {
  global: number;
};

const CountContext = createContext<CountContextType>({
  global: 0,
});

export const useCount = () => {
  return useContext(CountContext);
};

type CountProviderProps = {
  children: ReactNode;
};

export const CountProvider = ({ children }: CountProviderProps) => {
  const [global, setGlobal] = useState(0);

  const supabase = createClientComponentClient();

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
          setGlobal(payload.new.pageviews);
        },
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  };

  const loadCount = async () => {
    const { data } = await supabase
      .from("statistics")
      .select("id,pageviews")
      .eq("id", "c6fe3380-993e-42bf-91fb-a4806b4f8844")
      .single();

    if (!data) {
      setGlobal(0);
    } else {
      setGlobal(data.pageviews);
    }
  };

  useEffect(() => {
    loadCount();
    subscribeCount();
  });

  return (
    <CountContext.Provider value={{ global }}>{children}</CountContext.Provider>
  );
};
