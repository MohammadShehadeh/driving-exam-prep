import type { Metadata } from "next";
import { Suspense } from "react";

import { tajawal } from "@/app/fonts";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Banner } from "@/components/Banner";
import Analytics from "./analytics";

import "./globals.css";

export const metadata: Metadata = {
  title: "الصفحة الرئيسية - المعتصم عباس",
  description:
    "نقدم لكم من خلال الموقع جميع الأسئلة المتوقعة لاختبار السياقة النظري في دائرة ترخيص المركبات الأردنية.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl" className="scroll-smooth">
      <head>
        <script
          id="user-settings"
          dangerouslySetInnerHTML={{
            __html: `
							try {
                const isDarkMode = localStorage.darkMode === 'true';
								document.documentElement.classList.toggle('dark', !localStorage.darkMode || !isDarkMode);
							} catch (_) {}
						`,
          }}
        />
      </head>
      <body
        className={`${tajawal.className} antialiased min-h-screen min-h-dvh text-slate-800 dark:text-slate-200 bg-white dark:bg-black`}
      >
        <Suspense>
          <Analytics />
        </Suspense>
        <Banner />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
