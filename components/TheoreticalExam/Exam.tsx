/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import { Typography } from "@/components/Typography";

interface ExamProps {
  activeExam: any;
  setActiveExam: (exam: any) => void;
}

export const Exam = ({ activeExam, setActiveExam }: ExamProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const scoreRef = useRef(0);

  const question = activeExam?.[activeIndex];
  const correctAnswer = question?.answer;
  const currentAnswer = answers?.[activeIndex];
  const limit = activeExam.length - 1;

  const nextHandler = () => {
    if (activeIndex === limit || answers[activeIndex] === undefined) {
      return;
    }

    setActiveIndex((prev) => ++prev);
  };

  const prevHandler = () => {
    if (activeIndex === 0) {
      return;
    }

    setActiveIndex((prev) => --prev);
  };

  const answerHandler = (index: number) => {
    if (index == question.answer) {
      scoreRef.current += 1;
    }

    const updatedAnswers = [...answers];
    updatedAnswers[activeIndex] = index;
    setAnswers(updatedAnswers);
  };

  return (
    <div className="border border-gray-700/20 dark:border-gray-700/50 p-5 md:p-6 bg-slate-200/20 dark:bg-slate-600/20 rounded-lg max-w-[700px] m-auto">
      <div className="flex justify-between gap-2 items-start">
        <div className="flex flex-col gap-2">
          <Typography
            as="p"
            className="text-sky-600 dark:text-sky-400 bg-sky-400/10 border border-sky-400/10 rounded-full py-1 px-3"
          >
            النتيجة: {scoreRef.current} \{" "}
            {answers.filter((answer) => answer !== undefined).length}
          </Typography>
          <Typography as="p">
            السؤال {activeIndex + 1} من {limit + 1}
          </Typography>
        </div>
        <button
          onClick={() => setActiveExam(null)}
          aria-label="العوده الى الاختبارات"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentcolor"
            version="1.1"
            viewBox="0 0 26.676 26.676"
          >
            <path d="M26.105,21.891c-0.229,0-0.439-0.131-0.529-0.346l0,0c-0.066-0.156-1.716-3.857-7.885-4.59   c-1.285-0.156-2.824-0.236-4.693-0.25v4.613c0,0.213-0.115,0.406-0.304,0.508c-0.188,0.098-0.413,0.084-0.588-0.033L0.254,13.815   C0.094,13.708,0,13.528,0,13.339c0-0.191,0.094-0.365,0.254-0.477l11.857-7.979c0.175-0.121,0.398-0.129,0.588-0.029   c0.19,0.102,0.303,0.295,0.303,0.502v4.293c2.578,0.336,13.674,2.33,13.674,11.674c0,0.271-0.191,0.508-0.459,0.562   C26.18,21.891,26.141,21.891,26.105,21.891z"></path>
          </svg>
        </button>
      </div>
      <div className="flex justify-center flex-col items-center">
        <Typography as="p" className="my-2">
          {question.question}
        </Typography>
        {question.image && (
          <img
            key={question.image}
            width={150}
            height={125}
            className="w-[150px] object-contain h-[125px]"
            src={question.image}
            alt={question.question}
          />
        )}
        <ul className="my-1">
          {question.options.map((option: string, index: number) => {
            const correctClassName =
              currentAnswer !== undefined && index === correctAnswer
                ? "text-green-600 dark:text-green-400 bg-green-400/10 border-green-400/10"
                : "";
            const wrongClassName =
              currentAnswer === index && currentAnswer != correctAnswer
                ? "text-red-600 dark:text-red-400 bg-red-400/10  border-red-400/10"
                : "";
            const defaultClassName =
              !wrongClassName && !correctClassName
                ? "text-gray-600 dark:text-gray-400 bg-gray-400/10  hover:bg-gray-400/20  border-gray-400/10 disabled:opacity-50 disabled:pointer-events-none"
                : " ";

            return (
              <li key={index} className="my-2">
                <button
                  disabled={currentAnswer !== undefined}
                  onClick={() => answerHandler(index)}
                  className={`leading-5 font-medium md:text-base text-sm rounded-full py-2 md:px-6 px-4 w-full border ${defaultClassName} ${correctClassName} ${wrongClassName}`}
                >
                  {option}
                </button>
              </li>
            );
          })}
        </ul>
        <div className="flex justify-between w-full">
          <button
            className="border border-gray-700/70 cursor-pointer hover:bg-gray-400/20 py-2 px-4 rounded-full disabled:opacity-20 disabled:pointer-events-none"
            onClick={nextHandler}
            disabled={
              activeIndex === limit || answers[activeIndex] === undefined
            }
          >
            التالي
          </button>
          <button
            className="border border-gray-700/70 cursor-pointer hover:bg-gray-400/20 py-2 px-4 rounded-full disabled:opacity-30 disabled:pointer-events-none"
            onClick={prevHandler}
            disabled={activeIndex === 0}
          >
            السابق
          </button>
        </div>
      </div>
    </div>
  );
};
