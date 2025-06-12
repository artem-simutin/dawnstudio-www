import CaseStudies from "@/components/case-studies";
import CTA from "@/components/cta";
import FAQ from "@/components/faq";
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
  title: "Dawn Studio | B2B SaaS From Idea to First Customers",
};

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center pt-20">
        <Hero />
        <SocialProof />
        <Services />
        <Process />
        <Team />
        <Testimonials />
        <Guarantees />
        <CaseStudies />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
