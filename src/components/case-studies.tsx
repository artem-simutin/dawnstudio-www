import React, { FC } from "react";
import SectionTitle from "./shared/section-title";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "untitledui-js/react";

const CaseStudies = () => {
  return (
    <section className="w-full border-b border-border-secondary py-9xl flex flex-col space-y-6xl">
      <div className="w-full mx-auto max-w-max-width-desktop">
        <SectionTitle
          subTitle="Case studies"
          title="How we helped business grow."
          description="Read our case studies."
        />
      </div>
      <div className="w-full mx-auto max-w-max-width-desktop">
        <CaseStudyPreview
          companyLogoUrl="/companies/nietzsche.svg"
          tags={["+50% Lead Generation", "$6.2M Series A"]}
          title="How Nietzsche increased their sales 2X"
          description="By channeling Nietzschean boldness into its branding, the company doubled sales through a fearless, value-driven campaign."
          companyName="Nietzssche"
          href="/"
          illustrationUrl="/illustrations/card.svg"
        />
      </div>
    </section>
  );
};

interface CaseStudyProps {
  illustrationUrl: string;
  companyLogoUrl: string;
  title: string;
  description: string;
  href: string;
  tags: string[];
  companyName: string;
}

const CaseStudyPreview: FC<CaseStudyProps> = (props) => {
  return (
    <div className="w-full flex border border-border-secondary">
      <div className="w-[312px] flex items-center border-r border-border-secondary">
        <Image
          src={props.illustrationUrl}
          width={512}
          height={289}
          alt="Illustration"
        />
      </div>
      <div className="p-6xl flex flex-col space-y-6xl">
        <Image
          src={props.companyLogoUrl}
          width={168}
          height={48}
          alt={props.companyName}
        />
        <div className="flex w-full flex-col gap-y-md">
          <div className="flex gap-x-lg">
            {props.tags.map((t) => (
              <div
                key={`case-study-${props.href}-tag-${t}`}
                className="py-xs px-lg rounded-full text-component-utility-gray-700 font-medium text-xs leading-xs border border-component-utility-gray-200 bg-component-utility-gray-50"
              >
                {t}
              </div>
            ))}
          </div>
          <div className="w-full flex flex-col space-y-4xl">
            <div className="flex flex-col space-y-xl">
              <h3 className="text-text-secondary text-display-md leading-display-md font-bold">
                {props.title}
              </h3>
              <p className="text-text-tertiary text-md leading-md">
                {props.description}
              </p>
            </div>
            <Link
              href={props.href}
              className={cn(
                buttonVariants({ variant: "linkGray", size: "link" }),
                "w-min flex gap-x-sm"
              )}
            >
              <span className="font-semibold">Read case study</span>
              <ArrowRight
                size="20px"
                className="text-component-icons-icons-icon-brand"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
