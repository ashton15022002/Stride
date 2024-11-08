import { useState } from "react";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
} from "@/components/icons";
import { Logo } from "@/components/icons";


export const Navbar = () => {
  const [openPopoverIndex, setOpenPopoverIndex] = useState<number | null>(null);

  // Function to render dropdown content based on the item label or href
  const renderDropdownContent = (label: string) => {
    switch (label) {
      case "Our Services":
        return (
          <div className="flex flex-col gap-4 p-4 bg-white rounded-full">
            <div className="flex items-center gap-4">
              <img src="/src/images/deposit.png" alt="Deposit Icon" className="w-10 h-10 rounded-full" />
              <div>
                <Link
                  href="/services#service1"
                  className="text-sm font-semibold text-gray-700 hover:text-primary"
                >
                  Deposit
                </Link>
                <p className="text-xs text-gray-500">Make sites better with interactive menus.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src="/src/images/exchange.png" alt="Exchange Icon" className="w-10 h-10 rounded-full" />
              <div>
                <Link
                  href="/services#service2"
                  className="text-sm font-semibold text-gray-700 hover:text-primary"
                >
                   Crypto Exchange
                </Link>
                <p className="text-xs text-gray-500">Make sites better with interactive menus.</p>
              </div>             
            </div>
            <div className="flex items-center gap-4">
              <img src="/src/images/stockexchange.png" alt="Exchange Icon" className="w-10 h-10 rounded-full" />
              <div>
                <Link
                  href="/services#service2"
                  className="text-sm font-semibold text-gray-700 hover:text-primary"
                >
                   Stock Exchange
                </Link>
                <p className="text-xs text-gray-500">Make sites better with interactive menus.</p>
              </div>             
            </div>
            <div className="flex items-ce3nter gap-4">
              <img src="/src/images/forex.png" alt="Exchange Icon" className="w-10 h-10 rounded-full" />
              <div>
                <Link
                  href="/services#service2"
                  className="text-sm font-semibold text-gray-700 hover:text-primary"
                >
                   Multi-Currency Account
                </Link>
                <p className="text-xs text-gray-500">Make sites better with interactive menus.</p>
              </div>             
            </div>
            <div className="flex items-center gap-4">
              <img src="/src/images/banking.png" alt="Banking Icon" className="w-10 h-10 rounded-full" />
              <div>
                <Link
                  href="/services#service3"
                  className="text-sm font-semibold text-gray-700 hover:text-primary"
                >
                  Banking
                </Link>
                <p className="text-xs text-gray-500">Make sites better with interactive menus.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src="/src/images/stridecard.png" alt="Stride Card Icon" className="w-10 h-10 rounded-full" />
              <div>
                <Link
                  href="/services#service4"
                  className="text-sm font-semibold text-gray-700 hover:text-primary"
                >
                  Stride Card
                </Link>
                <p className="text-xs text-gray-500">Make sites better with interactive menus.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src="/src/images/saveandstake.png" alt="Save & Stake Icon" className="w-10 h-10 rounded-full" />
              <div>
                <Link
                  href="/services#service5"
                  className="text-sm font-semibold text-gray-700 hover:text-primary"
                >
                  Save & Stake
                </Link>
                <p className="text-xs text-gray-500">Make sites better with interactive menus.</p>
              </div>
            </div>
          </div>
        );

      case "Markets":
        return (
          <div className="flex flex-col gap-4 p-4 bg-white rounded-full">
            <div className="flex items-center gap-4">
              <img src="/src/images/feature1.png" alt="Feature 1 Icon" className="w-10 h-10 rounded-full" />
              <div>
                <Link
                  href="/explore#feature1"
                  className="text-sm font-semibold text-gray-700 hover:text-primary"
                >
                  Spot
                </Link>
                <p className="text-xs text-gray-500">Description for Feature 1.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src="/src/images/feature2.png" alt="Feature 2 Icon" className="w-10 h-10 rounded-full" />
              <div>
                <Link
                  href="/explore#feature2"
                  className="text-sm font-semibold text-gray-700 hover:text-primary"
                >
                  Stocks
                </Link>
                <p className="text-xs text-gray-500">Description for Feature 2.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src="/src/images/feature3.png" alt="Feature 3 Icon" className="w-10 h-10 rounded-full" />
              <div>
                <Link
                  href="/explore#feature3"
                  className="text-sm font-semibold text-gray-700 hover:text-primary"
                >
                  Forex
                </Link>
                <p className="text-xs text-gray-500">Description for Feature 3.</p>
              </div>
            </div>
          </div>
        );

      case "Learn":
        return (
          <div className="flex flex-col gap-4 p-4 bg-white rounded-full">
            <div className="flex items-center gap-4">
              <img src="/src/images/feature1.png" alt="Feature 1 Icon" className="w-10 h-10 rounded-full" />
              <div>
                <Link
                  href="/explore#feature1"
                  className="text-sm font-semibold text-gray-700 hover:text-primary"
                >
                  Feature 1
                </Link>
                <p className="text-xs text-gray-500">Description for Feature 1.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src="/src/images/feature2.png" alt="Feature 2 Icon" className="w-10 h-10 rounded-full" />
              <div>
                <Link
                  href="/explore#feature2"
                  className="text-sm font-semibold text-gray-700 hover:text-primary"
                >
                  Feature 2
                </Link>
                <p className="text-xs text-gray-500">Description for Feature 2.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src="/src/images/feature3.png" alt="Feature 3 Icon" className="w-10 h-10 rounded-full" />
              <div>
                <Link
                  href="/explore#feature3"
                  className="text-sm font-semibold text-gray-700 hover:text-primary"
                >
                  Feature 3
                </Link>
                <p className="text-xs text-gray-500">Description for Feature 3.</p>
              </div>
            </div>
          </div>
        );



      case "About Us":
        return (
          <div className="flex flex-col gap-4 p-4 bg-white rounded-full">
            <div className="flex items-center gap-4">
              <img src="/src/images/mission.png" alt="Our Mission Icon" className="w-10 h-10 rounded-full" />
              <div>
                <Link
                  href="/about#our-mission"
                  className="text-sm font-semibold text-gray-700 hover:text-primary"
                >
                  Our Mission
                </Link>
                <p className="text-xs text-gray-500">Description for Our Mission.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src="/src/images/team.png" alt="Our Team Icon" className="w-10 h-10 rounded-full" />
              <div>
                <Link
                  href="/about#our-team"
                  className="text-sm font-semibold text-gray-700 hover:text-primary"
                >
                  Our Team
                </Link>
                <p className="text-xs text-gray-500">Description for Our Team.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src="/src/images/contact.png" alt="Contact Us Icon" className="w-10 h-10 rounded-full" />
              <div>
                <Link
                  href="/about#contact"
                  className="text-sm font-semibold text-gray-700 hover:text-primary"
                >
                  Contact Us
                </Link>
                <p className="text-xs text-gray-500">Description for Contact Us.</p>
              </div>
            </div>
          </div>
        );

      case "Get Help":
        return (
          <div className="flex flex-col gap-4 p-4 bg-white rounded-full">
            <div className="flex items-center gap-4">
              <img src="/src/images/support.png" alt="Support Icon" className="w-10 h-10 rounded-full" />
              <div>
                <Link
                  href="/help#support"
                  className="text-sm font-semibold text-gray-700 hover:text-primary"
                >
                  Support
                </Link>
                <p className="text-xs text-gray-500">Description for Support.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src="/src/images/faq.png" alt="FAQ Icon" className="w-10 h-10 rounded-full" />
              <div>
                <Link
                  href="/help#faq"
                  className="text-sm font-semibold text-gray-700 hover:text-primary"
                >
                  FAQ
                </Link>
                <p className="text-xs text-gray-500">Description for FAQ.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src="/src/images/feedback.png" alt="Feedback Icon" className="w-10 h-10 rounded-full" />
              <div>
                <Link
                  href="/help#feedback"
                  className="text-sm font-semibold text-gray-700 hover:text-primary"
                >
                  Feedback
                </Link>
                <p className="text-xs text-gray-500">Description for Feedback.</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <NextUINavbar className="bg-black text-white" maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1 text-white"
            href="/"
          >
            <Logo />
            <p className="font-bold text-inherit">Stride</p>
          </Link>
        </NavbarBrand>

        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarItem key={item.href}>
              <Popover
                isOpen={openPopoverIndex === index}
                onOpenChange={(isOpen) =>
                  setOpenPopoverIndex(isOpen ? index : null)
                }
                placement="bottom-start"
              >
                <PopoverTrigger>
                  <Link
                    href={item.href}
                    className={clsx(
                      linkStyles({}),
                      "data-[active=true]:text-primary data-[active=true]:font-medium cursor-pointer text-white"
                    )}
                    color="foreground"
                    onMouseEnter={() => setOpenPopoverIndex(index)}
                    onMouseLeave={() => setOpenPopoverIndex(null)}
                  >
                    {item.label}
                  </Link>
                </PopoverTrigger>
                <PopoverContent
                  className="bg-white shadow-lg rounded-lg w-80"
                  onMouseEnter={() => setOpenPopoverIndex(index)}
                  onMouseLeave={() => setOpenPopoverIndex(null)}
                >
                  {renderDropdownContent(item.label)}
                </PopoverContent>
              </Popover>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal href={siteConfig.links.twitter}>
            <TwitterIcon className="text-white" />
          </Link>
          <Link isExternal href={siteConfig.links.discord}>
            <DiscordIcon className="text-white" />
          </Link>
          <Link isExternal href={siteConfig.links.github}>
            <GithubIcon className="text-white" />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} href="/login" color="primary" className="text-white">
            Log In
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-white" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>
    </NextUINavbar>
  );
};






