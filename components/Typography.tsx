import React, { PropsWithChildren } from "react";

type Headings = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

const buildTypography = (as: Headings) => {
  const headings = {
    h1: "md:text-5xl text-3xl antialiased font-semibold text-inherit tracking-normal leading-snug",
    h2: "md:text-4xl text-2xl antialiased font-semibold text-inherit tracking-normal leading-snug",
    h3: "md:text-3xl text-xl antialiased font-semibold text-inherit tracking-normal leading-snug",
    h4: "md:text-2xl text-base antialiased font-semibold text-inherit tracking-normal leading-snug",
    h5: "text-xl antialiased font-semibold text-inherit tracking-normal leading-snug",
    h6: "text-base antialiased font-semibold text-inherit tracking-normal leading-snug",
    p: "font-normal antialiased text-base",
  };

  return headings[as];
};

interface TypographyProps extends PropsWithChildren {
  as: Headings;
  className?: string;
}

export const Typography = ({
  as: As,
  children,
  className = "",
}: TypographyProps) => {
  return <As className={`${buildTypography(As)} ${className}`}>{children}</As>;
};
