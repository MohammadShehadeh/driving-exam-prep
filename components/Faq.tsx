import React from "react";

import { faq } from "@/utils/navigation";
import { Typography } from "./Typography";

const faqList = [
  {
    title: "ما العمر الذي استطيع بعده استخراج رخصة القيادة؟",
    description: "18 عام.",
  },
  {
    title:
      "هل من الممكن للطالب الحصول على رخصة قيادة من دون الحصول على حصص تدريبية ؟",
    description:
      "الحصول على رخصة قيادة يعتمد على أداء الطالب. بعض الأحيان يحتاج الطالب إلى حصص أقل من المسجلة والبعض الاخر يحتاج إلى حصص أكثر من المسجلة.",
  },
  {
    title: "ما هي النقطة العمياء ؟",
    description:
      "أثناء قيادة السيارة. ينبغي أن تتحرك عينيك بإستمرار ماسحة الطريق إلى الأمام ومن الجانب. تحقق من المرايا كل خمس ثواني أو نحو ذلك. عند استخدام المرايا هناك منطقة على كل جانب من جوانب السيارة عندها لن تتمكن من الرؤية. قد لا ترى الناس أو السيارات عندما يكون نظرك عند النقطة العمياء.",
  },
  {
    title: "ماهي الكلفة الكاملة لأستخراج رخصة القيادة في ادارة الترخيص?",
    description:
      "26.5 دينار اردني بدل فحص طبي ونظري وعملي. 32 دينار بدل اصدار رخصة لعشر سنوات.",
  },
  {
    title: "كم عدد الدروس العملي التي احتاجها لكي استطيع القيادة ؟",
    description:
      "هذه الموضوع يعتمد على الطالب بدرجة الأولى هو من يحدد بطريقة فهمه لتمارين المقدمة من المدرب المختص.",
  },
  {
    title: "كيف يتم فحص النظري في ادارة السير ؟",
    description:
      "يتم الفحص بواسطه الكمبيوتر حيث يختار الكمبيوتر اسئلة عشوائيه تبلغ حوالي 40 سؤال من بين حوالي 600 سؤال ويتم عرض الاسئله لكي تتم اجابتها ضمن زمن محدد",
  },
  {
    title: "ماهو فحص المستوى؟",
    description:
      "هو تقييم للمتدرب بتحديد الدروس من المدرب حسب قدرة المتدرب للسواقة.",
  },
  {
    title: "كم رسوم اصدار رخصة سوق بدل فاقد؟",
    description:
      "تقديم الخدمة باصدار قسيمة رخصة سوق جديدة حال فقدانها من قبل أي شخص حاصل على رخصة قيادة اردنية. <br /> <br /> • هوية الأحوال المدنية أوجواز سفر ساري المفعول. <br />  • شهادة تعيين للعسكريين. <br />  • صورة شخصية حديثة ملونة قياس (4×6) عدد (2).<br /> <br />  الرسوم 12.40 دينار",
  },
  {
    title: "ما هي أولويات المرور؟",
    description:
      "أولويات المرور هي القواعد التي تحدد حق الأسبقية للمركبات في الطريق، وتشمل الأولوية العامة للمرور في التقاطعات والدوارات وأولوية السيارات الطارئة مثل سيارات الإسعاف والإطفاء.",
  },
  {
    title: "ما هي الإشارات اليدوية في القيادة؟",
    description:
      "الإشارات اليدوية هي إشارات اليد التي تستخدمها السائقين للإشارة إلى اتجاههم المقبل أثناء القيادة، مثل إشارة اليد اليمنى للإشارة إلى الاتجاه اليميني والإشارة باليد اليسرى للإشارة إلى الاتجاه اليساري.",
  },
  {
    title: "كم يجب أن يكون مسافة الفرامل بين سيارتين في الطريق؟",
    description:
      "يجب أن يكون هناك مسافة آمنة بين السيارات لتجنب حوادث الاصطدام الخلفي. وعلى الرغم من أن هذه المسافة تختلف بناءً على سرعة السيارة وظروف الطريق، إلا أن الخطوط العريضة تشير إلى أنه يجب أن تكون المسافة بين السيارات حوالي 2-3 ثوانٍ في الظروف الجيدة و4-5 ثوانٍ في الظروف الرديئة.",
  },
  {
    title: "ما هو الفرق بين نظام الفرامل ABS والفرامل التقليدية؟",
    description:
      "يتيح نظام الفرامل ABS (نظام الفرامل المانعة للانغلاق) للسائقين الفرملة بطريقة آمنة وفعالة في حالة الطوارئ، حيث يقلل النظام من احتمالية انغلاق العجلات أثناء الفرملة ويمنع بالتالي فقدان السيطرة على السيارة.",
  },
  {
    title: "ما هي الطرق الأكثر أمانًا للقيادة في الظروف الجوية السيئة؟",
    description:
      "ينبغي للسائقين تجنب القيادة في الظروف الجوية السيئة إذا كان ذلك ممكنًا، ولكن إذا كان لا بد من القيادة، فيجب الانتباه إلى بعض الأمور. ينصح بتخفيض السرعة وزيادة المسافة بين السيارات، وضبط الإضاءة واستخدام المصابيح الضبابية إذا كان ذل",
  },
  {
    title: "كيفية التعامل مع المناورات في الطريق؟",
    description:
      "ينبغي للسائقين الانتباه إلى المناورات التي يقوم بها السائقون الآخرون في الطريق، وتجنب إجراء المناورات الخطرة والغير ضرورية. ينصح بتفادي المناورات الحادة والتغييرات السريعة في المسارات، والحفاظ على مسافة آمنة بين السيارات.",
  },
  {
    title: "ما هو الفرق بين المسار الأيسر والمسار الأيمن في الطريق؟",
    description:
      "المسار الأيسر هو المسار الذي يقع على الجانب الأيسر من الطريق ويتم استخدامه للسير في الاتجاه المعاكس لحركة السير العامة، أما المسار الأيمن فيستخدم للسير في نفس اتجاه حركة السير العامة. يتم تحديد المسارات بواسطة الخطوط المتقطعة والخطوط الصلبة على الطريق.",
  },
  {
    title: "كيفية التعامل مع الضباب أثناء القيادة؟",
    description:
      "ينصح بتخفيض السرعة وزيادة المسافة بين السيارات والقيادة ببطء عند القيادة في الضباب، كما يجب تفادي الاستخدام الزائد للمصابيح الأمامية، حيث يؤدي ذلك إلى تحسن الرؤية.",
  },
  {
    title: "كيفية التحكم في السرعة عند القيادة في الطرق الجبلية؟",
    description:
      "ينبغي للسائقين الانتباه إلى المنحدرات والمنعطفات والطرق الضيقة عند القيادة في الطرق الجبلية. ينصح بتخفيض السرعة قبل دخول المنحدرات والمنعطفات والحفاظ على سرعة مناسبة للظروف الطرقية. كم",
  },
  {
    title: "ما هي القواعد الأساسية للقيادة على الطرق السريعة؟",
    description:
      "تشمل القواعد الأساسية للقيادة على الطرق السريعة الحفاظ على مسافة آمنة بين السيارات، وتجنب المناورات الخطرة والتغييرات السريعة في المسارات، وتجنب القيادة بشكل غير مستقر أو عدم السيطرة على السيارة.",
  },
  {
    title: "كيف يمكن تحسين مهارات القيادة؟",
    description:
      "يمكن تحسين مهارات القيادة من خلال الحصول على التدريب والتعليم المناسبين، والممارسة المستمرة للقيادة في ظروف مختلفة، والانتباه إلى القواعد واللوائح المرورية، والحفاظ على مسافة آمنة بين السيارات، والتخلص من أي تشويش أو انشغالات قد تؤثر على الانتباه خلال القيادة.",
  },
  {
    title: "ما هي الأسباب الرئيسية للحوادث المرورية؟",
    description:
      "تشمل الأسباب الرئيسية للحوادث المرورية السرعة المفرطة، وعدم الانتباه والانشغال خلال القيادة، وتجاوز الإشارات الضوئية وعدم الامتثال للقواعد واللوائح المرورية، والقيادة تحت تأثير المخدرات أو الكحول.",
  },
];

export const Faq = () => {
  return (
    <section id={faq.id} className="md:scroll-mt-[62px] scroll-mt-[8px] container my-20">
      <div className="border border-gray-700/20 dark:border-gray-700/50 p-5 md:p-6 bg-slate-200/20 dark:bg-slate-600/20 rounded-lg divide-y divide-gray-700/50">
        <Typography as="h2" className="flex items-center gap-4 my-4">
          <svg
            className="w-8"
            fill="currentcolor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            version="1.1"
          >
            <path d="M576 256c0 0-1.984 0-128 0S320 384 320 384l0 64 128 0c0 0-1.984-64 64-64s64 64 64 64C502.016 448 448 576 448 576l128 0c0-56 64-64 64-64s64-8 64-128S576 256 576 256zM512 0C229.248 0 0 229.248 0 512c0 282.752 229.248 512 512 512 282.752 0 512-229.248 512-512C1024 229.248 794.752 0 512 0zM512 896c-212.096 0-384-171.904-384-384 0-212.096 171.904-384 384-384 212.096 0 384 171.904 384 384C896 724.096 724.096 896 512 896zM448 768l128 0 0-128L448 640 448 768z" />
          </svg>{" "}
          الاسئلة الشائعة
        </Typography>
        {faqList.map((item, index) => (
          <details className="py-5" key={index}>
            <summary className="cursor-pointer gap-4 flex items-start justify-between">
              <Typography as="p">
                {index + 1}
                {") "}
                {item.title}
              </Typography>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m6-6H6"
                ></path>
              </svg>
            </summary>
            <Typography as="p" className="mt-5 pl-6">
              {item.description}
            </Typography>
          </details>
        ))}
      </div>
    </section>
  );
};
