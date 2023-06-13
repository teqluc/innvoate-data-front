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
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL + "supply/",
}
