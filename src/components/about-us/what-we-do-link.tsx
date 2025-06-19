import Link from "next/link";
import Image from "next/image";
import { LinkExternal01 } from "untitledui-js/react";

const WhatWeDoLink = ({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) => {
  return (
    <Link
      className="flex  w-full justify-between items-center p-4 pr-6 gap-6"
      href={href}
    >
      <div className="flex gap-3">
        <div className="bg-[url(/patterns/square-small.svg)] w-7xl flex items-center justify-center shrink-0">
          <Image
            src="/illustrations/cube.svg"
            alt="cube"
            width={40}
            height={32}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-text-primary text-md font-semibold">{title}</p>
          <p className="text-text-tertiary text-sm font-normal line-clamp-2">
            {description}
          </p>
        </div>
      </div>

      <LinkExternal01 className="h-4 w-4 text-foreground-fg-quaternary shrink-0" />
    </Link>
  );
};

export default WhatWeDoLink;
