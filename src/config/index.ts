export interface Link {
  title: string;
  href: string;
  description?: string;
  illustration?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
  };
  patternUrl?: string;
  subLinks?: Link[];
  subMenuTitle?: string;
}

export interface CaseStudy {
  title: string;
  description: string;
  href: string;
  tags: string[];
  companyName: string;
  companyLogoUrl: string;
  illustrationUrl: string;
  faviconUrl: string;
}

interface Config {
  calComLink: string;
  navigationLinks: Link[];
  caseStudies: CaseStudy[];
}

const config: Config = {
  calComLink: "https://cal.com/dawn-studio-kristian/discovery-call",
  navigationLinks: [
    {
      title: "Services",
      href: "/services",
      subMenuTitle: "What we offer",
      subLinks: [
        {
          title: "MVP development",
          href: "#mvp-development",
          description:
            "We develop you minimal viable product in 3 weeks. We develop you minimal viable product in 3 weeks.",
          illustration: {
            src: "/illustrations/cube.svg",
            alt: "Cube",
            width: 40,
            height: 32,
          },
        },
        {
          title: "Ongoing development",
          href: "#ongoing-development",
          description:
            "We go beyond MVP stages to support ongoing needs and keep up with the growth.",
          illustration: {
            src: "/illustrations/cube.svg",
            alt: "Cube",
            width: 40,
            height: 32,
          },
        },
        {
          title: "Branding design",
          href: "#branding-design",
          description:
            "We design you a strong recognizable brand tailored to your product.",
          illustration: {
            src: "/illustrations/cube.svg",
            alt: "Cube",
            width: 40,
            height: 32,
          },
        },
        {
          title: "Market research",
          href: "#market-research",
          description:
            "We partner with market research company to help you understand your product’s market fit.",
          illustration: {
            src: "/illustrations/cube.svg",
            alt: "Cube",
            width: 40,
            height: 32,
          },
        },
      ],
    },
    {
      title: "Customers",
      href: "/customers",
    },
    // {
    //   title: "Blog",
    //   href: "/blog",
    // },
    {
      title: "About",
      href: "/about-us",
    },
  ],
  caseStudies: [
    {
      title: "Building an AI powered medical assistant",
      description:
        "Docutiv is an AI-powered medical assistant that streamlines patient intake and interview processes, making documentation simpler with modern, customizable technologies for a seamless clinical workflow.",
      href: "/1",
      tags: ["AI", "From Scratch"],
      companyName: "Docutiv",
      companyLogoUrl: "/companies/docutiv-color.svg",
      illustrationUrl: "/illustrations/card.svg",
      faviconUrl: "/companies/favicons/docutiv.svg",
    },
    {
      title: "New way of managing RFP documents using AI",
      description:
        "How we build a tool that helps companies to generate and manage RFP documents using AI.",
      href: "/2",
      tags: ["AI", "From Scratch"],
      companyName: "Paperfly",
      companyLogoUrl: "/companies/paperfly-color.svg",
      illustrationUrl: "/illustrations/card.svg",
      faviconUrl: "/companies/favicons/paperfly.svg",
    },
  ],
};

export default config;
