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
    // {
    //   title: "Services",
    //   href: "/services",
    //   subMenuTitle: "What we offer",
    //   subLinks: [
    //     {
    //       title: "AI integration",
    //       href: "/#ai-integration",
    //       description: "We help you add AI to your business where it's needed.",
    //       illustration: {
    //         src: "/illustrations/cube.svg",
    //         alt: "Cube",
    //         width: 40,
    //         height: 32,
    //       },
    //     },
    //     {
    //       title: "Web development",
    //       href: "/#web-development",
    //       description:
    //         "We build custom web applications that meet your business needs.",
    //       illustration: {
    //         src: "/illustrations/cube.svg",
    //         alt: "Cube",
    //         width: 40,
    //         height: 32,
    //       },
    //     },
    //     {
    //       title: "Mobile development",
    //       href: "/#mobile-development",
    //       description:
    //         "We build iOS and Android apps that your users will actually want to use.",
    //       illustration: {
    //         src: "/illustrations/cube.svg",
    //         alt: "Cube",
    //         width: 40,
    //         height: 32,
    //       },
    //     },
    //     {
    //       title: "Product design",
    //       href: "/#product-company-design",
    //       description: "We help you with both your product and your brand",
    //       illustration: {
    //         src: "/illustrations/cube.svg",
    //         alt: "Cube",
    //         width: 40,
    //         height: 32,
    //       },
    //     },
    //     {
    //       title: "Research and strategy",
    //       href: "/#research-strategy",
    //       description:
    //         "We provide clear insights on your market, competition, and customers to guide product decisions.",
    //       illustration: {
    //         src: "/illustrations/cube.svg",
    //         alt: "Cube",
    //         width: 40,
    //         height: 32,
    //       },
    //     },
    //   ],
    // },
    // {
    //   title: "Customers",
    //   href: "#",
    // },
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
      title: "Medical assistant that saves clinician time",
      description:
        "A clinical assistant that handles intake and patient interviews, reducing admin work and fitting cleanly into existing workflows.",
      href: "/1",
      tags: ["AI", "From Scratch"],
      companyName: "Docutiv",
      companyLogoUrl: "/companies/docutiv-color.svg",
      illustrationUrl: "/illustrations/voice-folder.svg",
      faviconUrl: "/companies/favicons/docutiv.svg",
    },
    {
      title: "Managing RFPs without the busywork",
      description:
        "A tool that helps teams draft and organize RFP documents faster, reusing knowledge and keeping everything consistent.",
      href: "/2",
      tags: ["AI", "From Scratch"],
      companyName: "Paperfly",
      companyLogoUrl: "/companies/paperfly-color.svg",
      illustrationUrl: "/illustrations/trophy.svg",
      faviconUrl: "/companies/favicons/paperfly.svg",
    },
  ],
};

export default config;
