import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import { ArrowUpRight, ChevronDown } from "untitledui-js/react";

const Customers = () => {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center pt-20">
        <Hero />
        <section className="w-full flex flex-col  overflow-x-hidden items-center">
          <FullWidthCard
            position="left"
            title="How Paperfly created $50M brand"
            description="By channeling Nietzschean boldness into its branding, the company doubled sales through a fearless, value-driven campaign."
            tags={["50% Leads", "$1.5M Series A"]}
            image="/illustrations/gameboy.svg"
          />
          <div className="w-max-width-desktop h-10  border-x border-border-secondary border-dashed" />

          <FullWidthCard
            position="right"
            title="How PrxyAI scaled to 10K users"
            description="Leveraging cutting-edge AI technology, PrxyAI achieved rapid user growth through innovative product development and strategic marketing."
            tags={["10K Users", "AI Platform"]}
            image="/illustrations/cube.svg"
          />

          <div className="w-max-width-desktop h-10  border-x border-border-secondary border-dashed" />

          <div className="flex desktop:bg-background-secondary  w-full justify-center">
            <div className="w-max-width-desktop flex gap-10 desktop:flex-row flex-col">
              <HalfWidthCard
                title="How PrxyAI scaled to 10K users"
                description="Leveraging cutting-edge AI technology, PrxyAI achieved rapid user growth through innovative product development and strategic marketing."
                tags={["10K Users", "AI Platform"]}
              />

              <HalfWidthCard
                title="How PrxyAI scaled to 10K users"
                description="Leveraging cutting-edge AI technology, PrxyAI achieved rapid user growth through innovative product development and strategic marketing."
                tags={["10K Users", "AI Platform"]}
              />
            </div>
          </div>

          <div className="w-max-width-desktop h-10  border-x border-border-secondary border-dashed" />
          <FullWidthCard
            position="right"
            title="How PrxyAI scaled to 10K users"
            description="Leveraging cutting-edge AI technology, PrxyAI achieved rapid user growth through innovative product development and strategic marketing."
            tags={["10K Users", "AI Platform"]}
            image="/illustrations/cube.svg"
          />
        </section>

        <div className="w-max-width-desktop h-10  border-x border-border-secondary border-dashed" />
      </main>
      <Footer />
    </div>
  );
};

const Hero = () => {
  return (
    <section className="desktop:py-20 tablet:py-16 py-6xl max-w-max-width-desktop space-y-4xl px-container-padding-mobile tablet:px-container-padding-tablet desktop:px-container-padding-desktop">
      <div className="space-y-xl">
        <div className="flex gap-x-xs">
          <div className="py-[3px] px-[7px] rounded-lg border border-border-primary flex">
            <span className="text-text-secondary text-xs leading-xs font-medium">
              Customers
            </span>
          </div>
          <div className="py-[3px] px-[7px] rounded-lg border border-border-primary flex items-center">
            <ChevronDown size={16} className="text-utility-blue-light-400" />
          </div>
        </div>
        <h1 className="text-display-md tablet:text-display-lg desktop:text-display-xl leading-display-md tablet:leading-display-lg desktop:leading-display-xl text-text-primary font-semibold">
          From a Bold Idea to the Successful Business.
        </h1>
      </div>

      <p className="text-text-tertiary  text-xl leading-xl">
        Explore how we helped our clients transform their idea to the business
        with our services.
      </p>
    </section>
  );
};

const FullWidthCard = (props: {
  position: "left" | "right";
  title: string;
  description: string;
  tags: string[];
  image: string;
}) => {
  const { position, title, description, tags, image } = props;

  const imageSection = (
    <div className="bg-[url(/patterns/square-small.svg)] w-1/2 flex-1 items-center justify-center desktop:flex hidden">
      <div className="w-full h-full flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          width={512}
          className="w-full h-[289px] object-contain"
          height={289}
        />
      </div>
    </div>
  );

  const contentSection = (
    <div className="desktop:p-7xl gap-8 tablet:gap-16 desktop:gap-8xl p-4 tablet:p-6 flex w-full desktop:w-1/2 flex-col ">
      <Image
        src="/companies/paperfly.svg"
        alt="Paperfly"
        width={138}
        height={32}
      />

      <div className="flex flex-col gap-3">
        <div className="flex gap-x-1.5">
          <div className="py-xs px-lg rounded-sm border-border-primary border shadow-xs text-xs leading-xs text-bluelight-500 font-medium flex items-center">
            <ArrowUpRight size={12} className="shrink-0" />
          </div>
          {tags.map((tag) => (
            <div
              key={`case-study-${tag}-tag-${tag}`}
              className="py-xs px-lg rounded-sm border-border-primary border shadow-xs text-xs leading-xs text-text-secondary font-medium line-clamp-1"
            >
              {tag}
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h3 className="text-text-primary text-display-xs leading-display-xs tablet:text-display-sm tablet:leading-display-sm font-medium desktop:font-bold desktop:text-display-lg desktop:leading-display-lg">
            {title}
          </h3>

          <p className="text-text-tertiary text-md">{description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="border-border-secondary border max-w-max-width-desktop flex w-full shadow-sm-sharp">
      {position === "left" ? (
        <>
          {imageSection}
          <div className="border-r border-dashed border-border-secondary w-px self-stretch"></div>
          {contentSection}
        </>
      ) : (
        <>
          {contentSection}
          <div className="border-r border-dashed border-border-secondary w-px self-stretch"></div>
          {imageSection}
        </>
      )}
    </div>
  );
};

const HalfWidthCard = (props: {
  title: string;
  description: string;
  tags: string[];
}) => {
  const { title, description, tags } = props;

  return (
    <div className="w-full shadow-sm-sharp">
      <div className="border-border-secondary bg-background-primary border max-width-desktop flex flex-col w-full">
        <div className="w-full flex  desktop:border-b border-border-secondary  border-dashed">
          <div className="desktop:py-6xl pt-4 tablet:pt-6 pl-4 tablet:pl-6 desktop:pl-7xl desktop:w-1/2 w-full desktop:border-r border-border-secondary">
            <Image
              src="/companies/paperfly.svg"
              alt="Paperfly"
              width={138}
              height={32}
            />
          </div>

          <div className="bg-[url(/patterns/slash.svg)] flex-1 desktop:flex hidden w-full" />
        </div>
        <div className="desktop:p-7xl p-4 tablet:p-6 pt-6xl gap-8xl flex flex-col">
          <div className="flex flex-col gap-3">
            <div className="flex gap-x-1.5">
              <div className="py-xs px-lg rounded-sm border-border-primary border shadow-xs text-xs leading-xs text-bluelight-500 font-medium flex items-center">
                <ArrowUpRight size={12} className="shrink-0" />
              </div>
              {tags.map((tag) => (
                <div
                  key={`case-study-${tag}-tag-${tag}`}
                  className="py-xs px-lg rounded-sm border-border-primary border shadow-xs text-xs leading-xs text-text-secondary font-medium line-clamp-1"
                >
                  {tag}
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-text-primary text-display-xs leading-display-xs tablet:text-display-sm tablet:leading-display-sm font-medium desktop:font-bold desktop:text-display-lg desktop:leading-display-lg">
                {title}
              </h3>

              <p className="text-text-tertiary text-md">{description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url(/patterns/slash.svg)] h-3 w-full bg-background-primary border border-border-secondary  grow" />
    </div>
  );
};

export default Customers;
