import CaseStudies from "@/components/case-studies";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Guarantees from "@/components/guarantees";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Process from "@/components/process";
import SectionDivider from "@/components/section-divider";
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
        <SectionDivider
          leftText="[01]    Introduction"
          rightText="///  GETTING  STARTED"
        />
        <Services />
        <SectionDivider
          leftText="[02]    Our Services"
          rightText="///  GETTING  STARTED"
        />
        <Process />
        <SectionDivider
          leftText="[03]    Customers"
          rightText="///  Our Clients"
        />
        <Testimonials />
        <SectionDivider
          leftText="[04]    Guarantees"
          rightText="///  Our Promise"
        />
        <Guarantees />
        <SectionDivider
          leftText="[05]    Case Studies"
          rightText="///  Documenting success"
        />
        <CaseStudies />
        <SectionDivider
          leftText="[06]    Our Team"
          rightText="///  Behind the scenes"
        />
        <Team />
        <SectionDivider leftText="[06]    CTA" rightText="///  What's next" />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
