import FAQ from "@/components/root/faq";
import Hero from "@/components/root/Hero";
import HowWorks from "@/components/root/HowWorks";
import JobInterviewStress from "@/components/root/JobInterviewStress";
import Ready from "@/components/root/Ready";
import SuccessStories from "@/components/root/SuccessStories";

export default function Home() {
  return (
    <main className="flex flex-col min-h-full py-12 gap-16 px-6 sm:px-12 md:px-20">
      <Hero />
      <HowWorks />
      <JobInterviewStress />
      <SuccessStories />
      <Ready />
      <FAQ />
    </main>
  );
}

// https://hrk-boutique.s3.ap-south-1.amazonaws.com/InterroAI.png
