"use client";

import React, { useState } from "react";

import { theoreticalExam } from "@/utils/navigation";
import { Typography } from "@/components/Typography";
import { Intro } from "./Intro";
import { Exam } from "./Exam";

export const TheoreticalExam = () => {
  const [activeExam, setActiveExam] = useState<any>(null);

  return (
    <div className="md:scroll-mt-[62px] scroll-mt-[8px] my-8 container" id={theoreticalExam.id}>
      <div className="mb-4">
        <span className="inline-flex ml-3 text-xs leading-5 mb-2 font-medium text-green-600 dark:text-green-400 bg-green-400/10 rounded-full border border-green-400/10 py-1 px-3">
          الاختبارات
        </span>
        <Typography as="h2">الفحص النظري</Typography>
        <Typography as="p">
          نقدم لكم من خلال الموقع جميع الأسئلة المتوقعة لاختبار السياقة النظري
          في دائرة ترخيص المركبات الأردنية.
        </Typography>
      </div>
      <div className="mb-4">
        <Typography as="h3">اختبار الفئتين الثالثة والرابعة</Typography>
        <Typography as="p">
          يتكون الاختبار من سبعة اجزاء, يمكن اجراء كل اختبار بشكل منفصل.
        </Typography>
      </div>

      {!activeExam ? (
        <Intro setActiveExam={setActiveExam} />
      ) : (
        <Exam setActiveExam={setActiveExam} activeExam={activeExam} />
      )}
    </div>
  );
};
