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
    title: "Share team inboxes",
    content:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    icon: Code01,
  },
  {
    value: "2",
    title: "Share team inboxes",
    content:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    icon: Code01,
  },
  {
    value: "3",
    title: "Share team inboxes",
    content:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    icon: Code01,
  },
  {
    value: "4",
    title: "Share team inboxes",
    content:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    icon: Code01,
  },
  {
    value: "5",
    title: "Share team inboxes",
    content:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    icon: Code01,
  },
];

const FAQ = () => {
  const [openItem, setOpenItem] = useState("1");
  const currentOpenItemIndex = items.findIndex((i) => i.value === openItem);
  return (
    <section className="w-full flex flex-col">
      <div className="mx-auto border-x border-border-secondary flex flex-col w-full max-w-full-page">
        <SectionTitle
          subTitle="FAQ"
          title="Have Questions?"
          description="Get quick answers to common questions about our services, process, and how we work with businesses like yours."
        />
      </div>
      <div className="w-full px-4xl bg-[url(/patterns/dot.svg)] max-w-full-page mx-auto border-x border-border-secondary border-b border-border-secondary">
        <div className="py-8xl w-full max-w-max-width-desktop flex gap-x-xl">
          <div className="flex flex-col max-w-140 w-full">
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
          <div className="w-full flex items-center justify-center bg-background-primary border border-border-secondary shadow-xs relative bg-[url(/patterns/square-small.svg)] rounded-xs">
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
      <AccordionTrigger className="!p-3xl mb-1 cursor-pointer border-b border-dashed border-border-secondary rounded-none">
        <div className="w-full flex gap-x-xl items-center">
          <div className="p-xs rounded-xs border border-border-secondary bg-background-primary shadow-xs">
            <Icon size="20px" className="text-text-primary" />
          </div>
          <span className="text-text-primary font-semibold text-lg leading-lg font-medium">
            {title}
          </span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="text-md leading-md font-normal text-text-tertiary !p-3xl">
        {content}
      </AccordionContent>
      <div className="w-full h-1.5 bg-[url(/patterns/slash-darker.svg)] border-t border-border-tertiary"></div>
    </AccordionItem>
  );
};

export default FAQ;
