import Image from "next/image";
import React from "react";

const SocialProof = () => {
  return (
    <section className="w-full py-8xl px-5xl flex flex-col items-center border-b border-border-secondary border-x max-w-full-page">
      <span className="text-text-tertiary text-sm leading-sm">
        Trusted by professionals at
      </span>
      <div className="w-full flex items-center">
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
            <Image
              src="/companies/cana.png"
              width={101}
              height={80}
              alt="Cana Neurology"
              quality={100}
            />
            <Image
              src="/companies/linguai.svg"
              width={157}
              height={48}
              alt="LinguAI"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
