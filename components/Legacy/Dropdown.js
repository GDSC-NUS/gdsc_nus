import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import NextLink from "next/link";

export default function Dropdown({ item }) {
  return (
    <Menu as="div">
      <Menu.Button className="flex">
        {item.name}
        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute mt-3 rounded-md bg-gray-800 focus:outline-none">
          {item.dropdown.map((link, index) => (
            <Menu.Item key={index}>
              <div className="block py-4 px-8 text-2xl text-gray-300 hover:bg-gray-700 hover:text-white">
                <NextLink href={link.href}>{link.name}</NextLink>
              </div>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
