"use client";

import React, { FC } from "react";
import SectionTitle from "./shared/section-title";
import Image from "next/image";
import {
  AnnotationInfo,
  Feather,
  HeartHand,
  Speedometer03,
  Wallet03,
} from "untitledui-js/react";

const guarantees: ItemCardProps[] = [
  {
    title: "Complete Satisfaction",
    description:
      "If you're not completely satisfied with our service, we'll refund 100% of your investment.",
    tags: ["100% Satisfaction", "Money back"],
  },
  {
    title: "Complete Satisfaction",
    description:
      "If you're not completely satisfied with our service, we'll refund 100% of your investment.",
    tags: ["100% Satisfaction", "Money back"],
  },
  {
    title: "Complete Satisfaction",
    description:
      "If you're not completely satisfied with our service, we'll refund 100% of your investment.",
    tags: ["100% Satisfaction", "Money back"],
  },
];

// const Guarantees = () => {
//   const [openItem, setOpenItem] = useState("1");
//
//   return (
//     <section className="w-full border-b border-border-secondary py-9xl space-y-7xl flex flex-col max-w-full-page border-x">
//       <div className="w-full mx-auto max-w-max-width-desktop">
//         <SectionTitle
//           subTitle="Guarantees"
//           title="It's our promises"
//           description="We believe in the quality of our work — so much so that we back it with rock-solid guarantees. If you're not satisfied, neither are we."
//         />
//       </div>
//       <div className="w-full max-w-max-width-desktop border border-border-secondary mx-auto flex">
//         <div className="flex flex-col max-w-140 w-full border-r border-border-secondary">
//           <Accordion type="single" value={openItem} onValueChange={setOpenItem}>
//             {guarantees.map((g) => (
//               <Item
//                 key={`guarantee-accordion-item-${g.value}`}
//                 value={g.value}
//                 title={g.title}
//                 content={g.content}
//                 icon={g.icon}
//                 onClick={() => {
//                   setOpenItem(g.value);
//                 }}
//               />
//             ))}
//           </Accordion>
//         </div>
//         <div className="w-full flex items-center justify-center">
//           <Image
//             src="/illustrations/guarantees.svg"
//             alt="Illustration"
//             width={526}
//             height={320}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

const NewGuarantees = () => {
  return (
    <section className="w-full">
      <div className="w-full flex flex-col mx-auto max-w-full-page border-x border-b border-border-secondary">
        <div className="w-full flex mx-auto max-w-max-width-desktop">
          <SectionTitle
            subTitle="Guarantees"
            title="It's our promises"
            description="We believe in the quality of our work — so much so that we back it with rock-solid guarantees. If you're not satisfied, neither are we."
            className="border-none"
          />
          <div className="w-20 bg-[url(/patterns/slash.svg)]"></div>
        </div>
      </div>
      <div className="w-full flex max-w-full-page bg-[url(/patterns/dot.svg)] px-4xl border-x border-border-secondary mx-auto">
        <div className="py-8xl flex gap-x-4xl w-full max-w-max-width-desktop mx-auto">
          {guarantees.map((g) => (
            <ItemCard key={`guarantee-card-${g.title}`} {...g} />
          ))}
        </div>
      </div>
    </section>
  );
};

// interface ItemProps {
//   value: string;
//   onClick?: () => void;
//   title: string;
//   content: string;
//   icon: UntitledIcon;
// }
//
// const Item: FC<ItemProps> = ({ onClick, content, title, value, icon }) => {
//   const Icon = icon;
//   return (
//     <AccordionItem
//       value={value}
//       onClick={onClick}
//       className="cursor-pointer p-3xl border-b border-border-secondary"
//     >
//       <AccordionTrigger className="!p-0 mb-1 cursor-pointer">
//         <div className="w-full flex gap-x-xl items-center">
//           <div className="p-xs rounded-xs border border-border-secondary bg-background-secondary">
//             <Icon size="20px" className="text-foreground-brand-primary" />
//           </div>
//           <span className="text-text-primary font-semibold text-lg leading-lg">
//             {title}
//           </span>
//         </div>
//       </AccordionTrigger>
//       <AccordionContent className="ml-11 text-md leading-md font-normal text-text-tertiary mr-[84px]">
//         {content}
//       </AccordionContent>
//     </AccordionItem>
//   );
// };

interface ItemCardProps {
  title: string;
  description: string;
  tags: string[];
}

const ItemCard: FC<ItemCardProps> = (props) => {
  return (
    <div className="rounded-xs min-w-[320px] flex flex-col shadow-xs border border-border-secondary w-full bg-background-primary">
      <div className="w-full h-[180px] bg-[url(/patterns/square-small.svg)] flex items-center justify-center border-b border-dashed border-border-secondary">
        <Image
          src="/illustrations/tumbler.svg"
          width={191}
          height={109}
          alt="Tumbler"
        />
      </div>
      <div className="flex space-y-4xl p-4xl flex-col border-b border-border-tertiary">
        <div className="w-full flex flex-col space-y-md">
          <div className="flex gap-x-md items-center">
            <Image
              src="/illustrations/verified-tick-green.svg"
              width={18}
              height={18}
              alt="Verified tick"
            />
            <h3 className="text-text-primary text-display-xs leading-display-xs font-semibold">
              {props.title}
            </h3>
          </div>
          <p className="text-text-tertiary text-md leading-md">
            {props.description}
          </p>
        </div>
        <div className="flex gap-x-sm">
          {props.tags.map((t) => (
            <div
              key={`tag-${t}`}
              className="px-sm py-xxs border border-border-primary rounded-sm bg-background-primary shadow-xs text-text-secondary"
            >
              {t}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-1.5 bg-[url(/patterns/slash-darker.svg)]"></div>
    </div>
  );
};

export default NewGuarantees;
