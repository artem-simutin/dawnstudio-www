"use client";

import React, { FC, useRef } from "react";
import SectionTitle from "./shared/section-title";
import { cn } from "@/lib/utils";
import { Clock, Infinity } from "untitledui-js/react";
import { Avatar, AvatarImage } from "./ui/avatar";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "untitledui-js/react";

const Process = () => {
  const scrollableContainer = useRef<HTMLDivElement>(null);

  const scrollClick = () => {
    if (!scrollableContainer.current) return;
    scrollableContainer.current.scroll({
      behavior: "smooth",
      left: scrollableContainer.current.clientWidth,
    });
  };

  return (
    <section className="w-full border-b border-border-secondary flex flex-col max-w-full-page border-x">
      <SectionTitle
        subTitle="Our Plan"
        title="How we work"
        description="Expect well structured, straight to the point approach from our team to keep you on top of the things."
      />
      <div className="w-full flex">
        <div className="w-full flex">
          <div className="grow bg-[url(/patterns/slash.svg)]"></div>
          <div className="w-full max-w-max-width-desktop border-x border-border-secondary relative">
            <div
              ref={scrollableContainer}
              className=" h-[678px] overflow-x-auto overflow-y-hidden bg-[url(/patterns/dot.svg)] "
            >
              <div className="h-full relative w-[2185px]">
                <div className="relative top-16 left-16 w-96 h-[162px]">
                  <Card
                    className="w-96 absolute top-0 left-0"
                    title="Discovery call"
                    description="Discuss scope of the project, idea, requirements, etc."
                    duration="45 minutes"
                    icon="/products/google-meet.svg"
                    people={[
                      "/people/artem-simutin.jpeg",
                      "/people/kristian-veter.jpg",
                    ]}
                    dot
                  />
                  <Image
                    src="/decorations/process-first-arrows.svg"
                    width={113}
                    height={390}
                    className="absolute top-[81px] -right-[115px]"
                    alt="Arrows"
                  />
                </div>
                <div className="top-16 absolute left-[562px] flex space-y-8 flex-col">
                  <Card
                    className="w-[579px]"
                    title="MVP Development"
                    description="Receive a full functional  MVP with frequent progress updates. The app is deployed to your cloud infrastructure."
                    duration="21 day"
                    icon="/products/github.svg"
                    people={[
                      "/people/artem-simutin.jpeg",
                      "/people/kristian-veter.jpg",
                    ]}
                  />
                  <Card
                    className="w-96"
                    title="Branding foundations"
                    description="Get a complete strategy with a fundamental assets for your upcoming brand."
                    duration="7 days"
                    icon="/products/figma.svg"
                    people={["/people/denis-simutin.jpg"]}
                  />
                  <Card
                    className="w-96"
                    title="Market research"
                    description="Get complete customer profile and “go-to market” strategies. "
                    duration="7 days"
                    icon="/products/google-ads.svg"
                    people={[
                      "/people/artem-simutin.jpeg",
                      "/people/kristian-veter.jpg",
                    ]}
                  />
                  <Image
                    src="/decorations/process-second-arrows.svg"
                    width={308}
                    height={389}
                    className="absolute top-[81px] -right-[115px]"
                    alt="Arrows"
                  />
                </div>
                <div className="absolute top-[161px] left-[1253px] flex-col space-y-8">
                  <Card
                    className="w-[836.5px]"
                    title="Ongoing development"
                    description="Discuss scope of the project, idea, requirements, etc."
                    icon="/products/linear.svg"
                    people={[
                      "/people/artem-simutin.jpeg",
                      "/people/kristian-veter.jpg",
                    ]}
                  />
                  <Card
                    className="w-96"
                    title="Complete brand design"
                    description="Get a complete branding including"
                    duration="21 days"
                    icon="/products/adobe.svg"
                    people={["/people/denis-simutin.jpg"]}
                  />
                </div>

                {/* cubes */}
                <Image
                  src="/illustrations/process-cube.svg"
                  alt="Cube decoration"
                  width={96}
                  height={96}
                  className="bottom-6 left-6 absolute"
                />
                <div className="flex gap-x-8 absolute top-[65px] left-[1253px]">
                  <div className="flex">
                    <Image
                      src="/illustrations/process-cube.svg"
                      alt="Cube decoration"
                      width={64}
                      height={64}
                    />
                    <Image
                      src="/illustrations/process-cube-long.svg"
                      alt="Cube decoration"
                      width={128}
                      height={96}
                    />
                  </div>
                  <div className="w-[452px] h-7xl bg-background-primary border border-dashed border-border-secondary bg-[url(/patterns/slash.svg)]"></div>
                </div>
              </div>
            </div>
            <Button
              variant="secondary"
              size="sm"
              className="absolute bottom-6 right-6"
              onClick={scrollClick}
            >
              Drag / button
              <ArrowRight size={20} className="text-foreground-fg-quaternary" />
            </Button>
          </div>

          <div className="grow bg-[url(/patterns/slash.svg)]"></div>
        </div>
      </div>
    </section>
  );
};

interface CardProps {
  className?: string;
  icon: string;
  title: string;
  description: string;
  people: string[];
  duration?: string;
  dot?: boolean;
}

const Card: FC<CardProps> = (props) => {
  return (
    <div
      className={cn(
        "rounded-lg flex border border-border-secondary z-20 shadow-xs bg-background-primary",
        props.className,
      )}
    >
      <div className="w-full flex flex-col p-2xl pr-4xl gap-y-2xl relative">
        <div className="flex flex-col w-full space-y-sm">
          <div className="w-full flex gap-x-md items-center">
            <Image src={props.icon} width={32} height={32} alt="Icon" />
            <span className="text-text-primary text-lg leading-lg font-semibold">
              {props.title}
            </span>
          </div>
          <p className="text-sm leading-sm text-text-primary line-clamp-2 min-h-10">
            {props.description}
          </p>
        </div>
        <div className="w-full justify-between items-center flex">
          {!!props.duration ? (
            <div className="flex items-center gap-x-md text-text-quaternary">
              <Clock size={20} />
              <span className="font-semibold text-sm leading-sm text-text-tertiary">
                {props.duration}
              </span>
            </div>
          ) : (
            <div>
              <Infinity size={20} className="text-text-quaternary" />
            </div>
          )}

          <div className="flex -space-x-2">
            {props.people.map((link, idx) => {
              return (
                <Avatar
                  key={`card-avatar-${idx}`}
                  className="w-6 h-6 rounded-full border-2 border-background-primary"
                >
                  <AvatarImage src={link} />
                </Avatar>
              );
            })}
          </div>
        </div>

        {/* dot decoration */}
        {props.dot && (
          <div className="bg-utility-success-500 rounded-full h-1.5 w-1.5 absolute top-4 right-4"></div>
        )}
      </div>

      <div className="w-4xl bg-[url(/patterns/slash.svg)] border-l border-border-tertiary relative flex items-center rounded-r-lg">
        <div className="w-4 h-4 rounded-full bg-background-primary border border-border-secondary -right-2 absolute"></div>
      </div>
    </div>
  );
};

export default Process;
