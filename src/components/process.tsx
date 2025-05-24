import React, { FC } from "react";
import Image from "next/image";
import SectionTitle from "./shared/section-title";

const Process = () => {
  return (
    <section className="w-full border-b border-border-secondary py-10xl flex flex-col space-y-7xl max-w-full-page border-x">
      <div className="w-full max-w-max-width-desktop mx-auto">
        <SectionTitle
          title="That's how it works"
          description="First we find the friction. Then we build a system that runs without you."
        />
      </div>
      <div className="flex max-w-max-width-desktop flex-col border border-border-secondary mx-auto w-full">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </section>
  );
};

const Item = () => {
  return (
    <div className="w-full flex border-b border-border-secondary gap-x-6xl">
      <div className="w-[144px] h-[144px] flex flex-col border-r border-border-secondary shrink-0">
        <div className="bg-[url(/patterns/slash.svg)] h-5xl border-border-secondary border-b"></div>
        <div className="w-full justify-center flex">
          <div className="h-7xl w-7xl flex justify-center items-center border-border-secondary border-x">
            <span className="text-text-primary text-display-sm leading-display-sm font-bold">
              01
            </span>
          </div>
        </div>
        <div className="bg-[url(/patterns/slash.svg)] h-5xl border-border-secondary border-t"></div>
      </div>
      <div className="w-full flex flex-col justify-center space-y-xs">
        <h3 className="text-text-primary text-lg leading-lg font-semibold">
          Discovery call
        </h3>
        <p className="text-text-tertiary text-md leading-md">
          Discuss pain-points of your business and find solutions.
        </p>
      </div>
      <div className="w-60 shrink-0 flex items-center justify-center border-l border-border-secondary">
        <Image
          src="/illustrations/trees.svg"
          alt="Trees"
          width={112}
          height={96}
        />
      </div>
    </div>
  );
};

export default Process;
