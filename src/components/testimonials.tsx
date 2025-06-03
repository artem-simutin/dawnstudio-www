import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { FC } from "react";
import SectionTitle from "./shared/section-title";

const Testimonials = () => {
  return (
    <section className="w-full flex border-b border-border-secondary flex-col max-w-full-page border-x">
      <SectionTitle
        subTitle="Testimonials"
        title="What do our customers say?"
        description="Hear directly from the founders of companies that have utilized our service."
      />
      <div className="w-full flex flex-col mx-auto space-y-4xl p-8xl bg-[url(/patterns/dot.svg)]">
        <VideoCard />
        <div className="w-full flex gap-x-4xl">
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
      <div className="flex w-full gap-x-7xl p-4xl border-b border-border-secondary">
        <div className="max-w-[577px] p-xs rounded-xs border border-border-secondary shadow-xs w-full">
          <Image
            src="/illustrations/testimonial-thumbnail.png"
            width={569}
            height={320}
            className="object-cover h-[320px] w-full rounded-[2px]"
            alt="Video"
          />
        </div>
        <div className="w-full pt-4xl pb-xl flex flex-col justify-between">
          <div className="flex flex-col space-y-xl">
            <div className="flex gap-x-4xl">
              <Image
                src="/illustrations/quotes.svg"
                width={27}
                height={16}
                alt="Quotes"
              />
              <div className="h-4 w-10xl bg-[url(/patterns/slash-darker.svg)]"></div>
            </div>
            <p className="text-text-secondary text-xl leading-xl font-medium">
              Yes! Now I can have shortcuts to run and debug tests. Ever since
              snippets were added, Dawn has all of the features I could ask for
              in an editor.
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
        className,
      )}
    >
      <div className="w-full flex flex-col space-y-6xl p-4xl border-b border-border-secondary">
        <div className="flex flex-col space-y-lg">
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
            <span className="text-text-tertiary text-md leading-md">
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
