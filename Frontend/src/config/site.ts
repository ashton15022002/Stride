export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Vite + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    { label: "Our Services", href: "/services" },
    { label: "Markets", href: "/explore" },
    { label: "Learn", href: "/learn" },
    { label: "About Us", href: "/about" },
    { label: "Get Help", href: "/help" },
  ],
  links: {
    twitter: "https://twitter.com/yourtwitter",
    discord: "https://discord.com/yourdiscord",
    github: "https://github.com/yourgithub",
  },
  navMenuItems: [
    { label: "Services", href: "/services" },
    { label: "Markets", href: "/explore" },
    { label: "Learn", href: "/learn" },
    { label: "About", href: "/about" },
    { label: "Help", href: "/help" },
  ],
};

