import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { ArrowRight } from "untitledui-js/react";
import { buttonVariants } from "./ui/button";
import Image from "next/image";

const Services = () => {
  return (
    <section className="w-full border border-border-secondary flex flex-col gap-y-9xl py-9xl">
      <div className="w-full max-w-max-width-desktop mx-auto flex-col flex space-y-3xl">
        <div className="w-full flex flex-col space-y-lg">
          <span className="text-text-brand-secondary text-md leading-md w-full text-center">
            Services
          </span>
          <h2 className="text-text-primary text-display-md leading-display-md font-semibold text-center w-full">
            What we offer
          </h2>
        </div>
        <p className="text-text-tertiary text-lg leading-lg w-full text-center">
          Powerful package to elevate your business to the new level.
        </p>
      </div>
      <div className="w-full mx-auto max-w-max-width-desktop px-container-padding-desktop">
        {/* card - row */}
        <div className="border border-border-secondary w-full flex h-96">
          <div className="w-full flex flex-col justify-end p-6xl space-y-4xl border-r border-border-secondary">
            <div className="w-full flex flex-col space-y-lg">
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
          <div className="relative w-full overflow-hidden">
            <Image
              src="/illustrations/phone.svg"
              width={769}
              height={493}
              className="absolute top-[77px] right-[77px]"
              alt="Phone"
            />
            <div className="absolute w-full h-[110px] bottom-0 bg-gradient-to-b from-transparent to-white" />
          </div>
        </div>

        {/* separator */}
        <div className="w-full border-x border-border-secondary h-4xl" />

        {/* card - row */}
        <div className="border border-border-secondary w-full flex h-80">
          <div className="relative w-full overflow-hidden border-r border-border-secondary">
            <Image
              src="/illustrations/trees.svg"
              width={189}
              height={162}
              className="absolute top-[87px] left-[54px]"
              alt="Trees"
            />
            <div className="absolute w-full h-[110px] bottom-0 bg-gradient-to-b from-transparent to-white" />
          </div>
          <div className="w-full flex flex-col justify-end p-6xl space-y-4xl border-r border-border-secondary">
            <div className="w-full flex flex-col space-y-lg">
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
          <div className="relative w-full overflow-hidden">
            <Image
              src="/illustrations/trees.svg"
              width={189}
              height={162}
              className="absolute top-[87px] left-[54px]"
              alt="Trees"
            />
            <div className="absolute w-full h-[110px] bottom-0 bg-gradient-to-b from-transparent to-white" />
          </div>
        </div>

        {/* separator */}
        <div className="w-full border-x border-border-secondary h-4xl" />

        {/* card - row */}
        <div className="border border-border-secondary w-full flex h-80">
          <div className="relative w-full overflow-hidden border-r border-border-secondary max-w-120">
            <Image
              src="/illustrations/phone.svg"
              width={769}
              height={493}
              className="absolute top-[77px] right-[77px]"
              alt="Phone"
            />
            <div className="absolute w-full h-[110px] bottom-0 bg-gradient-to-b from-transparent to-white" />
          </div>
          <div className="w-full flex flex-col justify-end p-6xl space-y-4xl">
            <div className="w-full flex flex-col space-y-lg">
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
        </div>

        {/* separator */}
        <div className="w-full border-x border-border-secondary h-4xl" />

        {/* card - row */}
        <div className="border border-border-secondary w-full flex h-80">
          <div className="w-full flex flex-col justify-end p-6xl space-y-4xl border-r border-border-secondary max-w-120">
            <div className="w-full flex flex-col space-y-lg">
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
          <div className="relative w-full overflow-hidden flex items-center">
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
