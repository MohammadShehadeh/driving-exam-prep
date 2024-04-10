import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { TheoreticalExam } from "@/components/TheoreticalExam/TheoreticalExam";

export default function Home() {
  return (
    <>
      <Hero />
      <TheoreticalExam />
      <Faq />
    </>
  );
}
