"use client";
import React, { FC, useState } from "react";
import SectionTitle from "./shared/section-title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import Image from "next/image";
import { Code01, UntitledIcon } from "untitledui-js/react";

const items: ItemProps[] = [
  {
    value: "1",
    title: "How can you build an MVP in just 3 weeks when others take months?",
    content:
      "We focus on one core feature and leverage modern software development approaches, including AI-assisted development. While others get stuck in endless planning cycles, we start building immediately and iterate based on real feedback.",
    icon: Code01,
  },
  {
    value: "2",
    title: "Can you build any type of B2B SaaS?",
    content:
      "We've worked across many different industries, but we specialize in B2B SaaS applications with AI integrations. During our discovery call, we'll honestly tell you if your idea is a good fit for our 3-week process and help you strip away extra features to focus on one core solution.",
    icon: Code01,
  },
  {
    value: "3",
    title: "How do you limit to only 5 clients at a time?",
    content:
      "We deliberately keep our concurrent client limit to 5 to ensure each founder gets sufficient attention to detail. When we're at capacity, new founders join our waitlist.",
    icon: Code01,
  },
  {
    value: "4",
    title:
      "How is this different from hiring a traditional development agency?",
    content:
      "Traditional agencies focus on extensive documentation, preparation, and planning phases. While this might seem thorough, our focus is helping you launch to customers and iterate as fast as possible based on real market feedback.",
    icon: Code01,
  },
  {
    value: "5",
    title: "How involved do I need to be during the 3-week process?",
    content:
      "About 30 minutes maximum every other day for feedback on demo videos, plus weekly strategy check-ins. We handle the heavy lifting while keeping you in the loop on all major decisions.",
    icon: Code01,
  },
];

const FAQ = () => {
  const [openItem, setOpenItem] = useState("1");
  const currentOpenItemIndex = items.findIndex((i) => i.value === openItem);
  return (
    <section className="w-full flex flex-col">
      <div className="mx-auto desktop:border-x border-border-secondary flex flex-col w-full max-w-full-page">
        <SectionTitle
          subTitle="FAQ"
          title="Have Questions?"
          description="Get quick answers to common questions about our services, process, and how we work with businesses like yours."
        />
      </div>
      <div className="w-full py-6xl px-container-padding-mobile tablet:py-7xl tablet:px-container-padding-tablet desktop:py-7xl desktop:px-4xl bg-[url(/patterns/square-small.svg)] desktop:bg-[url(/patterns/dot.svg)] max-w-full-page mx-auto desktop:border-x border-b border-border-secondary">
        <div className="w-full max-w-max-width-desktop flex gap-x-xl mx-auto">
          <div className="flex flex-col tablet:max-w-full desktop:max-w-140 w-full">
            <Accordion
              type="single"
              value={openItem}
              onValueChange={setOpenItem}
              className="w-full flex space-y-xl flex-col"
            >
              {items.map((i) => (
                <Item
                  key={`guarantee-accordion-item-${i.value}`}
                  value={i.value}
                  title={i.title}
                  content={i.content}
                  icon={i.icon}
                  onClick={() => {
                    setOpenItem(i.value);
                  }}
                />
              ))}
            </Accordion>
          </div>
          <div className="w-full hidden items-center justify-center bg-background-primary border border-border-secondary shadow-xs relative bg-[url(/patterns/square-small.svg)] rounded-xs desktop:flex">
            <Image
              src="/illustrations/guarantees.svg"
              alt="Illustration"
              width={526}
              height={320}
            />
            <div className="absolute top-8 left-8 bg-background-primary rounded-sm shadow-xs py-xxs px-md flex items-center gap-x-sm border border-border-primary">
              <div className="rounded-full w-2 h-2 bg-utility-success-500"></div>
              <span className="text-sm leading-sm font-medium">
                {currentOpenItemIndex + 1}/{items.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ItemProps {
  value: string;
  title: string;
  content: string;
  icon: UntitledIcon;
  onClick?: () => void;
}

const Item: FC<ItemProps> = ({ onClick, content, title, value, icon }) => {
  const Icon = icon;
  return (
    <AccordionItem
      value={value}
      onClick={onClick}
      className="cursor-pointer border border-border-secondary bg-background-primary rounded-xs shadow-xs"
    >
      <AccordionTrigger className="!p-3xl cursor-pointer rounded-none">
        <div className="w-full flex gap-x-xl items-center">
          <div className="p-xs rounded-xs border border-border-secondary bg-background-primary shadow-xs">
            <Icon size="20px" className="text-text-primary" />
          </div>
          <span className="text-text-primary text-lg leading-lg font-medium">
            {title}
          </span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="text-md leading-md font-normal text-text-tertiary !p-3xl border-t border-dashed border-border-secondary ">
        {content}
      </AccordionContent>
      <div className="w-full h-1.5 bg-[url(/patterns/slash-darker.svg)] border-t border-border-tertiary"></div>
    </AccordionItem>
  );
};

export default FAQ;
