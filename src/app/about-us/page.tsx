import OurValuesCard from "@/components/about-us/our-values-card";
import SidebarItem from "@/components/about-us/sidebar-item";
import TeamMemberAccordion from "@/components/about-us/team-member-accordion";
import WhatWeDoLink from "@/components/about-us/what-we-do-link";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button, buttonVariants } from "@/components/ui/button";
import config from "@/config";
import { Accordion } from "@radix-ui/react-accordion";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <main className="flex items-stretch pt-20 min-h-screen">
        <div className="grow min-h-screen bg-[url(/patterns/slash.svg)] border-r border-t border-border-secondary" />
        <div className="w-full max-w-max-width-desktop min-h-screen flex flex-col">
          <div className="border-b border-border-secondary h-7xl justify-between  flex items-center">
            <div className="max-w-140 tablet:pl-4xl pl-4 w-full">
              <p className="text-text-quaternary font-semibold text-sm">
                <span className="text-text-quaternary pr-[10px] tablet:pr-[15px]">
                  ///
                </span>
                <span className="text-text-quaternary pr-[10px] ">
                  Landing Page
                </span>
                <span className="text-text-quaternary pr-[10px] tablet:pr-[15px]">
                  //
                </span>
                <span className="text-text-quaternary">About Us</span>
              </p>
            </div>

            <div className="bg-[url(/patterns/slash.svg)] h-full  grow" />

            <p className="px-4xl text-sm shrink-0 hidden tablet:block">
              &quot;Everything stars with an idea&quot;
            </p>
          </div>
          <div className="flex h-full flex-col  desktop:flex-row">
            <div className="desktop:min-w-40 w-full flex-1 flex flex-row desktop:flex-col  border-r border-border-secondary ">
              <div className="border-b border-border-secondary h-14 hidden desktop:block" />
              <div className="h-14 text-text-secondary hidden text-md font-semibold desktop:flex items-center px-3xl border-b border-border-secondary">
                Content:
              </div>
              <SidebarItem href="/about-us#about" title="About us" />
              <SidebarItem href="/about-us#offers" title="Offers" />
              <SidebarItem href="/about-us#values" title="Values" />
              <SidebarItem href="/about-us#team" title="Team" />
              <div className="h-1.5 w-full bg-[url(/patterns/slash.svg)] hidden desktop:block border-b border-border-secondary" />
              <div className="hidden desktop:block w-full flex-1 bg-[url(/patterns/dot.svg)]" />
            </div>
            <div>
              <section
                id="about"
                className="desktop:py-8xl tablet:py-7xl py-6xl tablet:px-6 desktop:px-6xl px-4  flex flex-col relative tablet:gap-12 gap-8 border-b border-border-secondary border-dashed"
              >
                <div className="flex flex-col gap-6">
                  <h2 className="text-text-primary font-semibold desktop:text-display-lg text-display-sm tablet:text-display-md">
                    Why we started Dawn Studio
                  </h2>
                  <div className="flex flex-col gap-5">
                    {/* <p className="text-text-secondary pl-4 text-lg font-normal  border-l-2 border-border-secondary">
                      At <span className="font-medium">Dawn Studio</span>, we
                      believe every successful business begins with a spark — a
                      bold idea, a fresh perspective, a dream worth chasing.
                      We&apos;re here to turn that spark into something
                      powerful.
                    </p> */}
                    <p className="text-lg text-text-secondary">
                      Most founders fail because they optimize for perfection
                      instead of feedback. They spend 6 months building features
                      nobody asked for while their competitors ship, learn, and
                      iterate.After years of building products, we've developed
                      a system that allows us to ship products fast. We're not
                      reselling AI outputs (as you might think) - we built
                      systems around AI that allow us to ship fast without
                      compromising future scalability.
                    </p>
                    {/* <p className="text-lg text-text-secondary">
                      We believe every successful business begins with a spark —
                      a bold idea, a fresh perspective, a dream worth chasing.
                      We&apos;re here to turn that spark into something
                      powerful.
                    </p> */}
                  </div>
                </div>
                <div className="space-y-5">
                  <h3 className="text-display-xs tablet:text-display-sm font-semibold text-text-primary">
                    Vision
                  </h3>
                  <p className="text-lg text-text-secondary">
                    To become the go-to partner for ambitious B2B founders who
                    choose action over endless planning. Every founder deserves
                    to see their idea come to life quickly and get it in front
                    of customers who can validate it.
                  </p>
                </div>
                <div className="space-y-5">
                  <h3 className="text-display-xs tablet:text-display-sm font-semibold text-text-primary">
                    History
                  </h3>
                  <p className="text-lg text-text-secondary">
                    Over the past 5+ years, we've been in the trenches with
                    founders, building software and launching products. We've
                    shipped over 10 products during this time, learning what
                    works, what doesn't, and most importantly - what founders
                    actually need to succeed. Each launch taught us something
                    new about the gap between what founders think they need and
                    what actually moves the needle. This experience shaped our
                    3-week process and our obsession with getting products to
                    market fast.
                  </p>
                </div>
                <div className="absolute -bottom-1.5 -right-1.5 z-10">
                  <Rhombus />
                </div>
              </section>

              <section
                id="offers"
                className="desktop:py-6xl tablet:py-5xl py-4xl tablet:px-6 desktop:px-6xl px-4 flex flex-col relative tablet:gap-8 gap-6 border-b border-border-secondary border-dashed"
              >
                <div className="flex flex-col gap-6">
                  <h2 className="text-text-primary font-semibold desktop:text-display-lg text-display-sm tablet:text-display-md">
                    What We Do
                  </h2>
                  <p className="text-lg text-text-secondary">
                    We help B2B founders skip the endless planning phase and get
                    their ideas in front of real customers within 3 weeks, so
                    they can start learning what actually works instead of
                    guessing what might work.
                  </p>
                </div>
                <div className="space-y-1">
                  <WhatWeDoLink
                    href="/"
                    title="MVP Development"
                    description="We develop you minimal viable product in 3 weeks to start gathering feedback from your customers."
                  />
                  <WhatWeDoLink
                    href="/"
                    title="Ongoing Development"
                    description="We go beyond MVP stages to support ongoing needs and keep up with the growth."
                  />
                  <WhatWeDoLink
                    href="/"
                    title="Branding Design"
                    description="We design you a strong recognizable brand tailored to your product."
                  />
                </div>
                <div className="absolute -bottom-1.5 -right-1.5 z-10">
                  <Rhombus />
                </div>
              </section>

              <section
                id="values"
                className="desktop:py-6xl tablet:py-5xl py-4xl tablet:px-6 desktop:px-6xl px-4 flex flex-col relative tablet:gap-8 gap-6 border-b border-border-secondary border-dashed"
              >
                <div className="flex flex-col gap-6">
                  <h2 className="text-text-primary font-semibold desktop:text-display-lg text-display-sm tablet:text-display-md">
                    Our Values
                  </h2>
                  <p className="text-text-secondary pl-4 text-lg font-normal  border-l-2 border-border-secondary">
                    The core principles behind our proven process. These values
                    explain why we limit our clients, why we ship fast, and why
                    founders choose to work with us again and again.
                  </p>
                </div>
                <div className="gap-4 grid grid-cols-1 tablet:grid-cols-2">
                  <OurValuesCard
                    title="Involvement"
                    description="Product first. We build what users need, not what looks good in presentations."
                  />
                  <OurValuesCard
                    title="Transparency"
                    description="We have nothing to hide. Open process, clear communication, no surprises."
                  />
                  <OurValuesCard
                    title="Responsibility"
                    description="Only actions matter. We deliver on commitments and let results speak."
                  />
                  <OurValuesCard
                    title="Innovation"
                    description="Everything can be automated. We use AI and modern tools to build faster."
                  />
                  <OurValuesCard
                    title="Efficiency"
                    description="Time is money. We skip unnecessary meetings and focus on shipping."
                  />
                  <OurValuesCard
                    title="Accessibility"
                    description="No need to spend millions. Great software shouldn't require massive budgets."
                  />
                </div>
                <div className="absolute -bottom-1.5 -right-1.5 z-10">
                  <Rhombus />
                </div>
              </section>
              <section
                id="team"
                className="desktop:py-6xl tablet:py-5xl py-4xl tablet:px-6 desktop:px-6xl px-4 flex flex-col tablet:gap-8 gap-6 border-b border-border-secondary border-dashed"
              >
                <div className="flex flex-col gap-6">
                  <h2 className="text-text-primary font-semibold desktop:text-display-lg text-display-sm tablet:text-display-md">
                    Our Team
                  </h2>
                  <p className="text-text-secondary pl-4 text-lg font-normal  border-l-2 border-border-secondary">
                    The people who'll actually build your product. We're
                    founders who've launched our own stuff and learned the hard
                    way what works and what doesn't
                  </p>
                </div>

                <Accordion
                  type="multiple"
                  className="flex flex-col gap-6  tablet:gap-8"
                >
                  <TeamMemberAccordion
                    value="kristian-veter"
                    name="Kristian Veter"
                    position="Business Development Lead"
                    imageUrl="/people/kristian-veter.jpg"
                    description="Former co-founder of Opendoor. Early staff at Spotify and Clearbit."
                    socialMediaLinks={[
                      {
                        icon: "/social-media-icons/x.svg",
                        href: "https://x.com/kristianvtr",
                      },
                      {
                        icon: "/social-media-icons/linkedin.svg",
                        href: "https://www.linkedin.com/in/kristian-veter/",
                      },
                    ]}
                  />
                  <TeamMemberAccordion
                    value="artem-simutin"
                    name="Artem Simutin"
                    position="Lead Developer"
                    imageUrl="/people/artem-simutin.jpeg"
                    description="Former co-founder of Opendoor. Early staff at Spotify and Clearbit."
                    socialMediaLinks={[
                      {
                        icon: "/social-media-icons/x.svg",
                        href: "https://x.com/artemsimut",
                      },
                      {
                        icon: "/social-media-icons/linkedin.svg",
                        href: "https://www.linkedin.com/in/artem-simutin/",
                      },
                    ]}
                  />
                  <TeamMemberAccordion
                    value="denis-simutin"
                    name="Denis Simutin"
                    position="Lead Designer"
                    imageUrl="/people/denis-simutin.jpg"
                    description="Former co-founder of Opendoor. Early staff at Spotify and Clearbit."
                    socialMediaLinks={[
                      {
                        icon: "/social-media-icons/x.svg",
                        href: "https://x.com",
                      },
                    ]}
                  />
                </Accordion>
              </section>

              <section className="desktop:py-6xl tablet:py-5xl py-4xl tablet:px-6 desktop:px-6xl px-4 flex flex-col tablet:gap-8 gap-6 ">
                <p className="text-text-secondary text-lg ">
                  Stop planning and start building. While your competitors spend
                  months in meetings, you could be collecting real customer
                  feedback and iterating based on actual market data.
                </p>

                <p className="text-text-secondary text-lg font-semibold ">
                  Ready to Turn Your Idea Into a Real Product?
                </p>
                <Link
                  href={config.calComLink}
                  className={buttonVariants({
                    variant: "primary",
                    className: "font-semibold max-w-10xl",
                  })}
                  target="_blank"
                >
                  Book a call
                </Link>
              </section>
            </div>
          </div>
        </div>
        <div className="grow min-h-screen bg-[url(/patterns/slash.svg)] border-l border-t border-border-secondary" />
      </main>
      <Footer />
    </div>
  );
};

const Rhombus = () => {
  return (
    <div className="h-3 w-3 bg-background-primary rotate-45 border border-border-secondary" />
  );
};

export default AboutUs;
