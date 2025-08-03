"use client";

import React, { FC, useState } from "react";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import config from "@/config";
import {
  ChevronDown,
  Code01,
  LinkExternal01,
  Menu01,
  X,
} from "untitledui-js/react";
import { AnimatePresence, motion } from "motion/react";
import useScrollDirection from "@/hooks/use-scroll-direction";
import { ChevronUp } from "untitledui-js/react";
import { Link as LinkType } from "@/config";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollDir = useScrollDirection({
    threshold: 30,
    disabled: mobileOpen,
  });

  return (
    <>
      <motion.nav
        animate={{
          y: scrollDir === "down" ? "-100%" : "0%",
        }}
        className="fixed w-full border-b border-border-secondary h-20 flex items-center mx-auto desktop:border-x bg-background-primary z-50"
        transition={{
          duration: 0.3,
        }}
      >
        <div className="mx-auto max-w-full-page desktop:border-x border-border-secondary w-full h-full flex items-center">
          <div className="w-full max-w-max-width-desktop mx-auto flex gap-x-xl px-container-padding-mobile tablet:px-container-padding-tablet desktop:px-container-padding-desktop">
            <div className="flex items-center gap-x-6xl w-full">
              <div className="mb-[6px]">
                <Link href="/">
                  <Image
                    src="/logo-light.svg"
                    alt="Dawn Studio"
                    width={121}
                    height={32}
                  />
                </Link>
              </div>
              <NavigationMenu className="hidden desktop:flex">
                <NavigationMenuList>
                  {config.navigationLinks.map((link) => {
                    if (link.subLinks) {
                      return (
                        <NavigationMenuItem key={`link-${link.href}`}>
                          <NavigationMenuTrigger>
                            {link.title}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent className="flex-col p-0 w-full max-w-[400px]">
                            {link.subMenuTitle && (
                              <>
                                <div className="py-xl px-4xl">
                                  <span className="text-text-quaternary text-sm leading-sm font-semibold">
                                    {link.subMenuTitle}
                                  </span>
                                </div>
                                <div className="border-y border-border-tertiary h-1.5 w-full bg-[url(/patterns/slash-darker.svg)]"></div>
                              </>
                            )}
                            <ul className="grid gap-3 p-2xl md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                              {link.subLinks.map((subLink) => (
                                <ListItem
                                  key={`sublink-${subLink.href}`}
                                  {...subLink}
                                />
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      );
                    }

                    return (
                      <NavigationMenuItem key={`link-${link.href}`}>
                        <NavigationMenuLink
                          href={link.href}
                          className={navigationMenuTriggerStyle()}
                        >
                          {link.title}
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    );
                  })}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <Link
              href={config.calComLink}
              target="_blank"
              className={cn(
                buttonVariants({
                  variant: "primary",
                }),
                "hidden desktop:flex",
              )}
            >
              Book a call
            </Link>
            {mobileOpen ? (
              <Button
                variant="tertiary"
                className="flex desktop:hidden !p-md w-10 h-10"
                onClick={() => {
                  setMobileOpen(false);
                }}
              >
                <X size={24} className="!w-6 !h-6 shrink-0" />
              </Button>
            ) : (
              <Button
                variant="tertiary"
                className="flex desktop:hidden !p-md w-10 h-10"
                onClick={() => {
                  setMobileOpen(true);
                }}
              >
                <Menu01 size={24} className="!w-6 !h-6 shrink-0" />
              </Button>
            )}
          </div>
        </div>
      </motion.nav>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{
              duration: 0.3,
            }}
            className="w-full bg-background-primary fixed z-40 left-0 bottom-0 right-0 top-20 shadow-sm"
            variants={{
              hidden: {
                y: "-100%",
              },
              visible: {
                y: 0,
              },
              exit: {
                y: "-100%",
              },
            }}
          >
            <div className="w-full flex h-full flex-col">
              <div className="py-2xl flex-1 space-y-xs">
                {config.navigationLinks.map((link) => (
                  <MobileMenuNavItem key={`link-${link.href}`} {...link} />
                ))}
              </div>
              <div className="w-full pt-md pb-container-padding-mobile px-container-padding-mobile">
                <Button className="w-full">
                  <Code01 size={20} />
                  Book a free call
                </Button>
              </div>
              <div className="w-full h-1.5 bg-[url(/patterns/slash-darker.svg)] border-t border-border-tertiary"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const MobileMenuNavItem: FC<LinkType> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex flex-col">
      <Button
        variant="tertiary"
        className="py-lg px-container-padding-mobile tablet:px-container-padding-tablet gap-x-xl w-full h-auto justify-between"
        onClick={() => {
          if (props.subLinks && props.subLinks.length > 0) {
            setIsOpen((p) => !p);
          }
        }}
      >
        <span className="text-text-secondary text-md leading-md font-semibold">
          {props.title}
        </span>
        {props.subLinks && props.subLinks.length > 0 && (
          <div className="">
            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
        )}
      </Button>
      <motion.div
        initial={{
          height: 0,
        }}
        animate={{
          height: isOpen ? "auto" : 0,
        }}
        transition={{
          duration: 0.3,
        }}
        className="overflow-hidden"
      >
        <div className="py-lg flex flex-col gap-y-lg">
          <div className="w-full flex gap-x-[10px] text-text-quaternary px-container-padding-mobile tablet:px-container-padding-tablet text-xs leading-xs">
            <span>{"///"}</span>
            <span>{props.title}</span>
          </div>
          <div className="w-full flex flex-col gap-y-xs">
            {props.subLinks &&
              props.subLinks.map((subLink) => (
                <Link
                  key={`sublink-${subLink.href}`}
                  href={subLink.href}
                  className="flex px-container-padding-mobile tablet:px-container-padding-tablet py-lg"
                >
                  <div className="pl-xl pr-md bg-[url(/patterns/square-small.svg)] flex items-center">
                    <Image
                      src="/illustrations/cube.svg"
                      width={40}
                      height={32}
                      alt="Cube"
                    />
                  </div>
                  <div className="w-full flex items-center pl-md gap-x-3xl">
                    <div className="w-full flex flex-col gap-y-xs">
                      <span className="text-text-primary text-md leading-md font-semibold">
                        {subLink.title}
                      </span>
                      {subLink.description && (
                        <span className="text-text-tertiary text-sm leading-sm line-clamp-2">
                          {subLink.description}
                        </span>
                      )}
                    </div>
                    <LinkExternal01
                      size={16}
                      className="text-foreground-fg-quaternary"
                    />
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ListItem: FC<Omit<LinkType, "subLinks">> = (props) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a className="flex flex-row" href={props.href}>
          {props.illustration && (
            <div className="w-8xl bg-[url(/patterns/square-small.svg)] shrink-0 items-center flex relative">
              <Image
                src={props.illustration.src}
                width={props.illustration.width}
                height={props.illustration.height}
                alt={props.illustration.alt}
                className={cn(
                  "shrink-0 absolute left-3xl",
                  props.illustration.className,
                )}
              />
            </div>
          )}

          <div className="px-3xl py-xl flex-col flex space-y-xs w-full">
            <div className="text-md leading-md font-semibold text-text-primary line-clamp-1">
              {props.title}
            </div>
            <p className="line-clamp-2 text-sm leading-sm text-text-tertiary">
              {props.description}
            </p>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
};

export default Header;
