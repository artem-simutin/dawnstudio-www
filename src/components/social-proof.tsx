import Image from "next/image";
import React from "react";

const SocialProof = () => {
  return (
    <section className="w-full flex flex-col max-w-full-page border-x border-b border-border-secondary items-center">
      <div className="w-full flex border-b border-border-secondary">
        <div className="w-full max-w-120 h-6xl desktop:h-7xl flex pr-4xl pl-container-padding-mobile tablet:pl-4xl desktop:pl-[112px] items-center flex">
          <span className="text-text-quaternary text-xs leading-xs font-medium">
            Among our clients:
          </span>
        </div>
        <div className="border-l border-border-secondary flex bg-[url(/patterns/slash.svg)] w-full"></div>
      </div>
      <div className="flex w-full py-8xl flex justify-between px-4xl max-w-max-width-desktop">
        <Image
          src="/companies/docutiv.svg"
          width={133}
          height={42}
          alt="Docutiv"
        />
        <Image
          src="/companies/paperfly.svg"
          width={157}
          height={36}
          alt="Paperfly"
        />
        <Image
          src="/companies/prxyai.svg"
          width={192}
          height={32}
          alt="Prxy.ai"
        />
        {/* <Image */}
        {/*   src="/companies/cana.png" */}
        {/*   width={101} */}
        {/*   height={80} */}
        {/*   alt="Cana Neurology" */}
        {/*   quality={100} */}
        {/* /> */}
        <Image
          src="/companies/linguai.svg"
          width={137}
          height={42}
          alt="LinguAI"
        />
      </div>
    </section>
  );
};

export default SocialProof;
