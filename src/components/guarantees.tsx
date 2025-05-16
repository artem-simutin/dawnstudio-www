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
import { Inbox01 } from "untitledui-js/react";

type Guarantee = {
  value: string;
  title: string;
  content: string;
};

const guarantees: Guarantee[] = [
  {
    value: "1",
    title: "Share team inboxes",
    content:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    value: "2",
    title: "Share team inboxes",
    content:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    value: "3",
    title: "Share team inboxes",
    content:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    value: "4",
    title: "Share team inboxes",
    content:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    value: "5",
    title: "Share team inboxes",
    content:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
];

const Guarantees = () => {
  const [openItem, setOpenItem] = useState("1");

  return (
    <section className="w-full border-b border-border-secondary py-9xl space-y-7xl flex flex-col">
      <div className="w-full mx-auto max-w-max-width-desktop">
        <SectionTitle
          subTitle="Features"
          title="Overflowing with useful features"
          description="Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups."
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
}

const Item: FC<ItemProps> = ({ onClick, content, title, value }) => {
  return (
    <AccordionItem
      value={value}
      onClick={onClick}
      className="cursor-pointer p-3xl border-b border-border-secondary"
    >
      <AccordionTrigger className="!p-0 mb-1">
        <div className="w-full flex gap-x-xl items-center">
          <div className="p-xs rounded-xs border border-border-secondary bg-background-secondary">
            <Inbox01 size="20px" className="text-foreground-brand-primary" />
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
