"use client";

import React, { FC, useState } from "react";
import SectionTitle from "./shared/section-title";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, ArrowUpRight } from "untitledui-js/react";
import config, { CaseStudy } from "@/config";
import { motion, AnimatePresence } from "motion/react";

const CaseStudies = () => {
  const [activeStudy, setActiveStudy] = useState<string>(
    config.caseStudies[config.caseStudies.length - 1].href ?? "",
  );
  return (
    <section className="w-full border-y border-border-secondary flex flex-col">
      <div className="border-border-secondary desktop:border-x max-w-full-page mx-auto w-full">
        <div className="w-full mx-auto max-w-max-width-desktop">
          <SectionTitle
            subTitle="Case studies"
            title="How we helped our clients "
            description="Discover how we've helped companies overcome challenges, streamline operations, and drive real results through tailored solutions."
            className="border-none"
          />
        </div>
      </div>
      <div className="w-full mx-auto border-t border-border-secondary flex">
        <div className="w-full max-w-full-page mx-auto flex border-x border-border-secondary">
          <div className="bg-[url(/patterns/slash.svg)] grow border-r border-border-secondary" />
          <div className="w-full mx-auto max-w-max-width-desktop flex flex-col desktop:flex-row px-xl py-6xl tablet:px-3xl tablet:py-7xl desktop:px-0 desktop:py-0 gap-y-xl bg-[url(/patterns/square-small.svg)] tablet:bg-none">
            {config.caseStudies.map((c) => {
              const active = activeStudy === c.href;
              const onClick = () => setActiveStudy(c.href);
              return (
                <React.Fragment key={`case-study-${c.href}`}>
                  <CaseStudyPreview active={active} onClick={onClick} {...c} />
                  <CaseStudyPreviewTablet
                    active={active}
                    onClick={onClick}
                    {...c}
                  />
                  <CaseStudyPreviewMobile
                    active={active}
                    onClick={onClick}
                    {...c}
                  />
                </React.Fragment>
              );
            })}
          </div>
          <div className="bg-[url(/patterns/slash.svg)] grow" />
        </div>
      </div>
    </section>
  );
};

const CaseStudyPreview: FC<
  CaseStudy & {
    active: boolean;
    onClick: () => void;
  }
> = (props) => {
  return (
    <div
      className={cn(
        "border-r border-border-secondary h-[389px] hidden desktop:flex",
        !props.active && "cursor-pointer",
      )}
      onClick={props.onClick}
    >
      <motion.div
        className={cn(
          "flex items-center border-r border-border-secondary shrink-0 relative",
          !props.active &&
            "border-none hover:bg-background-primary_hover/50 duration-100 transition-colors",
        )}
        animate={{
          width: props.active ? "312px" : "90px",
          opacity: props.active ? 1 : 0.25,
        }}
        transition={{ duration: 0.15, ease: [0.86, 0, 0.07, 1] }}
      >
        <Image
          src={props.illustrationUrl}
          width={512}
          height={289}
          alt="Illustration"
          className="h-[289px] w-[512px] object-cover"
        />
        <motion.div
          className="w-5 h-5 absolute left-xl top-xl grayscale-100"
          animate={{
            opacity: !props.active ? 1 : 0,
          }}
        >
          <Image
            src={props.faviconUrl}
            width={20}
            height={20}
            alt={`${props.companyName} favicon`}
            className="h-5 w-5"
          />
        </motion.div>
      </motion.div>
      <motion.div
        className="min-w-0 overflow-hidden"
        animate={{
          width: props.active ? "auto" : "0px",
          pointerEvents: props.active ? "auto" : "none",
        }}
        transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
      >
        <AnimatePresence mode="wait">
          {props.active && (
            <motion.div
              key={`content-${props.href}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="p-6xl flex flex-col gap-y-6xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.15,
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="h-[48px] w-[168px]"
              >
                <Image
                  src={props.companyLogoUrl}
                  width={168}
                  height={48}
                  alt={props.companyName}
                  className="h-[48px] w-[168px]"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.2,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="flex w-full flex-col gap-y-md overflow-hidden"
              >
                <div className="flex gap-x-lg">
                  <motion.div
                    key={`case-study-${props.href}-tag-link`}
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      delay: 0.25,
                      duration: 0.35,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="py-xs px-lg rounded-sm border-border-primary border shadow-xs text-xs leading-xs text-bluelight-500 font-medium flex items-center"
                  >
                    <ArrowUpRight size={12} className="shrink-0" />
                  </motion.div>
                  {props.tags.map((t, i) => (
                    <motion.div
                      key={`case-study-${props.href}-tag-${t}`}
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        delay: 0.35 + i * 0.06,
                        duration: 0.35,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="py-xs px-lg rounded-sm border-border-primary border shadow-xs text-xs leading-xs text-text-secondary font-medium line-clamp-1"
                    >
                      {t}
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.35,
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="w-full flex flex-col space-y-4xl"
                >
                  <div className="flex flex-col space-y-xl">
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.4,
                        duration: 0.35,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="text-text-primary text-display-md leading-display-md font-bold line-clamp-1"
                    >
                      {props.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.45,
                        duration: 0.35,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="text-text-tertiary text-md leading-md line-clamp-2 max-w-140"
                    >
                      {props.description}
                    </motion.p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.5,
                      duration: 0.35,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                  >
                    <Link
                      href={props.href}
                      className={cn(
                        buttonVariants({ variant: "linkGray", size: "link" }),
                        "w-min flex gap-x-sm",
                      )}
                    >
                      <span className="font-semibold">Read case study</span>
                      <ArrowRight
                        size="20px"
                        className="text-component-icons-icons-icon-brand"
                      />
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

const CaseStudyPreviewTablet: FC<
  CaseStudy & { active: boolean; onClick: () => void }
> = (props) => {
  return (
    <motion.div
      className="w-full hidden tablet:flex desktop:hidden border-border-secondary border rounded-xs oveflow-hidden bg-background-primary"
      animate={{
        height: props.active ? "356px" : "80px",
      }}
      transition={{ duration: 0.6, ease: [0.86, 0, 0.07, 1] }}
      onClick={props.onClick}
    >
      <motion.div
        className={cn(
          "flex items-center justify-center relative min-w-0 shrink-0 border-border-secondary h-full overflow-hidden bg-[url(/patterns/square-small.svg)]",
          !props.active && "border-none",
          "border-r",
        )}
        animate={{
          width: props.active ? "160px" : "100%",
        }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.86, 0, 0.07, 1] }}
      >
        <motion.div
          animate={{ opacity: props.active ? 1 : 0.25 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.86, 0, 0.07, 1] }}
          className="absolute h-[289px] w-[512px] max-w-[512px]"
        >
          <Image
            src={props.illustrationUrl}
            width={512}
            height={289}
            alt="Illustration"
            className="h-[289px] w-[512px] max-w-[512px]"
          />
        </motion.div>
        <motion.div
          animate={{ opacity: props.active ? 0 : 1 }}
          transition={{ duration: 0.6, ease: [0.86, 0, 0.07, 1] }}
          className="absolute z-30"
        >
          <Image
            src={props.companyLogoUrl}
            width={83}
            height={24}
            alt={props.companyName}
            className="grayscale-100"
          />
        </motion.div>
      </motion.div>
      <motion.div
        className="overflow-hidden min-w-0"
        animate={{ width: props.active ? "auto" : "0px" }}
        transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
      >
        <AnimatePresence mode="wait">
          {props.active && (
            <motion.div
              key={`content-mobile-${props.href}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 1, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-col gap-y-xl tablet:gap-y-4xl"
            >
              <div className="p-xl tablet:p-3xl tablet:pb-0 border-b border-border-secondary border-dashed tablet:border-none">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 1,
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="h-[48px] w-[168px]"
                >
                  <Image
                    src={props.companyLogoUrl}
                    width={168}
                    height={48}
                    alt={props.companyName}
                    className="h-[48px] w-[168px]"
                  />
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 1.05,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="flex w-full flex-col gap-y-md overflow-hidden p-xl pt-0 tablet:p-3xl tablet:pt-0"
              >
                <div className="flex gap-x-lg">
                  <motion.div
                    key={`case-study-${props.href}-tag-link-mobile`}
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      delay: 1.1,
                      duration: 0.35,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="py-xs px-lg rounded-sm border-border-primary border shadow-xs text-xs leading-xs text-bluelight-500 font-medium flex items-center"
                  >
                    <ArrowUpRight size={12} className="shrink-0" />
                  </motion.div>
                  {props.tags.map((t, i) => (
                    <motion.div
                      key={`case-study-${props.href}-tag-mobile-${t}`}
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        delay: 1.15 + i * 0.05,
                        duration: 0.35,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="py-xs px-lg rounded-sm border-border-primary border shadow-xs text-xs leading-xs text-text-secondary font-medium line-clamp-1"
                    >
                      {t}
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 1.2,
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="w-full flex flex-col space-y-4xl"
                >
                  <div className="flex flex-col space-y-xl">
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 1.25,
                        duration: 0.35,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="text-text-primary font-bold text-display-sm leading-display-sm line-clamp-2"
                    >
                      {props.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 1.3,
                        duration: 0.35,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="text-text-tertiary text-md leading-md line-clamp-2"
                    >
                      {props.description}
                    </motion.p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 1.35,
                      duration: 0.35,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                  >
                    <Link
                      href={props.href}
                      className={cn(
                        buttonVariants({ variant: "linkGray", size: "link" }),
                        "w-min flex gap-x-sm",
                      )}
                    >
                      <span className="font-semibold">Read case study</span>
                      <ArrowRight
                        size="20px"
                        className="text-component-icons-icons-icon-brand"
                      />
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const CaseStudyPreviewMobile: FC<
  CaseStudy & { active: boolean; onClick: () => void }
> = (props) => {
  return (
    <motion.div
      className="w-full flex tablet:hidden border-border-secondary border rounded-xs oveflow-hidden bg-background-primary"
      animate={{
        height: props.active ? "356px" : "80px",
      }}
      transition={{ duration: 0.6, ease: [0.86, 0, 0.07, 1] }}
      onClick={props.onClick}
    >
      <motion.div
        className={cn(
          "flex items-center justify-center relative min-w-0 shrink-0 border-border-secondary h-full overflow-hidden bg-[url(/patterns/square-small.svg)]",
          !props.active && "border-none",
        )}
        animate={{
          width: props.active ? "0px" : "100%",
        }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.86, 0, 0.07, 1] }}
      >
        <motion.div
          animate={{ opacity: props.active ? 1 : 0.25 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.86, 0, 0.07, 1] }}
          className="absolute h-[289px] w-[512px] max-w-[512px]"
        >
          <Image
            src={props.illustrationUrl}
            width={512}
            height={289}
            alt="Illustration"
            className="h-[289px] w-[512px] max-w-[512px]"
          />
        </motion.div>
        <motion.div
          animate={{ opacity: props.active ? 0 : 1 }}
          transition={{ duration: 0.6, ease: [0.86, 0, 0.07, 1] }}
          className="absolute z-30"
        >
          <Image
            src={props.companyLogoUrl}
            width={83}
            height={24}
            alt={props.companyName}
            className="grayscale-100"
          />
        </motion.div>
      </motion.div>
      <motion.div
        className="overflow-hidden min-w-0"
        animate={{ width: props.active ? "auto" : "0px" }}
        transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
      >
        <AnimatePresence mode="wait">
          {props.active && (
            <motion.div
              key={`content-mobile-${props.href}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 1, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-col gap-y-xl tablet:gap-y-4xl"
            >
              <div className="p-xl tablet:p-3xl tablet:pb-0 border-b border-border-secondary border-dashed tablet:border-none">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 1,
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="h-[48px] w-[168px]"
                >
                  <Image
                    src={props.companyLogoUrl}
                    width={168}
                    height={48}
                    alt={props.companyName}
                    className="h-[48px] w-[168px]"
                  />
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 1.05,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="flex w-full flex-col gap-y-md overflow-hidden p-xl pt-0 tablet:p-3xl tablet:pt-0"
              >
                <div className="flex gap-x-lg">
                  <motion.div
                    key={`case-study-${props.href}-tag-link-mobile`}
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      delay: 1.1,
                      duration: 0.35,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="py-xs px-lg rounded-sm border-border-primary border shadow-xs text-xs leading-xs text-bluelight-500 font-medium flex items-center"
                  >
                    <ArrowUpRight size={12} className="shrink-0" />
                  </motion.div>
                  {props.tags.map((t, i) => (
                    <motion.div
                      key={`case-study-${props.href}-tag-mobile-${t}`}
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        delay: 1.15 + i * 0.05,
                        duration: 0.35,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="py-xs px-lg rounded-sm border-border-primary border shadow-xs text-xs leading-xs text-text-secondary font-medium line-clamp-1"
                    >
                      {t}
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 1.2,
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="w-full flex flex-col space-y-4xl"
                >
                  <div className="flex flex-col space-y-xl">
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 1.25,
                        duration: 0.35,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="text-text-primary font-bold text-display-sm leading-display-sm line-clamp-2"
                    >
                      {props.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 1.3,
                        duration: 0.35,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="text-text-tertiary text-md leading-md line-clamp-2"
                    >
                      {props.description}
                    </motion.p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 1.35,
                      duration: 0.35,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                  >
                    <Link
                      href={props.href}
                      className={cn(
                        buttonVariants({ variant: "linkGray", size: "link" }),
                        "w-min flex gap-x-sm",
                      )}
                    >
                      <span className="font-semibold">Read case study</span>
                      <ArrowRight
                        size="20px"
                        className="text-component-icons-icons-icon-brand"
                      />
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default CaseStudies;
