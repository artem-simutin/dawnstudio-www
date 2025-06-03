import CaseStudies from "@/components/case-studies";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Guarantees from "@/components/guarantees";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Process from "@/components/process";
import Services from "@/components/services";
import SocialProof from "@/components/social-proof";
import Team from "@/components/team";
import Testimonials from "@/components/testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dawn Studio | AI Automation Agency",
};

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center">
        <Hero />
        <SocialProof />
        <Services />
        <Process />
        <Team />
        <Testimonials />
        <Guarantees />
        <CaseStudies />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
