import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Bookmark } from "untitledui-js/react";

const Hero = () => {
  return (
    <section className="border-b border-border-secondary w-full pt-10xl pb-9xl">
      <div className="mx-auto px-container-padding-desktop max-w-max-width-desktop flex flex-col space-y-7xl">
        <div className="flex flex-col w-full space-y-4xl items-center">
          <div className="w-full flex justify-between px-4xl max-w-192">
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
                  <div className="px-xl py-lg bg-background-secondary border border-border-secondary rounded-md">
                    <span className="text-display-xl leading-[100%] font-bold bg-clip-text bg-gradient-to-r from-brand-600 to-brand-500 text-transparent">
                      client outreach
                    </span>
                  </div>
                </div>
                <h1 className="text-text-primary text-display-xl leading-display-xl font-bold">
                  with AI automations
                </h1>
              </div>
              <p className="w-full text-center text-text-tertiary max-w-140">
                Experience the future of business with intelligent, scalable
                automation solutions tailored to your needs.
              </p>
            </div>
            <div className="flex gap-x-xl w-full justify-center">
              <Button>
                Book a call <Bookmark size="20px" />
              </Button>
              <Button variant="secondary">Our Projects</Button>
            </div>
          </div>
        </div>
        <div className="w-full px-9xl">
          <Image
            src="/illustrations/card-terminal.svg"
            width={1024}
            height={728}
            className="w-full h-auto"
            alt="Cash Terminal"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
