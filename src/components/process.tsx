import React, { FC } from "react";
import SectionTitle from "./shared/section-title";
import { cn } from "@/lib/utils";
import { Clock, GoogleChrome } from "untitledui-js/react";
import { Avatar, AvatarImage } from "./ui/avatar";
import Image from "next/image";

const Process = () => {
  return (
    <section className="w-full border-b border-border-secondary flex flex-col space-y-7xl max-w-full-page border-x">
      <SectionTitle
        subTitle="Our Plan"
        title="How we work"
        description="Expect well structured, straight to the point approach from our team to keep you on top of the things."
      />
      <div className="w-full flex">
        <div className="w-full flex">
          <div className="grow bg-[url(/patterns/slash.svg)]"></div>
          <div className="w-full max-w-max-width-desktop h-[678px] overflow-x-auto overflow-y-hidden">
            <div className="h-full relative">
              <Card
                className="w-96"
                title="Discovery call"
                description="Discuss scope of the project, idea, requirements, etc."
                duration="45 minutes"
                icon="/products/google-meet.svg"
                people={[
                  "/people/artem-simutin.jpeg",
                  "/people/kristian-veter.jpg",
                ]}
              />
            </div>
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
  duration: string;
  people: string[];
}

const Card: FC<CardProps> = (props) => {
  return (
    <div
      className={cn(
        "rounded-lg flex border border-border-secondary flex",
        props.className,
      )}
    >
      <div className="w-full flex flex-col p-2xl pr-4xl space-y-2xl">
        <div className="flex flex-col w-full space-y-sm">
          <div className="w-full flex gap-x-md items-center">
            <Image src={props.icon} width={32} height={32} alt="Icon" />
            <span className="text-text-primary text-lg leading-lg font-semibold">
              {props.title}
            </span>
          </div>
          <p className="text-sm leading-sm text-text-primary line-clamp-2">
            {props.description}
          </p>
        </div>
        <div className="w-full justify-between items-center flex">
          <div className="flex items-center gap-x-md text-text-quaternary">
            <Clock size={20} />
            <span className="font-semibold text-sm leading-sm text-text-tertiary">
              {props.duration}
            </span>
          </div>
          <div className="flex -space-x-2">
            {props.people.map((link, idx) => {
              return (
                <Avatar
                  key={`card-avatar-${idx}`}
                  className="w-7 h-7 rounded-full border-2 border-background-primary"
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
    </div>
  );
};

export default Process;
