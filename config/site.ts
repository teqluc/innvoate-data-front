export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "InnovateMR Data",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
  baseUrl: "http://innovate-stage-209385288.us-east-1.elb.amazonaws.com/api/v2/supply/"
}
