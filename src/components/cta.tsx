import React from "react";
import { buttonVariants } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import config from "@/config";

const CTA = () => {
  return (
    <section className="w-full py-9xl border-x max-w-full-page border-border-secondary">
      <div className="max-w-max-width-desktop mx-auto flex gap-x-7xl items-center justify-between px-container-padding-desktop">
        <div className="space-y-6xl flex flex-col max-w-120">
          <div className="space-y-3xl flex flex-col">
            <h2 className="text-display-lg leading-display-lg font-semibold text-text-primary">
              Let’s talk about your next big move
            </h2>
            <p className="text-xl leading-xl text-text-tertiary">
              Hop on a call with us to see how our services can accelerate your
              growth.
            </p>
          </div>
          <div className="flex flex-col space-y-xs">
            <Link
              href={config.calComLink}
              className={buttonVariants({
                variant: "primary",
                className: "w-min",
              })}
              target="_blank"
            >
              Schedule a call
            </Link>
            <span className="text-text-tertiary text-xs leading-xs">
              *It's free
            </span>
          </div>
        </div>
        <Image
          src="/illustrations/cta.svg"
          width={576}
          height={552}
          alt="Illustration"
        />
      </div>
    </section>
  );
};

export default CTA;
