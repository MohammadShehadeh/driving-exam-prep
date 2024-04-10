import React from "react";

import signsAndSignals from "@/questions/signs-and-signals.json";
import categories from "@/questions/categories-of-market-licenses.json";
import safety from "@/questions/safety-and-first-aid.json";
import { Typography } from "@/components/Typography";

interface IntroProps {
  setActiveExam: (exam: any) => void;
}

const examsList = [
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
    <div className="border border-gray-700/20 dark:border-gray-700/50 p-5 md:p-6 bg-slate-200/20 dark:bg-slate-600/20 rounded-lg max-w-[700px] m-auto">
      <span className="relative flex h-3 w-3 top-[-26px] md:top-[-30px]">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
      <Typography as="h3">اختر نوع الفحص:</Typography>
      <ol className="list-decimal mr-4 mt-2">
        {examsList.map((exam, index) => (
          <li className="mb-1" key={index}>
            <button
              className="block text-right"
              onClick={() => setActiveExam(exam.questions)}
            >
              {exam.text}
            </button>
          </li>
        ))}
      </ol>
      <p className="mt-4">
        وسيتم إضافة باقي الاختبارات لاحقًا لاستكمال التقييم الشامل.
      </p>
    </div>
  );
};
