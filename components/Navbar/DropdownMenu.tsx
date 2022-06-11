import clsx from "clsx";
import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { useState } from "react";

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

  return (
    <>
      <div
        className={clsx(
          "hover:text-color-white text-xl no-underline",
          className
        )}
      >
        <div
          onClick={toggleDropdown}
          className="cursor-pointer hover:brightness-125"
        >
          <div className="inline-block">{menuTitle}</div>
          <div className="inline-block pl-2">
            <AiFillCaretDown />
          </div>
        </div>
      </div>
      <ul className="absolute">
        {showDropdown &&
          list.map((item, index) => (
            <li className="flex flex-col" key={index}>
              {item}
            </li>
          ))}
      </ul>
    </>
  );
}
