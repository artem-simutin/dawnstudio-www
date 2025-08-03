import React, { ComponentProps, FC, PropsWithChildren } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col">
      {/* decoration */}
      <div className="border-y desktop:border border-border-secondary h-4 bg-[url(/patterns/slash.svg)]"></div>

      {/* main content */}
      <div className="max-w-container-desktop px-container-desktop py-6xl desktop:py-8xl">
        <div className="w-full max-w-max-width-desktop px-container-padding-mobile tablet:px-container-padding-tablet desktop:px-container-padding-desktop flex flex-col desktop:flex-row justify-between mx-auto gap-y-6xl">
          <div className="space-y-3xl w-full max-w-full desktop:max-w-80">
            <div className="w-full justify-between items-center flex">
              <div className="p-0 desktop:p-xl">
                <Image
                  src="/logo-light.svg"
                  width={121}
                  height={32}
                  alt="Dawn Studio"
                />
              </div>
              <div className="block desktop:hidden">
                <Socials />
              </div>
            </div>

            <span className="text-md leading-md text-text-tertiary">
              We develop your MVP, create your brand, and help you acquire your
              first customers.
            </span>
          </div>
          <div className="flex gap-x-4xl flex-col tablet:flex-row gap-y-4xl">
            <div className="space-y-xl flex flex-col w-80">
              <span className="text-text-quaternary font-semibold text-sm">
                Services
              </span>
              <div className="flex flex-col space-y-lg">
                <NavigationItem href="">MVP development</NavigationItem>
                <NavigationItem href="">Ongoing development</NavigationItem>
                <NavigationItem href="">Branding design</NavigationItem>
                <NavigationItem
                  href=""
                  badge={{
                    text: "New",
                  }}
                >
                  Market research
                </NavigationItem>
              </div>
            </div>

            <div className="gap-y-xl flex flex-col w-80">
              <span className="text-text-quaternary font-semibold text-sm">
                Resources
              </span>
              <div className="flex flex-col space-y-lg">
                <NavigationItem href="">Case Studies</NavigationItem>
                {/* <NavigationItem href="">Blog</NavigationItem> */}
                <NavigationItem href="">Book a call</NavigationItem>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* sub footer */}
      <div className="w-full pb-6xl pt-6xl border-border-secondary border-t">
        <div className="max-w-max-width-desktop flex justify-between items-center mx-auto px-container-padding-mobile tablet:px-container-padding-tablet desktop:px-container-padding-desktop">
          <span className="text-text-quaternary">
            © 2025 Dawn Studio. All rights reserved.
          </span>
          {/* icons */}
          <div className="hidden desktop:block">
            <Socials />
          </div>
        </div>
      </div>
    </footer>
  );
};

interface NavigationItemProps extends ComponentProps<typeof Link> {
  badge?: {
    text: string;
  };
}

const NavigationItem: FC<PropsWithChildren<NavigationItemProps>> = (props) => {
  return (
    <Link
      {...props}
      className={cn("flex gap-x-md items-center", props.className)}
    >
      <span className="text-text-tertiary text-md leading-md font-semibold">
        {props.children}
      </span>
      {props.badge && (
        <div className="px-sm py-xxs text-text-secondary text-xs leading-xs border border-border-primary font-medium shadow-xs rounded-sm">
          {props.badge.text}
        </div>
      )}
    </Link>
  );
};

const Socials = () => {
  return (
    <div className="flex gap-x-3xl">
      <Link href="https://x.com" target="_blank">
        <Image
          src="/social-media-icons/x.svg"
          width={24}
          height={24}
          alt="X.com"
        />
      </Link>
      <Link href="https://linkedin.com" target="_blank">
        <Image
          src="/social-media-icons/linkedin.svg"
          width={24}
          height={24}
          alt="LinkedIn"
        />
      </Link>
    </div>
  );
};

export default Footer;
