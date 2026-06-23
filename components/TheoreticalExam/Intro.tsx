import React from "react";

import signsAndSignals from "@/questions/signs-and-signals.json";
import categories from "@/questions/categories-of-market-licenses.json";
import safety from "@/questions/safety-and-first-aid.json";
import { Typography } from "@/components/Typography";
import { Exam } from "./types";

interface IntroProps {
  setActiveExam: (exam: Exam) => void;
}

const examsList: Exam[] = [
  {
    text: "الشواخص والاشارات",
    questions: signsAndSignals,
  },
  {
    text: "وسائل الامان في المركبات والاسعافات الاولية",
    questions: safety,
  },
  {
    text: "فئات رخص السوق والعلامات الارضية",
    questions: categories,
  },
];

export const Intro = ({ setActiveExam }: IntroProps) => {
  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <Typography as="h3" className="!text-xl">
          اختر نوع الفحص
        </Typography>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {examsList.map((exam) => (
          <li key={exam.text}>
            <button
              onClick={() => setActiveExam(exam)}
              className="group flex h-full w-full flex-col justify-between gap-4 rounded-2xl border border-gray-200 dark:border-gray-700/60 bg-white/60 dark:bg-slate-800/40 p-5 text-right shadow-sm transition hover:-translate-y-0.5 hover:border-green-400 hover:shadow-md"
            >
              <Typography as="h4" className="!text-lg leading-snug">
                {exam.text}
              </Typography>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center rounded-full bg-green-400/10 border border-green-400/20 py-1 px-3 text-xs font-medium text-green-600 dark:text-green-400">
                  {exam.questions.length} سؤال
                </span>
                <span className="text-sm font-medium text-gray-500 transition group-hover:text-green-600 dark:group-hover:text-green-400">
                  ابدأ الاختبار ←
                </span>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        وسيتم إضافة باقي الاختبارات لاحقًا لاستكمال التقييم الشامل.
      </p>
    </div>
  );
};
