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
      <div>
        <div className={clsx("no-underline", className)}>
          <div
            onClick={toggleDropdown}
            className="cursor-pointer hover:brightness-125"
          >
            <div className="inline-block align-middle">{menuTitle}</div>
            <div className="inline-block pl-2 align-middle">
              <AiFillCaretDown />
            </div>
          </div>
        </div>
        <ul className="align-left absolute flex flex-col pl-2">
          {showDropdown &&
            list.map((item, index) => (
              <li className="relative flex flex-col" key={index}>
                {item}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
