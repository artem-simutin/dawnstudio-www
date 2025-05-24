"use client";
import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Button, buttonVariants } from "./ui/button";
import { Bookmark } from "untitledui-js/react";
import Link from "next/link";
import config from "@/config";
import {
  motion,
  MotionValue,
  useMotionValue,
  useTransform,
} from "motion/react";

const phrases = [
  "booked calls",
  "lead quality",
  "sales pipeline",
  "client retention",
  "lifetime value",
];

const Hero = () => {
  return (
    <section className="border-b border-border-secondary w-full pt-10xl pb-10xl bg-[url(/patterns/square.svg)] relative max-w-full-page border-x">
      <div className="mx-auto px-container-padding-desktop max-w-max-width-desktop flex flex-col space-y-7xl w-full">
        <div className="flex flex-col space-y-4xl items-center border p-9xl w-fit mx-auto rounded-4xl border-border-secondary bg-background-primary">
          <div className="flex w-full justify-between px-4xl max-w-192">
            <Image
              src="/illustrations/dashes.svg"
              width={188}
              height={32}
              alt="Dashes"
            />
            <Image
              src="/illustrations/cube.svg"
              width={59}
              height={48}
              alt="Cube"
            />
            <Image
              src="/illustrations/dashes.svg"
              width={188}
              height={32}
              alt="Dashes"
            />
          </div>
          <div className="flex flex-col space-y-6xl">
            <div className="flex flex-col space-y-3xl items-center">
              <div className="flex flex-col space-y-sm items-center">
                <div className="flex items-center gap-x-xl">
                  <h1 className="text-text-primary text-display-xl leading-display-xl font-bold">
                    Boost your
                  </h1>
                  <HeadingTextBox />
                </div>
                <h1 className="text-text-primary text-display-xl leading-display-xl font-bold">
                  with growth systems
                </h1>
              </div>
              <p className="w-full text-center text-text-tertiary max-w-140">
                Experience the future of business with intelligent, scalable
                automation solutions tailored to your needs.
              </p>
            </div>
            <div className="flex gap-x-xl w-full justify-center">
              <Link
                href={config.calComLink}
                className={buttonVariants({
                  variant: "primary",
                })}
                target="_blank"
              >
                Book a call <Bookmark size="20px" />
              </Link>
              <Button variant="secondary">Our Projects</Button>
            </div>
          </div>
        </div>
      </div>
      <InteractiveIllustration
        src="/illustrations/gameboy.svg"
        width={174}
        height={215}
        alt="Gameboy"
        className="absolute bottom-[205px] left-[100px]"
      />
      <InteractiveIllustration
        src="/illustrations/domino.svg"
        alt="Domino"
        width={55}
        height={80}
        className="absolute left-[42px] bottom-[70px]"
      />
      <InteractiveIllustration
        src="/illustrations/cubes.svg"
        width={235}
        height={143}
        alt="Cubes"
        className="left-[125px] bottom-[50px] absolute"
      />
      <InteractiveIllustration
        src="/illustrations/hero-phone.svg"
        width={228}
        height={273}
        className="right-[60px] absolute bottom-[160px]"
        alt="Phone"
      />
      <InteractiveIllustration
        src="/illustrations/social-media-integration.svg"
        alt="Social Media Integrations"
        width={179}
        height={93}
        className="absolute right-[40px] bottom-[63px]"
      />
      <InteractiveIllustration
        src="/illustrations/debit-card.svg"
        alt="Card"
        width={123}
        height={161}
        className="absolute bottom-[33px] right-[328px]"
      />
    </section>
  );
};

const minDelay = 50; // min ms between keystrokes
const maxDelay = 200; // max ms between keystrokes
const phrasePause = 2000; // pause after finishing a word

function getRandomDelay() {
  return Math.random() * (maxDelay - minDelay) + minDelay;
}

const HeadingTextBox = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);

  const phrase = useMemo(
    () => phrases[currentPhraseIndex],
    [currentPhraseIndex]
  );

  useEffect(() => {
    let i = 0;
    let timeoutId: NodeJS.Timeout;

    const runCycle = () => {
      if (i < phrase.length) {
        i += 1;
        setVisibleCount(i);
        timeoutId = setTimeout(runCycle, getRandomDelay());
      } else {
        timeoutId = setTimeout(() => {
          setCurrentPhraseIndex((idx) => (idx + 1) % phrases.length);
        }, phrasePause);
      }
    };

    runCycle();
    return () => clearTimeout(timeoutId);
  }, [phrase]);

  return (
    <div className="h-[84px] bg-background-secondary border border-border-secondary rounded-md flex justify-start px-xl w-[531px]">
      <div className="flex whitespace-nowrap items-baseline bg-gradient-to-r from-brand-600 to-brand-500 text-transparent bg-clip-text">
        {phrase
          .slice(0, visibleCount)
          .split("")
          .map((char, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0,
                ease: "linear",
              }}
              className="inline-block text-display-xl leading-[84px] font-bold"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        <span className="inline-block text-display-xl leading-[84px] font-bold animate-caret-blink">
          _
        </span>
      </div>
    </div>
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

  const tiltSensitivity = 10; // Lower number = stronger tilt
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
