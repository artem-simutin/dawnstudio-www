import Image from "next/image";
import React from "react";

const SocialProof = () => {
  return (
    <section className="w-full py-8xl px-5xl flex flex-col items-center">
      <span className="text-text-tertiary text-sm leading-sm">
        Trusted by professionals at
      </span>
      <div className="w-full flex items-center">
        <Image
          src="/illustrations/trees.svg"
          width={198}
          height={120}
          alt="Trees"
        />
        <div className="px-container-padding-desktop flex w-full">
          <div className="justify-center w-full flex items-center gap-x-9xl">
            <Image
              src="/companies/docutiv.svg"
              width={145}
              height={46}
              alt="Docutiv"
            />
            <Image
              src="/companies/prxyai.svg"
              width={216}
              height={36}
              alt="Prxy.ai"
            />
            <Image
              src="/companies/paperfly.svg"
              width={166}
              height={38}
              alt="Paperfly"
            />
          </div>
        </div>
        <Image
          src="/illustrations/trees.svg"
          width={198}
          height={120}
          alt="Trees"
        />
      </div>
    </section>
  );
};

export default SocialProof;
