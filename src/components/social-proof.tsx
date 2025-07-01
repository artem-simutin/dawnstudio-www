import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { LinkExternal01 } from "untitledui-js/react";

interface Company {
  name: string;
  logoSrc: string;
  logoWidth: number;
  logoHeight: number;
  href: string;
  tags: string[];
  websiteScreenshotSrc: string;
}

const companies: Company[] = [
  {
    name: "Docutiv",
    logoSrc: "/companies/docutiv.svg",
    logoWidth: 101,
    logoHeight: 32,
    href: "https://www.docutiv.net/",
    tags: ["Web", "SaaS", "Healthcare"],
    websiteScreenshotSrc: "/companies/landings/docutiv.net.png",
  },
  {
    name: "Paperfly",
    logoSrc: "/companies/paperfly.svg",
    logoWidth: 101,
    logoHeight: 32,
    href: "https://www.paperfly.app/",
    tags: ["Web", "SaaS", "B2B", "Procrutment"],
    websiteScreenshotSrc: "/companies/landings/paperfly.app.png",
  },
  {
    name: "ADL Activigram",
    logoSrc: "/companies/cananeurology.svg",
    logoWidth: 101,
    logoHeight: 32,
    href: "https://apps.apple.com/us/app/adl-activigram/id6741215124",
    tags: ["Mobile", "Study", "Healthcare"],
    websiteScreenshotSrc: "/companies/landings/adl.png",
  },
  {
    name: "Prxy.ai",
    logoSrc: "/companies/prxyai.svg",
    logoWidth: 101,
    logoHeight: 32,
    href: "https://www.prxyai.com/",
    tags: ["Web", "B2B", "Marketing"],
    websiteScreenshotSrc: "/companies/landings/prxyai.com.png",
  },
];

const SocialProof = () => {
  return (
    <section className="w-full flex flex-col max-w-full-page desktop:border-x border-b border-border-secondary items-center">
      <div className="w-full flex border-b border-border-secondary">
        <div className="w-full max-w-120 h-6xl desktop:h-7xl flex pr-4xl pl-container-padding-mobile tablet:pl-4xl desktop:pl-[112px] items-center flex">
          <span className="text-text-quaternary text-xs leading-xs font-medium">
            Among our clients:
          </span>
        </div>
        <div className="border-l border-border-secondary flex bg-[url(/patterns/slash.svg)] w-full"></div>
      </div>
      <div className="flex w-full py-8xl px-4xl gap-x-4xl bg-background-secondary/50">
        {companies.map((c) => (
          <Card key={c.href} {...c} />
        ))}
      </div>
    </section>
  );
};

const Card: FC<Company> = (props) => {
  return (
    <Link
      href={props.href}
      className="flex flex-col border border-border-secondary rounded-xs w-[400px] bg-background-primary shadow-[0_4px_1px_0_var(--color-effects-shadow-xs)]"
      target="_blank"
    >
      <div className="w-full flex items-center justify-between p-4xl border-b border-border-secondary">
        <Image src={props.logoSrc} width={101} height={32} alt={props.name} />
        <LinkExternal01 size={20} className="text-text-quaternary" />
      </div>
      <Image
        src={props.websiteScreenshotSrc}
        width={400}
        height={192}
        alt={props.name}
        className="w-full border-b border-border-secondary"
      />
      <div className="flex w-full gap-x-md p-xl border-border-secondary border-b">
        {props.tags.map((tag) => (
          <span
            key={`company-tag-${props.name}-tag-${tag}`}
            className="border border-border-secondary rounded-lg py-xs px-md text-xs font-medium text-text-secondary leading-xs"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="w-full bg-[url(/patterns/slash-darker.svg)] h-1.5"></div>
    </Link>
  );
};

export default SocialProof;
