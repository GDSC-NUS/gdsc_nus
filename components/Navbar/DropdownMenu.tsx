import clsx from "clsx";
import React from "react";
import { useState } from "react";
import { Menu } from "@headlessui/react";

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
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const list = Array.isArray(children) ? children : [children];
  var l = 0;

  return (
    <div className={clsx("h-full", className)}>
      <Menu>
        <Menu.Button className="h-full">{menuTitle}</Menu.Button>
        <Menu.Items className="align-left absolute flex flex-col">
          {children.map((child) => (
            <Menu.Item>{child}</Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  );
}
