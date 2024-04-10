import React from "react";
import { Typography } from "./Typography";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden z-0">
      <div
        className="flex items-center relative bg-no-repeat bg-center bg-cover inset-0 max-h-[900px] md:min-h-[768px] min-h-[480px] before:bg-gradient-to-b before:from-black before:to-black/50 before:absolute before:inset-0"
        style={{ backgroundImage: 'url("/hero-image.jpg")' }}
      >
        <div className="container relative z-1 text-gray-100">
          <Typography as="h1" className="mb-4 font-bold">
            المعتصم عباس
            <br /> لتعليم قيادة السيارات
          </Typography>
          <Typography as="p" className="text-xl max-w-xl">
            تعتبر توجيهات ونصائح المعتصم عباس في تعلم قيادة السيارات ذات قيمة
            كبيرة للمتعلمين الجدد.
          </Typography>
        </div>
      </div>
      <svg
        className="translate-y-[-30px] w-full h-[40px] text-white dark:text-black"
        fill="currentcolor"
        preserveAspectRatio="none"
        viewBox="0 0 1440 74"
      >
        <path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path>
      </svg>
    </section>
  );
};
