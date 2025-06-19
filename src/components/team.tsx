import React, { FC } from "react";
import SectionTitle from "./shared/section-title";
import Image from "next/image";
import Link from "next/link";
import { CpuChip02 } from "untitledui-js/react";
import { Colors } from "untitledui-js/react";

const Team = () => {
  return (
    <section className="w-full border-b border-border-secondary flex flex-col max-w-full-page desktop:border-x">
      <SectionTitle
        subTitle="Our Team"
        title="People behind the process"
        description="Each responsible for their process, ensuring that the business creation proceeds as smoothly as possible."
      />
      <div className="w-full bg-[url(/patterns/square-small.svg)] desktop:bg-[url(/patterns/dot.svg)] py-6xl px-container-padding-mobile tablet:p-3xl desktop:p-8xl">
        <div className="flex w-full max-w-max-width-desktop space-y-3xl desktop:space-y-4xl flex-col mx-auto">
          <div className="flex flex-col gap-y-3xl desktop:flex-row gap-x-4xl">
            <TeamMemberCard
              name="Kristian Veter"
              position="Business Development Lead"
              description="Former co-founder of Opendoor. Early staff at Spotify and Clearbit."
              avatarUrl="/people/kristian-veter.jpg"
              socialMediaLinks={[
                {
                  icon: "/social-media-icons/x.svg",
                  href: "https://x.com/kristianvtr",
                },
                {
                  icon: "/social-media-icons/linkedin.svg",
                  href: "https://www.linkedin.com/in/kristian-veter/",
                },
              ]}
            />
            <TeamMemberCard
              name="Artem Simutin"
              position="Lead Developer"
              description="Former co-founder of Opendoor. Early staff at Spotify and Clearbit."
              avatarUrl="/people/artem-simutin.jpeg"
              socialMediaLinks={[
                {
                  icon: "/social-media-icons/x.svg",
                  href: "https://x.com/artemsimut",
                },
                {
                  icon: "/social-media-icons/linkedin.svg",
                  href: "https://www.linkedin.com/in/artem-simutin/",
                },
              ]}
            />
          </div>
          <div className="w-full flex gap-x-4xl">
            <TeamMemberCard
              name="Denis Simutin"
              position="Lead Designer"
              description="Former co-founder of Opendoor. Early staff at Spotify and Clearbit."
              avatarUrl="/people/denis-simutin.jpg"
              socialMediaLinks={[
                {
                  icon: "/social-media-icons/x.svg",
                  href: "https://x.com",
                },
              ]}
            />
            <div className="w-[280px] hidden items-center bg-[url(/patterns/square-small.svg)] bg-background-primary border border-border-secondary rounded-xs shadow-xs relative shrink-0 desktop:flex">
              <Image
                src="/illustrations/battery.svg"
                width={114}
                height={120}
                alt="Battery"
                className="absolute left-16"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TeamMemberProps {
  avatarUrl: string;
  name: string;
  position: string;
  description: string;
  socialMediaLinks: {
    icon: string;
    href: string;
  }[];
}

const TeamMemberCard: FC<TeamMemberProps> = (props) => {
  return (
    <div className="min-w-[240px] flex flex-col border border-border-secondary bg-background-primary rounded-xs shadow-xs w-full">
      <div className="flex desktop:flex-col tablet:flex-row flex-col w-full">
        {/* top row */}
        <div className="w-full flex border-b tablet:border-r desktop:border-b border-solid tablet:border-dashed desktop:border-solid border-border-secondary">
          <div className="flex flex-col shrink-0 border-r border-border-secondary">
            <div className="p-3 desktop:p-4xl bg-[url(/patterns/square-small.svg)] desktop:border-b border-dashed border-border-secondary">
              <div className="bg-background-primary shadow-xs p-1 rounded-xs border border-border-secondary relative">
                <Image
                  src={props.avatarUrl}
                  alt={props.name}
                  width={128}
                  height={128}
                  className="w-16 h-16 tablet:w-[128px] tablet:h-[128px] object-cover rounded-[2px]"
                />
                <div className="absolute -top-[14px] -right-[14px] bg-background-primary border border-border-primary p-md rounded-lg shadow-md text-foreground-fg-brand-primary hidden tablet:block">
                  <CpuChip02 size={20} />
                </div>
              </div>
            </div>
            <div className="flex tablet:hidden desktop:hidden flex-1 w-full bg-[url(/patterns/slash-darker.svg)] justify-center items-center min-h-16">
              <div className="bg-background-primary border border-border-primary p-md rounded-xs shadow-xs w-min">
                <CpuChip02 size={20} className="text-graytrue-400" />
              </div>
            </div>
          </div>
          {/* texts */}
          <div className="w-full flex flex-col p-xl tablet:p-3xl desktop:p-4xl pb-xl tablet:pb-4xl desktop:pb-6xl space-y-xl">
            <div className="flex flex-col space-y-xss">
              <h3 className="text-text-primary font-semibold text-lg leading-lg tablet:text-xl tablet:leading-xl">
                {props.name}
              </h3>
              <span className="text-sm leading-sm tablet:text-md tablet:leading-md font-medium text-text-secondary">
                {props.position}
              </span>
            </div>
            <p className="text-sm leading-sm tablet:text-md tablet:leading-md text-text-tertiary">
              {props.description}
            </p>
          </div>
        </div>

        {/* socials */}
        <div className="w-full tablet:w-auto desktop:w-full flex items-center border-b border-border-secondary flex-row tablet:flex-col desktop:flex-row">
          <div className="w-full min-w-0 p-xl tablet:p-3xl desktop:p-4xl flex gap-x-3xl flex-row tablet:flex-col desktop:flex-row gap-y-3xl">
            {props.socialMediaLinks.map((sml) => {
              return (
                <Link
                  key={sml.href}
                  href={sml.href}
                  target="_blank"
                  className="hover:opacity-80 transition-opacity duration-100 shrink-0 w-6 h-6"
                >
                  <Image src={sml.icon} width={24} height={24} alt={sml.href} />
                </Link>
              );
            })}
          </div>
          <div className="px-4xl hidden desktop:flex min-w-0 shrink-0">
            <Colors size={24} className="text-utility-gray-100" />
          </div>
        </div>
      </div>

      <div className="bg-[url(/patterns/slash-darker.svg)] h-1.5 tablet:h-3 desktop:h-1.5 w-full"></div>
    </div>
  );
};

export default Team;
