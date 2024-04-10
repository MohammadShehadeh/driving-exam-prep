import React from "react";
import { Socials } from "./Socials";

export const Banner = () => {
  return (
    <div className="bg-green-400/10 text-green-600 dark:text-green-400 border-b border-b-green-400/10">
      <div className="container flex justify-between gap-4 py-2">
        <a
          dir="ltr"
          href="https://wa.me/+962798855350"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2"
          aria-label="WhatsApp (واتساب)"
        >
          <svg
            fill="currentcolor"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
          >
            <path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"></path>
          </svg>
          <span className="hidden sm:block">WhatsApp (واتساب)</span>
        </a>
        <Socials />
      </div>
    </div>
  );
};
