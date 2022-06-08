import clsx from "clsx";
import React from 'react';
import { useEffect, useState } from "react";

type DropdownMenuProps = {
    className?: string;
    children: JSX.Element[];
    menuTitle: string;
};

export default function DropdownMenu(props: DropdownMenuProps) {
    const { children, className, menuTitle } = props;
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(true);

    const handleClick = () => {
        setClick(!click)
        setDropdown(!dropdown)
    }

    if (children && children.length > 1) {
      //not dropdown menu
      return (
        <>
          <ul className={clsx("w-80 h-80", className)}>
              <li
                onClick={handleClick}
                className="cursor-pointer hover:brightness-125"
              >
                menuTitle
              </li>
            {dropdown &&
              children.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
          </ul>
        </>
      );
    }
    return (
      <>
        <ul className={clsx("w-80 h-80", className)}>
          <li onClick={handleClick}>{children}</li>
        </ul>
      </>
    );

}
