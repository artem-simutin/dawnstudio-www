"use client";

import React, { useState } from "react";
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
        className="fixed w-full border-b border-border-secondary h-20 flex items-center mx-auto desktop:border-x bg-background-primary z-50 overflow-y-hidden"
        transition={{
          duration: 0.3,
        }}
      >
        <div className="mx-auto max-w-full-page desktop:border-x border-border-secondary w-full h-full flex items-center">
          <div className="w-full max-w-max-width-desktop mx-auto flex gap-x-xl px-container-padding-mobile tablet:px-container-padding-tablet desktop:px-container-padding-desktop">
            <div className="flex items-center gap-x-6xl w-full">
              <div className="mb-[6px]">
                <Image
                  src="/logo-light.svg"
                  alt="Dawn Studio"
                  width={121}
                  height={32}
                />
              </div>
              <NavigationMenu className="hidden desktop:flex">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              href="/"
                            >
                              {/* <Icons.logo className="h-6 w-6" /> */}
                              <div className="mb-2 mt-4 text-lg font-medium">
                                shadcn/ui
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Beautifully designed components built with Radix
                                UI and Tailwind CSS.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <ListItem href="/docs" title="Introduction">
                          Re-usable components built using Radix UI and Tailwind
                          CSS.
                        </ListItem>
                        <ListItem
                          href="/docs/installation"
                          title="Installation"
                        >
                          How to install dependencies and structure your app.
                        </ListItem>
                        <ListItem
                          href="/docs/primitives/typography"
                          title="Typography"
                        >
                          Styles for headings, paragraphs, lists...etc
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/customers" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Customers
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/blog" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Blog
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
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
            className="w-full bg-background-primary fixed z-40 left-0 bottom-0 right-0 top-20 shadow-md"
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
                <MobileMenuNavItem />
                <MobileMenuNavItem />
                <MobileMenuNavItem />
                <MobileMenuNavItem />
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

const MobileMenuNavItem = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex flex-col">
      <Button
        variant="tertiary"
        className="py-lg px-container-padding-mobile tablet:px-container-padding-tablet gap-x-xl w-full h-auto justify-between"
        onClick={() => {
          setIsOpen((p) => !p);
        }}
      >
        <span className="text-text-secondary text-md leading-md font-semibold">
          Services
        </span>
        <div className="">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
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
            <span>Services</span>
          </div>
          <div className="w-full flex flex-col gap-y-xs">
            <Link
              href=""
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
                    MVP development
                  </span>
                  <span className="text-text-tertiary text-sm leading-sm line-clamp-2">
                    We develop you minimal viable product in 3 weeks. We develop
                    you minimal viable product in 3 weeks.
                  </span>
                </div>
                <LinkExternal01
                  size={16}
                  className="text-foreground-fg-quaternary"
                />
              </div>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;
