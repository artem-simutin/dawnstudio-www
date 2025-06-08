import { cn } from "@/lib/utils";
import React, { FC } from "react";
import { ChevronDown } from "untitledui-js/react";

interface Props {
  subTitle: string;
  title: string;
  description: string;
  className?: string;
}

const SectionTitle: FC<Props> = ({
  title,
  description,
  subTitle,
  className,
}) => {
  return (
    <div className={cn("w-full border-b border-border-secondary", className)}>
      <div className="w-full px-container-padding-mobile tablet:px-container-padding-tablet desktop:px-container-padding-desktop py-6xl tablet:py-7xl desktop:py-8xl max-w-max-width-desktop mx-auto">
        <div className="flex flex-col space-y-lg max-w-192">
          <div className="flex gap-x-xs">
            <div className="py-[3px] px-[7px] rounded-lg border border-border-primary flex">
              <span className="text-text-secondary text-xs leading-xs font-medium">
                {subTitle}
              </span>
            </div>
            <div className="py-[3px] px-[7px] rounded-lg border border-border-primary flex items-center">
              <ChevronDown size={16} className="text-utility-blue-light-400" />
            </div>
          </div>
          <h2 className="text-text-primary text-display-sm tablet:text-display-md desktop:text-display-lg leading-display-sm tablet:leading-display-md desktop:leading-display-lg font-semibold">
            {title}
          </h2>
          <p className="text-text-tertiary text-md tablet:text-lg desktop:text-xl leading-md tablet:leading-lg desktop:leading-xl">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
