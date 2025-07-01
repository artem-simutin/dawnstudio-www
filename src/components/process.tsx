"use client";

import React, { FC, PropsWithChildren, useRef } from "react";
import SectionTitle from "./shared/section-title";
import { cn } from "@/lib/utils";
import { Clock, Infinity, Plus, Rocket02 } from "untitledui-js/react";
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
    <section className="w-full border-b border-border-secondary flex flex-col max-w-full-page desktop:border-x">
      <SectionTitle
        subTitle="Our Plan"
        title="How we work"
        description="Expect well structured, straight to the point approach from our team to keep you on top of the things."
      />
      <div className="w-full flex">
        <div className="w-full flex">
          <div className="grow bg-[url(/patterns/slash.svg)]"></div>
          <div className="w-full max-w-max-width-desktop desktop:border-x border-border-secondary relative">
            <div
              ref={scrollableContainer}
              className=" h-[698px] overflow-x-auto overflow-y-hidden bg-[url(/patterns/dot.svg)] "
            >
              <div className="h-full relative w-[2869px] tablet:w-[3369px] desktop:w-[3443px]">
                <div className="relative top-8 left-8 tablet:top-12 tablet:left-12 desktop:top-16 desktop:left-16 w-[324px] tablet:w-[392px]">
                  <Card
                    className="w-[324px] tablet:w-[392px] absolute top-0 left-0"
                    title="Discovery call"
                    description="Discuss scope of the project, idea, requirements, etc."
                    duration="45 minutes"
                    icon="/products/google-meet.svg"
                    people={[
                      "/people/artem-simutin.jpeg",
                      "/people/kristian-veter.jpg",
                    ]}
                    notification={0}
                  />
                  <Tag className="absolute left-[424px] top-[63px] z-30">
                    Proposal Document
                  </Tag>
                  <Arrow
                    className="absolute tablet:top-[74px] desktop:top-[81px] left-[392px]"
                    num={1}
                    width={187}
                    height={1}
                    tabletWidth={187}
                    tabletHeight={1}
                    mobileWidth={187}
                    mobileHeight={1}
                  />
                </div>
                <div className="absolute top-8 tablet:top-12 desktop:top-16 left-[551px] tablet:left-[627px] desktop:left-[643px] w-[324px] tablet:w-[392px]">
                  <Card
                    className="w-[324px] tablet:w-[392px] absolute top-0 left-0"
                    title="Kickoff Call"
                    description="Discuss scope of the project, idea, requirements, etc."
                    duration="45 minutes"
                    icon="/products/slack.svg"
                    people={[
                      "/people/artem-simutin.jpeg",
                      "/people/kristian-veter.jpg",
                    ]}
                    notification={0}
                  />
                  <Arrow
                    className="absolute tablet:top-[73px] desktop:top-[81px] left-[392px]"
                    num={2}
                    width={96}
                    height={389}
                    tabletWidth={80}
                    tabletHeight={389}
                    mobileWidth={64}
                    mobileHeight={389}
                  />
                </div>
                <div className="absolute top-8 tablet:top-12 desktop:top-16 left-[947px] tablet:left-[1099px] desktop:left-[1131px] w-[472px] tablet:w-[552px]">
                  <Card
                    className="w-[472px] tablet:w-[552px] absolute top-0 left-0"
                    title="MVP Development"
                    description="Receive a full functional  MVP with frequent progress updates. The app is deployed to your cloud infrastructure."
                    duration="21 day"
                    icon="/products/github.svg"
                    people={[
                      "/people/artem-simutin.jpeg",
                      "/people/kristian-veter.jpg",
                    ]}
                    notification={1}
                  />
                  <Card
                    className="w-[324px] tablet:w-[392px] absolute top-[194px] left-0"
                    title="Brand Strategy"
                    description="Get a complete strategy with a fundamental assets for your upcoming brand."
                    duration="7 days"
                    icon="/products/word.svg"
                    people={["/people/denis-simutin.jpg"]}
                    notification={0}
                  />
                  <Card
                    className="w-[324px] tablet:w-[392px] absolute top-[388px] left-0"
                    title="Market Research"
                    description="Get complete customer profile and “go-to market” strategies."
                    duration="7 days"
                    icon="/products/google-ads.svg"
                    people={["/people/denis-simutin.jpg"]}
                    notification={0}
                  />
                  <Tag className="absolute tablet:top-[256px] desktop:top-[264px] left-[374px] tablet:left-[424px] z-30">
                    Strategy
                  </Tag>
                  <Tag className="absolute tablet:top-[450px] desktop:top-[458px] left-[374px] tablet:left-[424px] z-30">
                    Data
                  </Tag>
                  <Arrow
                    className="absolute tablet:top-[73px] desktop:top-[81px] left-[342px] tablet:left-[392px]"
                    num={3}
                    width={256}
                    height={389}
                    tabletWidth={240}
                    tabletHeight={389}
                    mobileWidth={212}
                    mobileHeight={389}
                  />
                </div>
                <div className="absolute top-[45px] tablet:top-[61px] desktop:top-[77px] left-[1664px] w-[324px] tablet:w-[392px]">
                  <NotificationCard
                    className="w-[280px] absolute top-0 tablet:left-[55px] desktop:left-[89px]"
                    avatarSrc="/people/denis-simutin.jpg"
                    name="Olivia Rhye"
                    email="olivia.rhye@gmail.com"
                    time="at 12:00 AM"
                    content="Wow... This is exactly what we were looking for! Looking forward to the full product!"
                    notification={2}
                  />
                  <Card
                    className="w-[304px] desktop:w-[392px] absolute top-[278px] left-0"
                    title="Branding + Website"
                    description="Get the full brand design package and see it implemented on the website."
                    duration="14 days"
                    icon="/products/figma.svg"
                    people={["/people/denis-simutin.jpg"]}
                    notification={1}
                  />
                  <Tag className="absolute top-[57px] left-[465px] z-30">
                    MVP
                  </Tag>
                  <Tag className="absolute top-[348px] left-[424px] z-30">
                    Assets
                  </Tag>
                  <Tag className="absolute top-[348px] left-[483px] z-30">
                    Use Guide
                  </Tag>
                  <Arrow
                    className="absolute top-[68px] tablet:left-[347px] desktop:left-[369px]"
                    num={4}
                    width={280}
                    height={292}
                    tabletWidth={286}
                    tabletHeight={292}
                    mobileWidth={225}
                    mobileHeight={292}
                  />
                </div>
                <div className="absolute top-[161px] left-[2279px] w-[392px]">
                  <Card
                    className="w-[324px] desktop:w-[392px] absolute top-0 left-0"
                    title="Launch"
                    description="We are delivering all of the product elements to you..."
                    duration="0"
                    icon="/products/producthunt.svg"
                    people={[
                      "/people/denis-simutin.jpg",
                      "/people/artem-simutin.jpeg",
                      "/people/kristian-veter.jpg",
                    ]}
                    notification={0}
                  />
                  <Card
                    className="w-[304px] desktop:w-[392px] absolute top-[194px] left-0"
                    title="Social Media Design"
                    description="Get a complete strategy with a fundamental assets for your upcoming brand."
                    duration="7 days"
                    icon="/products/linkedin.svg"
                    people={["/people/denis-simutin.jpg"]}
                    notification={0}
                  />
                  <Arrow
                    className="absolute top-[81px] left-[392px]"
                    num={5}
                    width={96}
                    height={292}
                    tabletWidth={80}
                    tabletHeight={292}
                    mobileWidth={64}
                    mobileHeight={292}
                  />
                </div>
                <div className="absolute top-[258px] left-[2769px]">
                  <Card
                    className="w-[304px] desktop:w-[392px] absolute left-0"
                    title="Ongoing development"
                    description="Receive a full functional  MVP with frequent progress updates. The app is deployed to your cloud infrastructure."
                    icon="/products/linear.svg"
                    people={[
                      "/people/denis-simutin.jpg",
                      "/people/artem-simutin.jpeg",
                      "/people/kristian-veter.jpg",
                    ]}
                    notification={0}
                  />
                  <div className="shadow-xs bg-background-primary rounded-sm border border-border-primary top-[264px] absolute left-0 p-[5px]">
                    <Plus size={12} className="text-utility-gray-500" />
                  </div>
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
  notification: number;
}

const Card: FC<CardProps> = (props) => {
  return (
    <div
      className={cn(
        "rounded-lg flex border border-border-secondary z-20 shadow-xs bg-background-primary",
        props.className,
      )}
    >
      <div className="w-full flex flex-col p-xl desktop:p-2xl desktop:pr-4xl gap-y-xl desktop:gap-y-2xl relative">
        <div className="flex flex-col w-full space-y-xxs desktop:space-y-sm">
          <div className="w-full flex gap-x-sm desktop:gap-x-md items-center">
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
              {props.duration === "0" ? (
                <Rocket02 size={20} />
              ) : (
                <Clock size={20} />
              )}

              {props.duration !== "0" && (
                <span className="font-semibold text-sm leading-sm text-text-tertiary">
                  {props.duration}
                </span>
              )}
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
      </div>

      <div className="w-4xl bg-[url(/patterns/slash.svg)] border-l border-border-tertiary relative flex items-center rounded-r-lg">
        <div className="w-4 h-4 rounded-full bg-background-primary border border-border-secondary -right-2 absolute"></div>
      </div>

      {/* notification decoration */}
      {props.notification > 0 && (
        <div className="rounded-full h-8 w-8 absolute -top-4 -right-4 hidden desktop:block z-30">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/people/artem-simutin.jpeg" />
          </Avatar>
          <div className="absolute -bottom-[3px] -right-[3px] bg-utility-blue-light-500 rounded-full h-4 w-4 flex items-center justify-center">
            <span className="text-xs leading-xs text-white">
              {props.notification}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

interface TagProps {
  className?: string;
}

const Tag: FC<PropsWithChildren<TagProps>> = (props) => {
  return (
    <span
      className={cn(
        "py-xxs px-sm border border-border-primary rounded-sm shadow-xs text-text-secondary text-xs leading-xs font-medium text-nowrap bg-background-primary",
        props.className,
      )}
    >
      {props.children}
    </span>
  );
};

interface NotificationCardProps {
  className?: string;
  avatarSrc: string;
  name: string;
  email: string;
  time: string;
  content: string;
  notification: number;
}

const NotificationCard: FC<NotificationCardProps> = (props) => {
  return (
    <div
      className={cn(
        "border border-border-secondary bg-background-primary shadow-xs rounded-xs relative flex flex-col",
        props.className,
      )}
    >
      <div className="px-xl flex justify-between pt-xl pb-lg items-center border-b border-border-tertiary border-dashed w-full">
        <div className="gap-x-md flex items-center">
          <Avatar className="w-8 h-8">
            <AvatarImage src={props.avatarSrc} />
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm leading-sm font-semibold text-text-primary">
              {props.name}
            </span>
            <span className="text-xs leading-xs text-text-tertiary">
              {props.email}
            </span>
          </div>
        </div>
        <span className="text-text-quaternary text-xs leading-xs font-medium">
          {props.time}
        </span>
      </div>
      <div className="w-full pt-lg pb-xl px-xl border-b border-border-tertiary">
        <p className="text-xs leading-xs text-text-tertiary">{props.content}</p>
      </div>
      <div className="w-full h-1.5 bg-[url(/patterns/slash-darker.svg)]"></div>
      {/* notification decoration */}
      {props.notification > 0 && (
        <div className="rounded-full bg-utility-blue-light-500 w-4 h-4 absolute -top-2 -right-2 text-xs text-text-white leading-xs flex items-center justify-center">
          {props.notification}
        </div>
      )}
    </div>
  );
};

interface ArrowProps {
  className?: string;
  num: number;
  width: number;
  height: number;
  tabletWidth: number;
  tabletHeight: number;
  mobileWidth: number;
  mobileHeight: number;
}

const Arrow: FC<ArrowProps> = (props) => {
  return (
    <>
      {/* desktop */}
      <Image
        src={`/decorations/process-${props.num}-arrows.svg`}
        width={props.width}
        height={props.height}
        className={cn("hidden desktop:block", props.className)}
        alt="Arrows"
      />
      {/* tablet */}
      <Image
        src={`/decorations/process-${props.num}-arrows-tablet.svg`}
        width={props.tabletWidth}
        height={props.tabletHeight}
        className={cn("hidden tablet:block desktop:hidden", props.className)}
        alt="Arrows"
      />
      {/* mobile */}
      <Image
        src={`/decorations/process-${props.num}-arrows-mobile.svg`}
        width={props.mobileWidth}
        height={props.mobileHeight}
        className={cn("block tablet:hidden", props.className)}
        alt="Arrows"
      />
    </>
  );
};

export default Process;
