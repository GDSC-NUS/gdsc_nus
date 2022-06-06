import clsx from "clsx";
import React from 'react';
import { useEffect, useState } from "react";

type DropdownMenuProps = {
    className?: string;
    children: JSX.Element[];
    clickedColor?: string;
};

export default function DropdownMenu(props: DropdownMenuProps) {
    const { children, className, clickedColor } = props;
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click)

    const onMouseEnter = () => {
        if (window.innerWidth < 800) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    }

    const onMouseLeave = () => {
        setDropdown(false);
    }

    if (children && children.length > 1) {
      //not dropdown menu
      return (
        <>
          <ul className={clsx("w-80 h-80", className)}>
              <li
                onClick={handleClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className="cursor-pointer"
              >
                {children[0]}
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
