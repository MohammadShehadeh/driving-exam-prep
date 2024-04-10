'use client';

import React from "react";
import { navigation } from "@/utils/navigation";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="items-center gap-4 mt-4 mb-2 flex overflow-x-auto no-scrollbar justify-center sm:my-0">
      {navigation.map((nav) => (
        <a
          key={nav.id}
          href={`${pathname !== "/" ? "/" : ""}#${nav.id}`}
          className="hover:text-green-600 dark:hover:text-green-400 font-medium text-nowrap text-sm md:text-base"
        >
          {nav.text}
        </a>
      ))}
    </nav>
  );
};
