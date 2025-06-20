"use client";

import React, { FC } from "react";
import SectionTitle from "./shared/section-title";
import Image from "next/image";

const guarantees: ItemCardProps[] = [
  {
    title: "Complete Satisfaction",
    description:
      "If you're not completely satisfied with our service, we'll refund 100% of your investment.",
    tags: ["100% Satisfaction", "Money back"],
  },
  {
    title: "On-Time Delivery",
    description:
      "If we miss the deadline, you get 50% back and we keep working for free until it's done.",
    tags: ["50% Refund", "Free work"],
  },
  {
    title: "Post-Launch Included",
    description:
      "One week of bug fixes and technical support included with every project. ",
    tags: ["1 Week Support", "Bug fixes"],
  },
];

const NewGuarantees = () => {
  return (
    <section className="w-full">
      <div className="w-full flex flex-col mx-auto max-w-full-page desktop:border-x border-b border-border-secondary">
        <div className="w-full flex mx-auto max-w-max-width-desktop">
          <SectionTitle
            subTitle="Guarantees"
            title="It's our promises"
            description="We believe in the quality of our work — so much so that we back it with rock-solid guarantees. If you're not satisfied, neither are we."
            className="border-none"
          />
          <div className="w-20 bg-[url(/patterns/slash.svg)]"></div>
        </div>
      </div>
      <div className="w-full flex max-w-full-page bg-[url(/patterns/square-small.svg)] desktop:bg-[url(/patterns/dot.svg)] px-container-padding-mobile py-6xl desktop:px-4xl desktop:py-8xl desktop:border-x border-border-secondary mx-auto">
        <div className="flex gap-y-lg gap-x-4xl w-full max-w-max-width-desktop mx-auto flex-col desktop:flex-row">
          {guarantees.map((g) => (
            <ItemCard key={`guarantee-card-${g.title}`} {...g} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ItemCardProps {
  title: string;
  description: string;
  tags: string[];
}

const ItemCard: FC<ItemCardProps> = (props) => {
  return (
    <div className="rounded-xs min-w-[320px] flex flex-col shadow-xs border border-border-secondary w-full bg-background-primary">
      <div className="w-full h-[180px] bg-[url(/patterns/square-small.svg)] flex items-center justify-center border-b border-solid desktop:border-dashed border-border-secondary">
        <Image
          src="/illustrations/tumbler.svg"
          width={191}
          height={109}
          alt="Tumbler"
        />
      </div>
      <div className="flex space-y-xl desktop:space-y-4xl p-xl desktop:p-4xl flex-col border-b border-border-tertiary">
        <div className="w-full flex flex-col space-y-md">
          <div className="flex gap-x-md items-center">
            <Image
              src="/illustrations/verified-tick-green.svg"
              width={18}
              height={18}
              alt="Verified tick"
            />
            <h3 className="text-text-primary text-display-xs leading-display-xs font-semibold">
              {props.title}
            </h3>
          </div>
          <p className="text-text-tertiary text-md leading-md">
            {props.description}
          </p>
        </div>
        <div className="flex gap-x-sm">
          {props.tags.map((t) => (
            <div
              key={`tag-${t}`}
              className="px-sm py-xxs border border-border-primary text-xs leading-xs rounded-sm bg-background-primary shadow-xs text-text-secondary"
            >
              {t}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-1.5 bg-[url(/patterns/slash-darker.svg)]"></div>
    </div>
  );
};

export default NewGuarantees;
