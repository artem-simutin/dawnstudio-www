import React, { FC } from "react";
import { Code01 } from "untitledui-js/react";
import Image from "next/image";
import SectionTitle from "./shared/section-title";

const Services = () => {
  return (
    <section className="w-full border-border-secondary flex flex-col max-w-full-page desktop:border-x border-b pb-8xl">
      <SectionTitle
        subTitle="Services"
        title="What we do"
        description="We help businesses build better digital products through design, development, and strategy."
        className="border-none"
      />
      <div className="w-full mx-auto flex flex-col border-border-secondary border-t max-w-max-width-desktop">
        <Row
          illustration={{
            src: "/illustrations/battery.svg",
            width: 133,
            height: 140,
            className: "absolute -left-[16px]",
            alt: "Battery",
          }}
          items={[
            {
              logoSrc: "/products/openai.svg",
              logoAlt: "OpenAI logo",
              logoWidth: 20,
              logoHeight: 20,
              title: "AI integration",
              content: "We help you add AI to your business where it's needed.",
            },
            {
              logoSrc: "/products/react.svg",
              logoAlt: "React logo",
              title: "Web development",
              content:
                "We build custom web applications that meet your business needs.",
            },
          ]}
        />
        <Row
          illustration={{
            src: "/illustrations/cold-email-system.svg",
            width: 140,
            height: 148,
            alt: "Watch integrations",
            className: "",
          }}
          items={[
            {
              logoSrc: "/products/expo.svg",
              logoAlt: "Expo logo",
              logoWidth: 20,
              logoHeight: 20,
              title: "Mobile development",
              content:
                "We build iOS and Android apps that your users will actually want to use.",
            },
            {
              logoSrc: "/products/figma.svg",
              logoAlt: "Figma logo",
              title: "Product design",
              content: "We help you with both your product and your brand",
            },
          ]}
        />
        <Row
          illustration={{
            src: "/illustrations/ball-rolling.svg",
            width: 163,
            height: 173,
            alt: "Watch integrations",
            className: "",
          }}
          items={[
            {
              logoSrc: "/products/google.svg",
              logoAlt: "Google logo",
              title: "Research and strategy",
              content:
                "We provide clear insights on your market, competition, and customers to guide product decisions.",
            },
            {
              logoSrc: "/products/google-ads.svg",
              logoAlt: "Google Ads logo",
              title: "Marketing support",
              content:
                "Visibility for your product through trusted marketing and branding partnerships.",
            },
          ]}
        />
      </div>
    </section>
  );
};

interface RowProps {
  items: {
    logoSrc: string;
    logoAlt: string;
    logoWidth?: number;
    logoHeight?: number;
    title: string;
    content: string;
  }[];
  illustration: {
    src: string;
    width: number;
    height: number;
    className: string;
    alt: string;
  };
}

const Row: FC<RowProps> = ({ items, illustration }) => {
  if (items.length !== 2) {
    throw new Error("The item count must be 2 in the row");
  }

  const item1 = items[0];
  const item2 = items[1];

  return (
    <div className="w-full flex border-b border-border-secondary desktop:border-x desktop:flex-row flex-col">
      <div className="w-full flex flex-col justify-center desktop:px-4xl desktop:py-8xl gap-y-3xl tablet:gap-y-4xl border-b tablet:border-r tablet:border-b-0 border-dashed border-border-secondary relative tablet:px-4xl tablet:py-7xl min-w-96 px-xl py-6xl">
        <div className="w-full flex flex-col space-y-lg max-w-96">
          <div className="flex gap-x-lg items-center">
            <div className="rounded-xs border border-border-primary w-4xl h-4xl flex justify-center items-center shadow-xs">
              <Image
                src={item1.logoSrc}
                width={item1.logoWidth ?? 24}
                height={item1.logoHeight ?? 24}
                alt={item1.logoAlt}
              />
            </div>
            <h3 className="text-text-primary text-display-xs leading-display-xs tablet:text-display-sm tablet:leading-display-sm font-medium desktop:font-semibold">
              {item1.title}
            </h3>
          </div>
          <p className="text-text-tertiary text-sm leading-sm tablet:text-md tablet:leading-md">
            {item1.content}
          </p>
        </div>
        <Code01
          size={20}
          className="absolute top-6 right-6 text-utility-gray-100 hidden desktop:block"
        />
      </div>
      <div className="w-full overflow-hidden flex items-center justify-center max-w-full desktop:max-w-[258px] bg-[url(/patterns/square-small.svg)] h-[240px] tablet:h-auto border-b desktop:border-b-0 desktop:border-r border-dashed border-border-secondary">
        <div
          className="relative"
          style={{
            width: illustration.width,
            height: illustration.height,
          }}
        >
          <Image
            src={illustration.src}
            width={illustration.width}
            height={illustration.height}
            alt={illustration.alt}
            className={illustration.className}
          />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center desktop:px-6xl desktop:py-8xl gap-y-3xl tablet:gap-y-4xl border-dashed border-border-secondary relative tablet:px-4xl tablet:py-7xl min-w-96 px-xl py-6xl">
        <div className="w-full flex flex-col space-y-lg max-w-96">
          <div className="flex gap-x-lg items-center">
            <div className="rounded-xs border border-border-primary w-4xl h-4xl flex justify-center items-center shadow-xs">
              <Image
                src={item2.logoSrc}
                width={item2.logoWidth ?? 24}
                height={item2.logoHeight ?? 24}
                alt={item2.logoAlt}
              />
            </div>
            <h3 className="text-text-primary text-display-xs leading-display-xs tablet:text-display-sm tablet:leading-display-sm font-medium desktop:font-semibold">
              {item2.title}
            </h3>
          </div>
          <p className="text-text-tertiary text-sm leading-sm tablet:text-md tablet:leading-md">
            {item2.content}
          </p>
        </div>
        {/* <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "linkGray", size: "link" }),
                "w-min"
              )}
            >
              <span>Learn more</span>
              <ArrowRight size="20px" />
            </Link> */}

        <Code01
          size={20}
          className="absolute top-6 right-6 text-utility-gray-100 hidden desktop:block"
        />
      </div>
    </div>
  );
};

export default Services;
