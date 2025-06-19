import { Cursor02 } from "untitledui-js/react";

const OurValuesCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="border border-border-secondary shadow-xs  rounded-xs">
      <div className="p-4 tablet:p-6 desktop:p-8 flex flex-col gap-2">
        <div className="flex gap-3 items-center">
          <Cursor02 className="h-4 w-4 text-text-secondary" />
          <p className="text-xl font-semibold text-text-secondary">{title}</p>
        </div>
        <p className="text-text-tertiary text-md font-normal">{description}</p>
      </div>
      <div className="bg-[url(/patterns/slash-darker.svg)] w-full h-2 border-t border-border-secondary" />
    </div>
  );
};
export default OurValuesCard;
