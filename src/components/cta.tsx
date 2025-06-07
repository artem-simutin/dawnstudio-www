import React from "react";
import { buttonVariants } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import config from "@/config";
import { Code01 } from "untitledui-js/react";
import { Colors } from "untitledui-js/react";

const CTA = () => {
  return (
    <section className="w-full mx-auto flex max-w-full-page border-x border-border-secondary bg-[url(/patterns/slash.svg)]">
      <div className="max-w-max-width-desktop mx-auto flex bg-background-primary border-r border-dashed border-border-secondary w-full">
        <div className="space-y-6xl flex flex-col py-8xl px-xl border-r border-dashed border-border-secondary w-full">
          <div className="space-y-xl flex flex-col w-full">
            <h2 className="text-display-lg leading-display-lg font-semibold text-text-primary">
              Start your business today
            </h2>
            <p className="text-xl leading-xl text-text-tertiary">
              Join us for a call to talk about our upcoming project.
            </p>
          </div>
          <div className="flex flex-col space-y-xs">
            <Link
              href={config.calComLink}
              className={buttonVariants({
                variant: "primary",
                size: "xl",
                className: "w-min",
              })}
              target="_blank"
            >
              Book a call
              <Code01 size={20} />
            </Link>
            <span className="text-text-quaternary text-xs leading-xs">
              *It&apos;s free
            </span>
          </div>
        </div>
        <div className="max-w-[560px] flex items-center justify-center w-full relative bg-[url(/patterns/square-small.svg)]">
          <Image
            src="/illustrations/card.svg"
            width={360}
            height={203}
            alt="Card"
            className="w-[360px] h-[203px]"
          />
          <div className="absolute top-6 right-6 flex gap-x-xl text-utility-gray-100">
            <Colors size={24} />
            <Colors size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
