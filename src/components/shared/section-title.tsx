import React, { FC } from "react";
import { ChevronDown } from "untitledui-js/react";

interface Props {
  subTitle: string;
  title: string;
  description: string;
}

const SectionTitle: FC<Props> = ({ title, description, subTitle }) => {
  return (
    <div className="w-full border-b border-border-secondary">
      <div className="w-full px-container-padding-desktop py-9xl max-w-max-width-desktop mx-auto">
        <div className="flex flex-col space-y-lg max-w-192">
          <div className="flex gap-x-xs">
            <div className="py-[3px] px-md rounded-lg border border-border-primary flex">
              <span className="text-text-secondary text-xs leading-xs font-medium">
                {subTitle}
              </span>
            </div>
            <div className="py-xs px-md rounded-lg border border-border-primary flex items-center">
              <ChevronDown size={16} className="text-utility-blue-light-400" />
            </div>
          </div>
          <h2 className="text-text-primary text-display-lg leading-display-lg font-semibold">
            {title}
          </h2>
          <p className="text-text-tertiary text-xl leading-xl">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
