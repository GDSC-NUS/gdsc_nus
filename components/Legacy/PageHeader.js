import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Dropdown from "./Dropdown";
import NextLink from "next/link";

/*
  Pages needed on top of those listed in navigation:
- /post
- /contact
- /externalteamA
- /externalteamB
- /externalteamC
- /hackathon-teams
- /recruitment

  Update Footer and Homepage links once ready
*/

const navigation = [
  { name: "Home", href: "/legacy" },
  {
    name: "About",
    dropdown: [
      { name: "About Us", href: "#" }, // href: "/legacy/about"
      { name: "Our Team", href: "#" }, // href: "/legacy/team"
    ],
  },
  {
    name: "Our Projects",
    dropdown: [
      { name: "Internal Projects", href: "#" }, // href: "/legacy/internalprojects"
      { name: "External Projects", href: "#" }, // href: "/legacy/externalprojects"
      { name: "Blog", href: "#" }, // href: "/legacy/blog"
    ],
  },
  {
    name: "Events",
    dropdown: [
      { name: "Workshops", href: "#" }, // href: "/legacy/events"
      { name: "Past Webinars", href: "#" }, // href: "/legacy/past-webinar"
    ],
  },
  {
    name: "Hack For Good",
    dropdown: [
      { name: "HFG 2022", href: "/legacy/hack4good2022" }, // href: "/legacy/hack4good2022"
      { name: "HFG 2021", href: "#" }, // href: "/legacy/hack4good"
      { name: "HFG 2020", href: "#" }, // href: "/legacy/hack4good2020"
    ],
  },
  { name: " ↩ To our website", href: "/" },
];

export default function PageHeader() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="visible -ml-2 mr-2 items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-shrink-0 items-center">
                  <NextLink href="/legacy">
                    <img
                      className="block h-12 w-auto cursor-pointer"
                      src="/assets/PageHeader/dscnuslogo.png"
                      alt="DSC logo"
                    />
                  </NextLink>
                </div>
                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                  {navigation.map((item) => (
                    <div
                      key={item.name}
                      className="cursor-pointer rounded-md px-3 py-2 text-2xl font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.dropdown ? (
                        <Dropdown item={item} />
                      ) : (
                        <NextLink href={item.href}>{item.name}</NextLink>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              {navigation.map((item) =>
                item.dropdown ? (
                  item.dropdown.map((link) => (
                    <Disclosure.Button
                      key={link.name}
                      className="block rounded-md px-3 py-3 text-2xl font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      <NextLink href={link.href}>{link.name}</NextLink>
                    </Disclosure.Button>
                  ))
                ) : (
                  <Disclosure.Button
                    key={item.name}
                    className="block rounded-md px-3 py-3 text-2xl font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <NextLink href={item.href}>{item.name}</NextLink>
                  </Disclosure.Button>
                )
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
