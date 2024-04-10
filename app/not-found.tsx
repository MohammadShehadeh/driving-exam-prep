import React from "react";
import Link from "next/link";

import { Typography } from "@/components/Typography";

function notfound() {
  return (
    <div className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <Typography as="p" className="font-semibold">
          404
        </Typography>
        <Typography as="h1" className="mt-4">
          الصفحة غير موجودة
        </Typography>
        <Typography as="p" className="mt-6">
          عذرًا، لم نتمكن من العثور على الصفحة التي تبحث عنها.
        </Typography>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md dark:bg-gray-200 bg-gray-900 px-3.5 py-2.5 text-sm font-medium text-white dark:text-black shadow-sm dark:hover:bg-gray-300 hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default notfound;
