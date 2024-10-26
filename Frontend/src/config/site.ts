export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Vite + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    { label: "Our Services", href: "/services" },
    { label: "Explore Our App", href: "/explore" },
    { label: "About Us", href: "/about" },
    { label: "Get Help", href: "/help" },
  ],
  links: {
    twitter: "https://twitter.com/yourtwitter",
    discord: "https://discord.com/yourdiscord",
    github: "https://github.com/yourgithub",
    sponsor: "https://github.com/sponsor",
  },
  navMenuItems: [
    { label: "Services", href: "/services" },
    { label: "Explore", href: "/explore" },
    { label: "About", href: "/about" },
    { label: "Help", href: "/help" },
  ],
};

