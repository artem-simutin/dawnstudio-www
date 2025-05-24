import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { ArrowRight } from "untitledui-js/react";
import { buttonVariants } from "./ui/button";
import Image from "next/image";
import SectionTitle from "./shared/section-title";

const Services = () => {
  return (
    <section className="w-full border-b border-border-secondary flex flex-col gap-y-9xl py-9xl max-w-full-page border-x">
      <div className="mx-auto w-full max-w-max-width-desktop">
        <SectionTitle
          title="What we offer"
          description="Automation systems that win back your time, grow revenue, and keep your operations moving."
        />
      </div>
      <div className="w-full mx-auto max-w-256">
        {/* card - row */}
        <div className="border border-border-secondary w-full flex h-96">
          <div className="w-full flex flex-col justify-center p-6xl space-y-4xl border-r border-border-secondary">
            <div className="w-full flex flex-col space-y-lg max-w-96">
              <h3 className="text-text-primary text-display-sm leading-display-sm font-semibold">
                Cold Email System
              </h3>
              <p className="text-text-tertiary text-md leading-md">
                Send highly personalized emails which cuts research times and
                increases reply rates at scale.
              </p>
            </div>
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "linkGray", size: "link" }),
                "w-min"
              )}
            >
              <span>Learn more</span>
              <ArrowRight size="20px" />
            </Link>
          </div>
          <div className="relative w-full overflow-hidden flex items-center justify-center bg-[url(/patterns/square-small.svg)] max-w-[440px]">
            <Image
              src="/illustrations/cold-email-system.svg"
              width={196}
              height={236}
              alt="Watch"
            />
          </div>
        </div>

        {/* separator */}
        <div className="w-full border-x border-border-secondary h-4xl" />

        {/* card - row */}
        <div className="border border-border-secondary w-full flex h-80">
          <div className="relative overflow-hidden border-r border-border-secondary flex items-center bg-[url(/patterns/square-small.svg)] w-[280px] shrink-0">
            <Image
              src="/illustrations/battery.svg"
              width={114}
              height={120}
              className="absolute left-[63px]"
              alt="Battery"
            />
          </div>
          <div className="w-full flex flex-col justify-center p-6xl space-y-4xl border-r border-border-secondary">
            <div className="w-full flex flex-col space-y-lg max-w-96">
              <h3 className="text-text-primary text-display-sm leading-display-sm font-semibold">
                Customized CRM System
              </h3>
              <p className="text-text-tertiary text-md leading-md">
                Add AI automations on top of the CRM you already use, saving
                time and making sure no lead gets missed.
              </p>
            </div>
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "linkGray", size: "link" }),
                "w-min"
              )}
            >
              <span>Learn more</span>
              <ArrowRight size="20px" />
            </Link>
          </div>
          <div className="relative overflow-hidden flex items-center justify-center bg-[url(/patterns/square-small.svg)] w-[280px] shrink-0">
            <Image
              src="/illustrations/tumbler.svg"
              width={191}
              height={109}
              alt="Tumbler"
            />
          </div>
        </div>

        {/* separator */}
        <div className="w-full border-x border-border-secondary h-4xl" />

        {/* card - row */}
        <div className="border border-border-secondary w-full flex h-80">
          <div className="relative w-full overflow-hidden border-r border-border-secondary flex items-center justify-center bg-[url(/patterns/square-small.svg)] max-w-[440px]">
            <Image
              src="/illustrations/ball-rolling.svg"
              width={241}
              height={256}
              alt="Ball rolling"
            />
          </div>
          <div className="w-full flex flex-col justify-center p-6xl space-y-4xl">
            <div className="w-full flex flex-col space-y-lg max-w-96">
              <h3 className="text-text-primary text-display-sm leading-display-sm font-semibold">
                Onboarding Systems
              </h3>
              <p className="text-text-tertiary text-md leading-md">
                Guides every customer automatically sending emails, reminders,
                and docs at the right time.
              </p>
            </div>
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "linkGray", size: "link" }),
                "w-min"
              )}
            >
              <span>Learn more</span>
              <ArrowRight size="20px" />
            </Link>
          </div>
        </div>

        {/* separator */}
        <div className="w-full border-x border-border-secondary h-4xl" />

        {/* card - row */}
        <div className="border border-border-secondary w-full flex h-80">
          <div className="w-full flex flex-col justify-center p-6xl space-y-4xl border-r border-border-secondary">
            <div className="w-full flex flex-col space-y-lg max-w-96">
              <h3 className="text-text-primary text-display-sm leading-display-sm font-semibold">
                Content Systems
              </h3>
              <p className="text-text-tertiary text-md leading-md">
                Create and share posts and emails without having to write or
                schedule them yourself.
              </p>
            </div>
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "linkGray", size: "link" }),
                "w-min"
              )}
            >
              <span>Learn more</span>
              <ArrowRight size="20px" />
            </Link>
          </div>
          <div className="relative w-full overflow-hidden flex items-center max-w-[440px]">
            <Image
              src="/illustrations/trees.svg"
              width={189}
              height={162}
              className="absolute left-[178px]"
              alt="Trees"
            />
            <div className="absolute w-full h-[110px] bottom-0 bg-gradient-to-b from-transparent to-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
