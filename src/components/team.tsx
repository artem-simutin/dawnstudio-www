import React, { FC } from "react";
import SectionTitle from "./shared/section-title";
import Image from "next/image";
import Link from "next/link";

const Team = () => {
  return (
    <section className="w-full border-b border-border-secondary py-9xl flex flex-col space-y-7xl">
      <div className="max-w-max-width-desktop mx-auto w-full">
        <SectionTitle
          subTitle="Our Team"
          title="Meet our team"
          description="Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work."
        />
      </div>
      <div className="w-full flex gap-x-4xl max-w-max-width-desktop mx-auto px-container-padding-desktop">
        <TeamMemberCard
          name="Alisa Hester"
          position="Founder & CEO"
          description="Former co-founder of Opendoor. Early staff at Spotify and Clearbit."
          avatarUrl="/people/alisa-hester.png"
          socialMediaLinks={[
            {
              icon: "/social-media-icons/x.svg",
              href: "https://x.com",
            },
          ]}
        />
        <TeamMemberCard
          name="Alisa Hester"
          position="Founder & CEO"
          description="Former co-founder of Opendoor. Early staff at Spotify and Clearbit."
          avatarUrl="/people/alisa-hester.png"
          socialMediaLinks={[
            {
              icon: "/social-media-icons/x.svg",
              href: "https://x.com",
            },
          ]}
        />
        <TeamMemberCard
          name="Alisa Hester"
          position="Founder & CEO"
          description="Former co-founder of Opendoor. Early staff at Spotify and Clearbit."
          avatarUrl="/people/alisa-hester.png"
          socialMediaLinks={[
            {
              icon: "/social-media-icons/x.svg",
              href: "https://x.com",
            },
          ]}
        />
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
    <div className="flex flex-col border border-border-tertiary rounded-xl">
      <Image
        src={props.avatarUrl}
        width={384}
        height={332}
        className="object-fill heigh-[332px] w-full rounded-t-xl"
        alt={props.name}
      />
      <div className="flex flex-col p-4xl space-y-3xl">
        <div className="flex flex-col space-y-lg">
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
        <div className="flex gap-x-2xl">
          {props.socialMediaLinks.map((l) => (
            <Link
              href={l.href}
              target="_blank"
              key={`social-media-link-${props.name}-link-${l.href}`}
            >
              <Image src={l.icon} width={24} height={24} alt={l.href} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
