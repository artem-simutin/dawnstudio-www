"use client";

import React, { FC, useState } from "react";
import SectionTitle from "./shared/section-title";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import {
  AnnotationInfo,
  Feather,
  HeartHand,
  Inbox01,
  Speedometer03,
  UntitledIcon,
  Wallet03,
} from "untitledui-js/react";

type Guarantee = {
  value: string;
  title: string;
  content: string;
  icon: UntitledIcon;
};

const guarantees: Guarantee[] = [
  {
    value: "1",
    title: "ROI Guarantee",
    content: "If you don’t get 2× ROI, you get 100% of your money back.",
    icon: Wallet03,
  },
  {
    value: "2",
    title: "Fast Delivery Guarantee",
    content:
      "Your first system goes live in 7–14 days - or you get a discount.",
    icon: Speedometer03,
  },
  {
    value: "3",
    title: "Full Ownership Guarantee",
    content:
      "All accounts and tools are set up under your name. You keep everything, always.",
    icon: HeartHand,
  },
  {
    value: "4",
    title: "No Ghosting Guarantees",
    content:
      "You get 30 days of free support to make sure everything works smoothly.",
    icon: AnnotationInfo,
  },
  {
    value: "5",
    title: "No Lock-In",
    content: "No contracts. No commitments. Cancel anytime - no hard feelings.",
    icon: Feather,
  },
];

const Guarantees = () => {
  const [openItem, setOpenItem] = useState("1");

  return (
    <section className="w-full border-b border-border-secondary py-9xl space-y-7xl flex flex-col max-w-full-page border-x">
      <div className="w-full mx-auto max-w-max-width-desktop">
        <SectionTitle
          title="Our Promises"
          description="Just real guarantees that protect your time, money, and trust."
        />
      </div>
      <div className="w-full max-w-max-width-desktop border border-border-secondary mx-auto flex">
        <div className="flex flex-col max-w-140 w-full border-r border-border-secondary">
          <Accordion type="single" value={openItem} onValueChange={setOpenItem}>
            {guarantees.map((g) => (
              <Item
                key={`guarantee-accordion-item-${g.value}`}
                value={g.value}
                title={g.title}
                content={g.content}
                icon={g.icon}
                onClick={() => {
                  setOpenItem(g.value);
                }}
              />
            ))}
          </Accordion>
        </div>
        <div className="w-full flex items-center justify-center">
          <Image
            src="/illustrations/guarantees.svg"
            alt="Illustration"
            width={526}
            height={320}
          />
        </div>
      </div>
    </section>
  );
};

interface ItemProps {
  value: string;
  onClick?: () => void;
  title: string;
  content: string;
  icon: UntitledIcon;
}

const Item: FC<ItemProps> = ({ onClick, content, title, value, icon }) => {
  const Icon = icon;
  return (
    <AccordionItem
      value={value}
      onClick={onClick}
      className="cursor-pointer p-3xl border-b border-border-secondary"
    >
      <AccordionTrigger className="!p-0 mb-1 cursor-pointer">
        <div className="w-full flex gap-x-xl items-center">
          <div className="p-xs rounded-xs border border-border-secondary bg-background-secondary">
            <Icon size="20px" className="text-foreground-brand-primary" />
          </div>
          <span className="text-text-primary font-semibold text-lg leading-lg">
            {title}
          </span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="ml-11 text-md leading-md font-normal text-text-tertiary mr-[84px]">
        {content}
      </AccordionContent>
    </AccordionItem>
  );
};

export default Guarantees;
