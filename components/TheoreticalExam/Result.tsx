import React from "react";
import { Typography } from "@/components/Typography";

interface ResultProps {
  examTitle: string;
  score: number;
  total: number;
  onRestart: () => void;
  onExit: () => void;
}

const PASS_THRESHOLD = 60;

export const Result = ({
  examTitle,
  score,
  total,
  onRestart,
  onExit,
}: ResultProps) => {
  const percentage = total ? Math.round((score / total) * 100) : 0;
  const passed = percentage >= PASS_THRESHOLD;

  const accent = passed
    ? "text-green-600 dark:text-green-400 ring-green-400/30 bg-green-400/10"
    : "text-amber-600 dark:text-amber-400 ring-amber-400/30 bg-amber-400/10";

  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-700/60 bg-white/60 dark:bg-slate-800/40 p-6 md:p-8 max-w-[720px] mx-auto shadow-sm text-center">
      <Typography as="p" className="text-sm text-gray-500 dark:text-gray-400">
        {examTitle}
      </Typography>

      <div
        className={`mx-auto my-5 flex h-32 w-32 flex-col items-center justify-center rounded-full ring-8 ${accent}`}
      >
        <span className="text-4xl font-bold leading-none">{percentage}%</span>
        <span className="mt-1 text-sm opacity-80">
          {score}/{total}
        </span>
      </div>

      <Typography as="h3">
        {passed ? "نتيجة ممتازة 🎉" : "تحتاج لمزيد من المراجعة"}
      </Typography>
      <Typography as="p" className="mt-2 text-gray-600 dark:text-gray-300">
        {passed
          ? "أحسنت! أنت على الطريق الصحيح لاجتياز الاختبار."
          : "لا بأس، أعد المحاولة وراجع الأسئلة التي أخطأت بها."}
      </Typography>

      <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-center">
        <button
          onClick={onExit}
          className="rounded-full border border-gray-300 dark:border-gray-600 py-2.5 px-6 font-medium hover:bg-gray-400/10 transition"
        >
          العودة للاختبارات
        </button>
        <button
          onClick={onRestart}
          className="rounded-full bg-green-600 hover:bg-green-700 text-white py-2.5 px-6 font-medium transition"
        >
          إعادة الاختبار
        </button>
      </div>
    </div>
  );
};
