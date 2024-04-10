import React from "react";
import { Navigation } from "./Navigation";
import { Typography } from "./Typography";
import { ThemeSwitch } from "./ThemeSwitch";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="border-b border-gray-300/90 dark:border-gray-700/50 py-2 sm:py-4 md:sticky top-0 z-10 bg-white/95 dark:bg-black/95 drop-shadow-sm">
      <div className="container flex sm:flex-row flex-col items-center sm:justify-between relative">
        <Link href="/" className="text-nowrap self-start ">
          <Typography as="p" className="font-semibold">
            المعتصم عباس
          </Typography>
        </Link>
        <Navigation />
        <ThemeSwitch />
      </div>
    </header>
  );
};
