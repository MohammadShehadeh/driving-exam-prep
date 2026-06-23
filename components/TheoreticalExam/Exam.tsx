/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Typography } from "@/components/Typography";
import { Result } from "./Result";
import { Exam as ExamType } from "./types";

interface ExamProps {
  activeExam: ExamType;
  setActiveExam: (exam: ExamType | null) => void;
}

export const Exam = ({ activeExam, setActiveExam }: ExamProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);

  const { questions } = activeExam;
  const total = questions.length;
  const question = questions[activeIndex];
  const correctAnswer = question?.answer;
  const currentAnswer = answers[activeIndex];
  const isAnswered = currentAnswer !== undefined;
  const isLast = activeIndex === total - 1;

  const answeredCount = answers.filter((answer) => answer !== undefined).length;
  const score = answers.filter(
    (answer, index) => answer === questions[index]?.answer
  ).length;
  const progress = Math.round(((activeIndex + 1) / total) * 100);

  const nextHandler = () => {
    if (!isLast && isAnswered) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  const prevHandler = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  const answerHandler = (index: number) => {
    if (isAnswered) {
      return;
    }

    const updatedAnswers = [...answers];
    updatedAnswers[activeIndex] = index;
    setAnswers(updatedAnswers);
  };

  const goToHandler = (index: number) => {
    setActiveIndex(index);
  };

  const restartHandler = () => {
    setActiveIndex(0);
    setAnswers([]);
    setFinished(false);
  };

  const exitHandler = () => {
    if (answeredCount > 0 && !window.confirm("سيتم فقدان تقدمك في الاختبار. هل تريد الخروج؟")) {
      return;
    }
    setActiveExam(null);
  };

  const resultMessage = !isAnswered
    ? ""
    : currentAnswer === correctAnswer
    ? "إجابة صحيحة"
    : `إجابة خاطئة، الإجابة الصحيحة: ${question.options[correctAnswer]}`;

  if (finished) {
    return (
      <Result
        examTitle={activeExam.text}
        score={score}
        total={total}
        onRestart={restartHandler}
        onExit={() => setActiveExam(null)}
      />
    );
  }

  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-700/60 bg-white/60 dark:bg-slate-800/40 p-5 md:p-7 max-w-[720px] mx-auto shadow-sm">
      <div className="mb-5 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <Typography as="p" className="truncate font-medium">
            {activeExam.text}
          </Typography>
          <Typography
            as="p"
            className="mt-1 text-sm text-gray-500 dark:text-gray-400"
            aria-live="polite"
          >
            السؤال {activeIndex + 1} من {total}
          </Typography>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-green-400/10 border border-green-400/20 py-1 px-3 text-sm font-medium text-green-600 dark:text-green-400">
            <CheckIcon className="h-4 w-4" />
            {score}/{answeredCount}
          </span>
          <button
            onClick={exitHandler}
            aria-label="العوده الى الاختبارات"
            className="rounded-full p-2 text-gray-500 hover:bg-gray-400/10 hover:text-gray-700 dark:hover:text-gray-200 transition"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        className="mb-6 h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-slate-700"
        role="progressbar"
        aria-label="تقدّم الاختبار"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuetext={`السؤال ${activeIndex + 1} من ${total}`}
      >
        <div
          className="h-full rounded-full bg-green-500 transition-[width] duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <Typography as="h4" className="!text-lg md:!text-xl leading-relaxed">
        {question.question}
      </Typography>

      {question.image && (
        <img
          key={question.image}
          width={180}
          height={150}
          className="my-4 mx-auto h-[150px] w-[180px] rounded-lg object-contain bg-white p-2"
          src={question.image}
          alt={question.imageAlt || question.question}
        />
      )}

      <ul className="mt-4 space-y-2.5">
        {question.options.map((option, index) => {
          const isCorrect = index === correctAnswer;
          const isSelected = currentAnswer === index;

          let stateClass =
            "border-gray-300/70 dark:border-gray-600/60 hover:border-green-400 hover:bg-green-400/5";

          if (isAnswered && isCorrect) {
            stateClass =
              "border-green-500/60 bg-green-400/10 text-green-700 dark:text-green-400";
          } else if (isAnswered && isSelected) {
            stateClass =
              "border-red-500/60 bg-red-400/10 text-red-700 dark:text-red-400";
          } else if (isAnswered) {
            stateClass =
              "border-gray-200 dark:border-gray-700/50 text-gray-500 opacity-70";
          }

          return (
            <li key={index}>
              <button
                disabled={isAnswered}
                onClick={() => answerHandler(index)}
                className={`flex w-full items-center justify-between gap-3 rounded-xl border py-3 px-4 md:px-5 text-right text-sm font-medium transition disabled:cursor-default md:text-base ${stateClass}`}
              >
                <span>{option}</span>
                {isAnswered && isCorrect && (
                  <CheckIcon className="h-5 w-5 shrink-0" />
                )}
                {isAnswered && isSelected && !isCorrect && (
                  <CloseIcon className="h-5 w-5 shrink-0" />
                )}
              </button>
            </li>
          );
        })}
      </ul>

      <p className="sr-only" role="status" aria-live="polite">
        {resultMessage}
      </p>

      <div className="mt-6 flex items-center justify-between gap-3">
        <button
          onClick={prevHandler}
          disabled={activeIndex === 0}
          className="inline-flex items-center gap-1 rounded-full border border-gray-300 dark:border-gray-600 py-2 px-5 font-medium transition hover:bg-gray-400/10 disabled:opacity-30 disabled:pointer-events-none"
        >
          <ChevronRightIcon className="h-4 w-4" />
          السابق
        </button>

        {isLast ? (
          <button
            onClick={() => setFinished(true)}
            disabled={!isAnswered}
            className="rounded-full bg-green-600 hover:bg-green-700 text-white py-2 px-6 font-medium transition disabled:opacity-30 disabled:pointer-events-none"
          >
            إنهاء الاختبار
          </button>
        ) : (
          <button
            onClick={nextHandler}
            disabled={!isAnswered}
            className="inline-flex items-center gap-1 rounded-full bg-green-600 hover:bg-green-700 text-white py-2 px-6 font-medium transition disabled:opacity-30 disabled:pointer-events-none"
          >
            التالي
            <ChevronLeftIcon className="h-4 w-4" />
          </button>
        )}
      </div>

      <nav
        aria-label="الانتقال إلى سؤال"
        className="mt-6 border-t border-gray-200 dark:border-gray-700/60 pt-4"
      >
        <Typography
          as="p"
          className="mb-3 text-sm text-gray-500 dark:text-gray-400"
        >
          الانتقال إلى سؤال
        </Typography>
        <ul className="flex flex-wrap gap-2">
          {questions.map((item, index) => {
            const answer = answers[index];
            const isCurrent = index === activeIndex;

            let stateClass =
              "border-gray-300/70 dark:border-gray-600/60 text-gray-600 dark:text-gray-300 hover:border-green-400";

            if (answer !== undefined) {
              stateClass =
                answer === item.answer
                  ? "border-green-500/60 bg-green-400/10 text-green-700 dark:text-green-400"
                  : "border-red-500/60 bg-red-400/10 text-red-700 dark:text-red-400";
            }

            return (
              <li key={index}>
                <button
                  onClick={() => goToHandler(index)}
                  aria-label={`السؤال ${index + 1}`}
                  aria-current={isCurrent ? "step" : undefined}
                  className={`h-9 w-9 rounded-lg border text-sm font-medium transition ${stateClass} ${
                    isCurrent
                      ? "ring-2 ring-green-500 ring-offset-2 dark:ring-offset-slate-800"
                      : ""
                  }`}
                >
                  {index + 1}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

interface IconProps {
  className?: string;
}

const CheckIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="m5 13 4 4L19 7"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CloseIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M6 6l12 12M18 6 6 18"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronLeftIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="m15 6-6 6 6 6"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronRightIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="m9 6 6 6-6 6"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
