import clsx from "clsx";
import React from "react";
import { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { IconContext } from "react-icons";
import { AiFillCaretDown } from "react-icons/ai";

type DropdownMenuProps = {
  className?: string;
  children: JSX.Element[];
  menuTitle: string;
};

export default function DropdownMenu({
  className,
  children,
  menuTitle,
}: DropdownMenuProps) {
  const list = Array.isArray(children) ? children : [children];
  var l = 0;

  const [hover, setHover] = useState(false);

  function DisplayMenuTitle({ menuTitle }: { menuTitle: string }) {
    return (
      <div>
        <div className="inline-block">{menuTitle}</div>
        <div className="inline-block pl-3">
          <IconContext.Provider value={{ color: "63666A", size: "14px" }}>
            <AiFillCaretDown />
          </IconContext.Provider>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full">
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className={
                open || hover
                  ? clsx("h-full text-blue-500", className)
                  : clsx("h-full text-gray-600", className)
              }
            >
              <DisplayMenuTitle menuTitle={menuTitle} />
            </Menu.Button>
            <Transition
              enter="transition duration-500 ease-out"
              enterFrom="transfrom scale-y-95 opacity-0"
              enterTo="transform scale-y-100 opacity-100"
              leave="transition duration-500 ease-in"
              leaveFrom="transform scale-y-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              {open && (
                <Menu.Items className="align-left absolute flex flex-col">
                  {list.map((child) => (
                    <Menu.Item>{child}</Menu.Item>
                  ))}
                </Menu.Items>
              )}
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
}
