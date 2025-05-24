import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { FC } from "react";

const Testimonials = () => {
  return (
    <section className="w-full flex border-b border-border-secondary flex-col space-y-7xl py-9xl max-w-full-page border-x">
      <div className="w-full max-w-max-width-desktop mx-auto flex flex-col space-y-2xl">
        <h2 className="text-text-primary font-semibold text-display-md leading-display-md w-full text-center">
          What do our customers say?
        </h2>
        <p className="text-xl leading-xl text-text-tertiary w-full text-center">
          Hear from the Founders of companies.
        </p>
      </div>
      <div className="w-full max-w-max-width-desktop border border-border-secondary flex flex-col mx-auto">
        <VideoCard />
        <div className="h-7xl border-y border-border-secondary"></div>
        <div className="w-full flex">
          <TextCard className="border-r border-border-secondary" />
          <TextCard className="border-r border-border-secondary" />
          <TextCard />
        </div>
      </div>
    </section>
  );
};

const VideoCard = () => {
  return (
    <div className="w-full flex gap-x-7xl p-4xl">
      <Image
        src="/illustrations/testimonial-thumbnail.png"
        width={569}
        height={320}
        className="object-cover h-[320px] w-full"
        alt="Video"
      />
      <div className="w-full pt-4xl pb-xl flex flex-col justify-between">
        <div className="flex flex-col space-y-xl">
          <Image
            src="/illustrations/quotes.svg"
            width={27}
            height={16}
            alt="Quotes"
          />
          <p className="text-text-primary text-xl leading-xl font-medium">
            Yes! Now I can have shortcuts to run and debug tests. Ever since
            snippets were added, Dawn has all of the features I could ask for in
            an editor.
          </p>
        </div>
        <div className="w-full flex justify-between items-end">
          <div className="flex flex-col">
            <div className="flex gap-x-xs items-center">
              <span className="text-text-primary text-md leading-md font-semibold">
                Sienna Hewitt
              </span>
              <Image
                src="/illustrations/verified-tick.svg"
                width={16}
                height={16}
                alt="Verified Tick"
              />
            </div>
            <span className="text-text-tertiary text-md leading-md">
              Project Manager, Warpspeed
            </span>
          </div>
          <Image
            src="/companies/warpspeed.svg"
            width={134}
            height={32}
            alt="Warpspeed"
          />
        </div>
      </div>
    </div>
  );
};

interface Props {
  className?: string;
}

const TextCard: FC<Props> = ({ className }) => {
  return (
    <div className={cn("w-full flex flex-col space-y-6xl p-4xl", className)}>
      <div className="flex flex-col space-y-lg">
        <Image
          src="/companies/powersurge.svg"
          width={130}
          height={32}
          alt="Powersurge"
        />
        <p className="w-full text-text-tertiary text-md leading-md">
          My god it is so fast. Boot time, UI interaction, typing latency. I
          feel it. I knew VS Code always felt sluggish, but I didn't realize how
          good things could really be. I'm honestly astounded.
        </p>
      </div>
      <div className="flex gap-x-lg">
        <Image
          src="/avatars/man.png"
          width={48}
          height={48}
          className="rounded-full border border-[rgba(0, 0, 0, 0.08)]"
          alt="Person"
        />
        <div className="flex flex-col">
          <div className="flex gap-x-xs items-center">
            <span className="text-text-primary text-md leading-md font-semibold">
              Matt Baker
            </span>
            <Image
              src="/illustrations/verified-tick.svg"
              width={16}
              height={16}
              alt="Verified Tick"
            />
          </div>
          <span className="text-text-tertiary text-md leading-md">
            Principal Engineer, Powersurge
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
