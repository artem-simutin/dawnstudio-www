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
          href: "/services/mvp-development",
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
          href: "/services/ongoing-development",
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
          href: "/services/branding-design",
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
          href: "/services/market-research",
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
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "About",
      href: "/about-us",
    },
  ],
  caseStudies: [
    {
      title: "How Nietzsche increased their sales 2X",
      description:
        "By channeling Nietzschean boldness into its branding, the company doubled sales through a fearless, value-driven campaign.",
      href: "/1",
      tags: ["+50% Lead Generation", "$6.2M Series A"],
      companyName: "Nietzssche",
      companyLogoUrl: "/companies/nietzsche.svg",
      illustrationUrl: "/illustrations/card.svg",
      faviconUrl: "/companies/nietzsche-fav.svg",
    },
    {
      title: "How Nietzsche increased their sales 2X",
      description:
        "By channeling Nietzschean boldness into its branding, the company doubled sales through a fearless, value-driven campaign.",
      href: "/2",
      tags: ["+50% Lead Generation", "$6.2M Series A"],
      companyName: "Nietzssche",
      companyLogoUrl: "/companies/nietzsche.svg",
      illustrationUrl: "/illustrations/card.svg",
      faviconUrl: "/companies/nietzsche-fav.svg",
    },
    {
      title: "How Nietzsche increased their sales 2X",
      description:
        "By channeling Nietzschean boldness into its branding, the company doubled sales through a fearless, value-driven campaign.",
      href: "/3",
      tags: ["+50% Lead Generation", "$6.2M Series A"],
      companyName: "Nietzssche",
      companyLogoUrl: "/companies/nietzsche.svg",
      illustrationUrl: "/illustrations/card.svg",
      faviconUrl: "/companies/nietzsche-fav.svg",
    },
  ],
};

export default config;
