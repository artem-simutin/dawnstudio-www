import React, { FC } from "react";

interface Props {
  // subTitle: string;
  title: string;
  description: string;
}

const SectionTitle: FC<Props> = ({ title, description }) => {
  return (
    <div className="w-full px-container-padding-desktop">
      <div className="flex flex-col space-y-lg max-w-192">
        {/* <span className="text-text-brand-secondary text-md leading-md font-semibold">
          {subTitle}
        </span> */}
        <h2 className="text-text-primary text-display-md leading-display-md font-semibold">
          {title}
        </h2>
        <p className="text-text-tertiary text-xl leading-xl">{description}</p>
      </div>
    </div>
  );
};

export default SectionTitle;
