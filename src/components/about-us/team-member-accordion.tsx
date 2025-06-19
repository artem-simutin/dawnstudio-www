"use client";

import Image from "next/image";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "untitledui-js/react";

const TeamMemberAccordion = ({
  position,
  name,
  imageUrl,
  socialMediaLinks,
  description,
  value,
}: {
  position: string;
  name: string;
  imageUrl: string;
  socialMediaLinks: {
    icon: string;
    href: string;
  }[];
  description: string;
  value: string;
}) => {
  return (
    <AccordionPrimitive.Item
      value={value}
      className="border border-border-secondary rounded-xs shadow-xs "
    >
      <AccordionPrimitive.Header className="flex w-full">
        <AccordionPrimitive.Trigger className="flex w-full items-center bg-transparent p-0 border-0 group">
          <div className="p-4 tablet:p-5 desktop:p-6  flex flex-col tablet:flex-row gap-4 w-full items-start tablet:items-center text-left">
            <div className="border rounded-xxs border-border-secondary p-1">
              <Image
                src={imageUrl}
                alt={name}
                width={64}
                height={64}
                className="rounded-xxs"
              />
            </div>
            <div className="space-y-0.5">
              <p className="text-text-primary text-xl font-semibold">{name}</p>
              <p className="text-text-secondary text-md font-medium">
                {position}
              </p>
            </div>
          </div>
          <div className="px-4xl hidden tablet:flex gap-6 items-center">
            {socialMediaLinks.map((link) => (
              <a
                className="hover:opacity-80 h-6 w-6 shrink-0 transition-opacity duration-100"
                href={link.href}
                key={link.href}
                target="_blank"
              >
                <Image
                  src={link.icon}
                  alt={link.href}
                  width={24}
                  height={24}
                  className="h-6 w-6 text-text-secondary shrink-0"
                />
              </a>
            ))}
          </div>
          <div className="px-4xl cursor-pointer flex items-center justify-center tablet:border-l border-dashed border-border-secondary">
            <div className="hover:opacity-80 p-2 transition-opacity duration-100">
              <ChevronDown className="h-5 w-5 text-foreground-fg-quaternary transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </div>
          </div>
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
      <div className="border-t border-border-secondary h-1.5 w-full bg-[url(/patterns/slash-darker.svg)]" />
      <AccordionPrimitive.Content className="border-t border-border-secondary overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
        <div className="p-4 tablet:p-6 desktop:p-8">
          <p className="text-text-tertiary text-md font-normal">
            {description}
          </p>
        </div>
        <div className="tablet:hidden p-4  flex gap-6 border-t border-border-secondary">
          {socialMediaLinks.map((link) => (
            <a
              className="hover:opacity-80 h-6 w-6 shrink-0 transition-opacity duration-100"
              href={link.href}
              key={link.href}
              target="_blank"
            >
              <Image
                src={link.icon}
                alt={link.href}
                width={24}
                height={24}
                className="h-6 w-6 text-text-secondary shrink-0"
              />
            </a>
          ))}
        </div>
        <div className="tablet:h-5 h-2  bg-[url(/patterns/slash-darker.svg)] w-full border-t border-border-secondary" />
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  );
};

export default TeamMemberAccordion;
