import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { FC } from "react";
import SectionTitle from "./shared/section-title";
import VideoPlayer from "./video-player";

const Testimonials = () => {
  return (
    <section className="w-full flex border-b border-border-secondary flex-col max-w-full-page desktop:border-x">
      <SectionTitle
        subTitle="Testimonials"
        title="What do our customers say?"
        description="Hear directly from the founders of companies that have utilized our service."
      />
      <div className="w-full flex flex-col mx-auto space-y-4xl px-xl py-6xl tablet:px-3xl tablet:py-7xl desktop:p-8xl bg-[url(/patterns/square-small.svg)] desktop:bg-[url(/patterns/dot.svg)]">
        <VideoCard />
        <div className="w-full flex gap-x-4xl space-y-lg flex-col desktop:flex-row">
          <TextCard />
          <TextCard />
          <TextCard />
        </div>
      </div>
    </section>
  );
};

const VideoCard = () => {
  return (
    <div className="w-full flex flex-col rounded-xs shadow-xs border border-border-secondary bg-background-primary">
      <div className="flex flex-col desktop:flex-row w-full gap-x-7xl p-0 desktop:p-4xl border-b border-border-secondary">
        <div className="w-full p-xl flex border-b border-dashed border-border-secondary desktop:hidden">
          <Image
            src="/companies/warpspeed.svg"
            width={134}
            height={32}
            alt="Warpspeed"
          />
        </div>
        <div className="max-w-full desktop:max-w-[577px] w-full p-xl desktop:p-0 border-b border-border-secondary desktop:border-none">
          <div className="p-xs rounded-xs border border-border-secondary shadow-xs w-full ">
            <VideoPlayer
              videoSrc="/testimonials/paperfly/video.mp4"
              thumbnailSrc="/testimonials/paperfly/thumbnail.png"
              className="rounded-xs"
            />
          </div>
        </div>

        <div className="w-full p-xl desktop:pt-4xl pb-xl flex flex-col justify-between space-y-3xl desktop:space-y-0">
          <div className="flex flex-col space-y-xl">
            <div className="hidden gap-x-4xl desktop:flex">
              <Image
                src="/illustrations/quotes.svg"
                width={27}
                height={16}
                alt="Quotes"
              />

              <div className="h-4 w-10xl bg-[url(/patterns/slash-darker.svg)]"></div>
            </div>
            <p className="text-text-secondary text-md leading-md tablet:text-lg tablet:leading-lg desktop:text-xl desktop:leading-xl font-medium">
              They not only delivered that product but offered help from go to
              market strategy, innovation, research... my overall experience
              with them has been stellar
            </p>
          </div>
          <div className="w-full flex justify-between items-end">
            <div className="flex flex-col">
              <div className="flex gap-x-xs items-center">
                <span className="text-text-primary text-md leading-md font-semibold">
                  Joel D.
                </span>
                <Image
                  src="/illustrations/verified-tick.svg"
                  width={16}
                  height={16}
                  alt="Verified Tick"
                />
              </div>
              <span className="text-text-tertiary text-md leading-md">
                Founder, Paperfly
              </span>
            </div>
            <Image
              src="/companies/paperfly.svg"
              width={134}
              height={32}
              alt="Paperfly"
              className="hidden desktop:block"
            />
          </div>
        </div>
      </div>
      <div className="h-1.5 bg-[url(/patterns/slash-darker.svg)]"></div>
    </div>
  );
};

interface Props {
  className?: string;
}

const TextCard: FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "w-full flex flex-col border border-border-secondary shadow-xs rounded-xs bg-background-primary",
        className
      )}
    >
      <div className="w-full flex flex-col space-y-3xl desktop:space-y-6xl p-xl desktop:p-4xl border-b border-border-secondary">
        <div className="flex flex-col space-y-md desktop:space-y-lg">
          <Image
            src="/companies/powersurge.svg"
            width={130}
            height={32}
            alt="Powersurge"
          />
          <p className="w-full text-text-tertiary text-md leading-md">
            My god it is so fast. Boot time, UI interaction, typing latency. I
            feel it. I knew VS Code always felt sluggish, but I didn&apos;t
            realize how good things could really be. I&apos;m honestly
            astounded.
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
            <span className="text-text-tertiary text-sm desktop:text-md leading-md">
              Principal Engineer, Powersurge
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-1.5 bg-[url(/patterns/slash-darker.svg)]"></div>
    </div>
  );
};

export default Testimonials;
