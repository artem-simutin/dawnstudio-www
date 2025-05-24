import React, { FC } from "react";
import SectionTitle from "./shared/section-title";
import Image from "next/image";
import Link from "next/link";

const Team = () => {
  return (
    <section className="w-full border-b border-border-secondary py-10xl flex flex-col space-y-7xl max-w-full-page border-x">
      <div className="max-w-max-width-desktop mx-auto w-full">
        <SectionTitle
          title="Meet our team"
          description="Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work."
        />
      </div>
      <div className="w-full flex gap-x-4xl justify-center border-y border-border-secondary">
        <div className="flex w-full max-w-max-width-desktop gap-x-4xl">
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
    <div className="flex flex-col border-x border-border-tertiary">
      <div className="w-full relative h-[351px]">
        <Image
          src={props.avatarUrl}
          fill
          className="object-cover"
          alt={props.name}
        />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col space-y-lg p-4xl">
          <div className="w-full flex flex-col space-y-xxs">
            <h3 className="text-lg leading-lg text-text-primary font-semibold">
              {props.name}
            </h3>
            <span className="text-text-brand-secondary text-md leading-md">
              {props.position}
            </span>
          </div>
          <p className="text-text-tertiary text-md leading-md w-full">
            {props.description}
          </p>
        </div>
        <div className="flex gap-x-2xl p-4xl border-y border-border-secondary">
          {props.socialMediaLinks.map((l) => (
            <Link
              href={l.href}
              target="_blank"
              key={`social-media-link-${props.name}-link-${l.href}`}
            >
              <Image
                src={l.icon}
                width={24}
                height={24}
                alt={l.href}
                // className="text-text-secondary hover:text-text-secondary_hover"
                className="text-red-700"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="h-3 w-full bg-[url(/patterns/slash.svg)]"></div>
    </div>
  );
};

export default Team;
