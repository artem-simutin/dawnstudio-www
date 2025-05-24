import React, { FC } from "react";

interface Props {
  leftText: string;
  rightText: string;
}

const SectionDivider: FC<Props> = ({ leftText, rightText }) => {
  return (
    <div className="w-full flex gap-x-4xl h-7xl justify-stretch border-b border-border-secondary max-w-full-page border-x">
      <div className="bg-[url(/patterns/slash.svg)] grow border-r border-border-secondary"></div>
      <div className="w-full max-w-[1312px] flex items-center justify-between">
        <span className="text-foreground-quaternary text-xs leading-xs uppercase whitespace-pre">
          {leftText}
        </span>
        <span className="text-foreground-quaternary text-xs leading-xs uppercase">
          {rightText}
        </span>
      </div>
      <div className="bg-[url(/patterns/slash.svg)] grow border-l border-border-secondary whitespace-pre"></div>
    </div>
  );
};

export default SectionDivider;
