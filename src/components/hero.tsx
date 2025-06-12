"use client";
import React, { FC, useRef } from "react";
import Image from "next/image";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import config from "@/config";
import {
  motion,
  MotionValue,
  useMotionValue,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";
import { ArrowRight, Figma } from "untitledui-js/react";
import { Code01 } from "untitledui-js/react";

const Hero = () => {
  return (
    <section className="w-full flex flex-col max-w-full-page desktop:border-x border-border-secondary overflow-hidden">
      {/* first decoration row */}
      <div className="flex w-full h-0 tablet:h-8 desktop:h-[120px] border-border-secondary">
        {Array.from({ length: 12 }).map((_, idx, arr) => {
          return (
            <div
              key={`first-row-decoration-box-${idx}`}
              className={cn(
                "w-[120px] h-0 tablet:h-8 desktop:h-[120px] border-border-secondary",
                idx !== arr.length - 1 && "border-r",
                idx === 1 && "bg-[url(/patterns/slash.svg)]",
              )}
            ></div>
          );
        })}
      </div>

      {/* central */}
      <div className="tablet:border-y border-border-secondary w-full flex py-6xl tablet:py-4xl desktop:py-0 h-auto desktop:h-[600px] relative px-container-padding-mobile tablet:px-container-padding-tablet desktop:px-auto">
        {/* decoration column */}
        <div className="hidden desktop:flex w-[120px] flex-col border-r border-border-secondary shrink-0">
          {Array.from({ length: 5 }).map((_, idx, arr) => {
            return (
              <div
                key={`first-central-column-decoration-box-${idx}`}
                className={cn(
                  "w-0 desktop:w-[120px] h-[120px] border-border-secondary",
                  idx !== arr.length - 1 && "border-b",
                  idx === 0 && "bg-[url(/patterns/slash.svg)]",
                )}
              ></div>
            );
          })}
        </div>

        {/* main content */}
        <div className="w-full flex justify-center items-center relative">
          <div className="flex flex-col items-center gap-y-xl tablet:gap-y-2xl desktop:gap-y-3xl">
            {/* badge */}
            <div className="p-xs pr-md rounded-lg border border-border-primary flex gap-x-md items-center">
              <div className="flex items-center py-xxs px-sm rounded-sm border border-border-secondary gap-x-xs">
                <div className="h-3 w-3 rounded-full bg-utility-success-500 border-3 border-utility-success-100"></div>
                <span className="text-text-secondary font-medium text-sm leading-sm">
                  2/5
                </span>
              </div>
              <span className="text-text-secondary font-medium text-sm leading-sm">
                Two slots available
              </span>
            </div>

            <div className="w-full flex flex-col space-y-3xl tablet:space-y-4xl desktop:space-y-6xl items-center">
              <div className="flex items-center space-y-3xl flex-col">
                {/* title */}
                <div className="flex flex-col space-y-sm tablet:space-y-md desktop:space-y-lg items-center">
                  <div className="flex gap-x-lg">
                    <div className="px-lg py-xxs desktop:px-3xl tablet:px-2xl tablet:py-xs desktop:py-sm border border-border-primary rounded-md bg-[url(/patterns/slash.svg)] shadow-xs">
                      <span className="text-display-md tablet:text-display-lg desktop:text-display-xl leading-display-md tablet:leading-display-lg desktop:leading-display-xl text-text-primary font-bold">
                        B2B SasS
                      </span>
                    </div>
                    <div className="px-lg py-xxs desktop:px-3xl tablet:px-2xl tablet:py-xs desktop:py-sm border border-border-primary rounded-md shadow-xs">
                      <span className="text-display-md tablet:text-display-lg desktop:text-display-xl leading-display-md tablet:leading-display-lg desktop:leading-display-xl text-text-primary font-bold">
                        From
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-x-lg gap-y-sm tablet:flex-row flex-col tablet:w-auto w-full">
                    <div className="flex gap-x-lg">
                      <div className="px-lg py-xxs desktop:px-3xl tablet:px-2xl tablet:py-xs desktop:py-sm border border-border-primary rounded-md shadow-xs">
                        <span className="text-display-md tablet:text-display-lg desktop:text-display-xl leading-display-md tablet:leading-display-lg desktop:leading-display-xl text-text-primary font-bold">
                          Idea
                        </span>
                      </div>
                      <div className="px-lg py-xxs desktop:px-3xl tablet:px-2xl tablet:py-xs desktop:py-sm border-dashed border border-border-primary rounded-md bg-[url(/patterns/slash.svg)] flex items-center shadow-xs w-full tablet:w-auto flex justify-center">
                        <ArrowRight
                          size={24}
                          className="text-utility-green-400 tablet:scale-50 desktop:scale-100"
                        />
                      </div>
                    </div>

                    <div className="px-lg py-xxs desktop:px-3xl tablet:px-2xl tablet:py-xs desktop:py-sm border border-border-primary rounded-md shadow-xs">
                      <span className="text-display-md tablet:text-display-lg desktop:text-display-xl leading-display-md tablet:leading-display-lg desktop:leading-display-xl text-text-primary font-bold">
                        First Customers
                      </span>
                    </div>
                  </div>
                </div>

                {/* subtitle */}
                <p className="w-full text-center text-text-primary desktop:text-xl text-md leading-md tablet:text-lg tablet:leading-lg desktop:leading-xl max-w-140">
                  We develop your MVP, create your brand, and help you acquire
                  your first customers.
                </p>
              </div>

              {/* buttons */}
              <div className="max-w-96 flex gap-x-lg w-full justify-center desktop:flex-row flex-col gap-y-lg">
                <Link
                  href={config.calComLink}
                  className={buttonVariants({
                    variant: "primary",
                    className: "font-semibold",
                  })}
                  target="_blank"
                >
                  Book a call
                </Link>
                <Button variant="secondary" className="font-semibold gap-x-xs">
                  <Code01 size={20} className="block desktop:hidden" />
                  Our Projects
                </Button>
              </div>
            </div>

            <div className="absolute top-4 right-4 flex-col space-y-4 text-utility-gray-100 hidden tablet:flex">
              <Code01 size={20} />
              <Figma size={20} />
            </div>
          </div>

          <InteractiveIllustration
            src="/illustrations/gameboy.svg"
            width={174}
            height={215}
            alt="Gameboy"
            className="absolute bottom-[103px] -left-[56px] hidden desktop:block"
          />
          <InteractiveIllustration
            src="/illustrations/domino.svg"
            alt="Domino"
            width={55}
            height={80}
            className="absolute -left-[56px] -bottom-[40px] hidden desktop:block"
          />
          <InteractiveIllustration
            src="/illustrations/cubes.svg"
            width={235}
            height={143}
            alt="Cubes"
            className="left-[31px] -bottom-[71px] absolute hidden desktop:block"
          />
          <InteractiveIllustration
            src="/illustrations/hero-phone.svg"
            width={181}
            height={273}
            className="right-auto -left-8 desktop:left-auto desktop:-right-[56px] absolute -bottom-[136px] -scale-x-100 desktop:scale-x-100 desktop:bottom-[68px] hidden tablet:block desktop:w-[181px] w-[164px] desktop:h-[273px] h-[255px]"
            alt="Phone"
          />
          <InteractiveIllustration
            src="/illustrations/social-media-integration.svg"
            alt="Social Media Integrations"
            width={179}
            height={93}
            className="absolute -right-[56px] -bottom-[56px] hidden desktop:block"
          />
          <InteractiveIllustration
            src="/illustrations/debit-card.svg"
            alt="Card"
            width={123}
            height={161}
            className="absolute -bottom-[94px] desktop:-bottom-[72px] -right-[18px] desktop:right-[173px] hidden tablet:block"
          />
        </div>

        {/* decoration column */}
        <div className="hidden w-[120px] desktop:flex flex-col border-l border-border-secondary shrink-0">
          {Array.from({ length: 5 }).map((_, idx, arr) => {
            return (
              <div
                key={`second-central-column-decoration-box-${idx}`}
                className={cn(
                  "w-0 desktop:w-[120px] h-[120px] border-border-secondary",
                  idx !== arr.length - 1 && "border-b",
                )}
              ></div>
            );
          })}
        </div>
      </div>

      {/* last decoration row */}
      <div className="flex w-full h-0 tablet:h-8 desktop:h-[120px] border-b border-border-secondary">
        {Array.from({ length: 12 }).map((_, idx, arr) => {
          return (
            <div
              key={`last-row-decoration-box-${idx}`}
              className={cn(
                "w-[120px] h-0 tablet:h-8 desktop:h-[120px] border-border-secondary",
                idx !== arr.length - 1 && "border-r",
              )}
            ></div>
          );
        })}
      </div>
    </section>
  );
};

interface InteractiveIllustrationProps {
  /** Image source URL or path */
  src: string;
  /** Width of the illustration in pixels */
  width?: number;
  /** Height of the illustration in pixels */
  height?: number;
  /** Alt text for the image */
  alt?: string;
  /** Optional className for positioning or styling */
  className?: string;
}

const InteractiveIllustration: FC<InteractiveIllustrationProps> = ({
  src,
  width = 400,
  height = 400,
  alt = "",
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const x: MotionValue<number> = useMotionValue(0);
  const y: MotionValue<number> = useMotionValue(0);

  const tiltSensitivity = 20; // Lower number = stronger tilt
  const rotateX = useTransform(y, (v: number) => -v / tiltSensitivity);
  const rotateY = useTransform(x, (v: number) => v / tiltSensitivity);

  const moveSensitivity = 25; // Lower number = more movement
  const translateX = useTransform(x, (v: number) => v / moveSensitivity);
  const translateY = useTransform(y, (v: number) => v / moveSensitivity);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const px = event.clientX - (rect.left + rect.width / 2);
    const py = event.clientY - (rect.top + rect.height / 2);
    x.set(px);
    y.set(py);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={containerRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        width,
        height,
        perspective: 1000,
      }}
    >
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          className="!absolute inset-0"
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
