import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { ArrowRight, Code01 } from "untitledui-js/react";
import { buttonVariants } from "./ui/button";
import Image from "next/image";
import SectionTitle from "./shared/section-title";
import { Drop } from "untitledui-js/react";

const Services = () => {
  return (
    <section className="w-full border-b border-border-secondary flex flex-col gap-y-9xl max-w-full-page border-x">
      <SectionTitle
        subTitle="Services"
        title="What we offer"
        description="Automation systems that win back your time, grow revenue, and keep your operations moving."
      />
      <div className="w-full mx-auto max-w-256">
        {/* card - row */}
        <div className="border border-border-secondary w-full flex min-h-80">
          <div className="w-full flex flex-col justify-center p-6xl gap-y-4xl border-r border-dashed border-border-secondary relative">
            <div className="w-full flex flex-col space-y-lg max-w-96">
              <div className="flex gap-x-lg items-center">
                <div className="rounded-xs border border-border-primary w-4xl h-4xl flex justify-center items-center shadow-xs">
                  <Image
                    src="/products/github.svg"
                    width={24}
                    height={24}
                    alt="Github"
                  />
                </div>
                <h3 className="text-text-primary text-display-sm leading-display-sm font-semibold">
                  MVP development
                </h3>
              </div>

              <p className="text-text-tertiary text-md leading-md">
                We develop you minimal viable product in 3 weeks to start
                gathering feedback from your customers.
              </p>
            </div>
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "linkGray", size: "link" }),
                "w-min",
              )}
            >
              <span>Learn more</span>
              <ArrowRight size="20px" />
            </Link>

            <Code01
              size={20}
              className="absolute top-6 right-6 text-utility-gray-100"
            />
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
        <div className="w-full border-x border-dashed border-border-secondary h-4xl bg-[url(/patterns/slash.svg)]" />

        {/* card - row */}
        <div className="border border-border-secondary w-full flex h-80">
          <div className="relative overflow-hidden border-r border-dashed border-border-secondary flex items-center bg-[url(/patterns/square-small.svg)] w-[280px] shrink-0">
            <Image
              src="/illustrations/battery.svg"
              width={114}
              height={120}
              className="absolute left-[63px]"
              alt="Battery"
            />
          </div>
          <div className="w-full flex flex-col justify-center p-6xl space-y-4xl border-r border-dashed border-border-secondary">
            <div className="w-full flex flex-col space-y-lg max-w-96">
              <div className="flex gap-x-lg items-center">
                <div className="rounded-xs border border-border-primary w-4xl h-4xl flex justify-center items-center shadow-xs">
                  <Image
                    src="/products/react.svg"
                    width={24}
                    height={24}
                    alt="React"
                  />
                </div>
                <h3 className="text-text-primary text-display-sm leading-display-sm font-semibold">
                  Ongoing development
                </h3>
              </div>

              <p className="text-text-tertiary text-md leading-md">
                We go beyond MVP stages to support ongoing needs and keep up
                with the growth.
              </p>
            </div>
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "linkGray", size: "link" }),
                "w-min",
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
        <div className="w-full border-x border-dashed border-border-secondary h-4xl bg-[url(/patterns/slash.svg)]" />

        {/* card - row */}
        <div className="border border-border-secondary w-full flex h-80">
          <div className="relative w-full overflow-hidden border-r border-dashed border-border-secondary flex items-center justify-center bg-[url(/patterns/square-small.svg)] max-w-[440px]">
            <Image
              src="/illustrations/ball-rolling.svg"
              width={241}
              height={256}
              alt="Ball rolling"
            />
          </div>
          <div className="w-full flex flex-col justify-center p-6xl gap-y-4xl relative">
            <div className="w-full flex flex-col space-y-lg max-w-96">
              <div className="gap-x-lg flex items-center">
                <div className="rounded-xs border border-border-primary w-4xl h-4xl flex justify-center items-center shadow-xs">
                  <Image
                    src="/products/figma.svg"
                    width={24}
                    height={24}
                    alt="Figma"
                  />
                </div>
                <h3 className="text-text-primary text-display-sm leading-display-sm font-semibold">
                  Branding design
                </h3>
              </div>
              <p className="text-text-tertiary text-md leading-md">
                We help you design a strong recognizable brand tailored to your
              </p>
            </div>
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "linkGray", size: "link" }),
                "w-min",
              )}
            >
              <span>Learn more</span>
              <ArrowRight size="20px" />
            </Link>
            <Drop
              size={20}
              className="absolute top-6 right-6 text-utility-gray-100"
            />
          </div>
        </div>

        {/* separator */}
        <div className="w-full border-x border-dashed border-border-secondary h-4xl bg-[url(/patterns/slash.svg)]" />

        {/* card - row */}
        <div className="border-x border-t border-border-secondary w-full flex h-80">
          <div className="w-full flex flex-col justify-center p-6xl space-y-4xl border-r border-border-secondary">
            <div className="w-full flex flex-col space-y-lg max-w-96">
              <div className="flex items-center gap-x-lg">
                <div className="rounded-xs border border-border-primary w-4xl h-4xl flex justify-center items-center shadow-xs">
                  <Image
                    src="/products/google.svg"
                    width={24}
                    height={24}
                    alt="Google"
                  />
                </div>
                <h3 className="text-text-primary text-display-sm leading-display-sm font-semibold">
                  Market research
                </h3>
              </div>
              <p className="text-text-tertiary text-md leading-md">
                We partner with market research company to help you understand
                your product’s market fit.
              </p>
            </div>
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "linkGray", size: "link" }),
                "w-min",
              )}
            >
              <span>Learn more</span>
              <ArrowRight size="20px" />
            </Link>
          </div>
          <div className="relative w-full overflow-hidden flex items-center max-w-[440px] bg-[url(/patterns/square-small.svg)]">
            <Image
              src="/illustrations/trees.svg"
              width={189}
              height={162}
              className="absolute left-[98px]"
              alt="Trees"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
