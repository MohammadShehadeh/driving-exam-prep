import React from "react";
import { Socials } from "./Socials";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-300/90 dark:border-gray-700/50 mb-4 py-6 sticky bg-white/95 dark:bg-black/95">
      <div className="container flex items-center flex-col gap-2">
        <Socials />
        <p className="text-center">
          Copyright ©{new Date().getFullYear()}{" "}
          <a
            href="https://mohammadshehadeh.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 dark:text-green-400"
          >
            Mohammad Shehadeh
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};
