import clsx from "clsx";
import React from "react";
import { useState } from "react";
import { Menu } from "@headlessui/react";
import { IconContext } from "react-icons";
import { AiFillCaretDown } from "react-icons/ai";

type DropdownMenuProps = {
  className?: string;
  children: JSX.Element[];
  menuTitle: string;
};

function DisplayMenuTitle({ menuTitle }: { menuTitle: string }) {
  return (
    <div>
      <div className="inline-block">{menuTitle}</div>
      <div className="inline-block pl-3">
        <IconContext.Provider
          value={{ color: "63666A", className: "pt-3 h-8", size: "14px" }}
        >
          <AiFillCaretDown />
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default function DropdownMenu({
  className,
  children,
  menuTitle,
}: DropdownMenuProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const list = Array.isArray(children) ? children : [children];
  var l = 0;

  return (
    <div className="h-full">
      <Menu>
        <Menu.Button className={clsx("h-full", className)}>
          <DisplayMenuTitle menuTitle={menuTitle} />
        </Menu.Button>
        <Menu.Items className="align-left absolute flex flex-col">
          {list.map((child) => (
            <Menu.Item>{child}</Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  );
}
