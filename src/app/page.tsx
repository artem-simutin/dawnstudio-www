import CaseStudies from "@/components/case-studies";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Guarantees from "@/components/guarantees";
import Services from "@/components/services";
import SocialProof from "@/components/social-proof";
import Team from "@/components/team";
import Testimonials from "@/components/testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main>
        <SocialProof />
        <Services />
        <Testimonials />
        <Guarantees />
        <CaseStudies />
        <Team />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
