import clsx from "clsx";
import DropdownMenu from "./DropdownMenu";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Children, useState } from "react";
import { useWindowDimensions } from ".";
import Link from "../Link";
import Image from "next/image";

type NavbarProps = {
  className?: string;
  children: JSX.Element[];
  editMobile: boolean;
  mobileWidthRange: number;
};

export default function Navbar({
  className,
  children,
  editMobile,
  mobileWidthRange = 760,
}: NavbarProps) {
  if (!window) return <h2>Error Message</h2>;

  //handles width: checks for mobile vs small desktop vs normal desktop
  const { height, width } = useWindowDimensions(window);
  const isMobile = width <= mobileWidthRange;
  //For mobile menu only
  const [showSidebar, setShowSidebar] = useState(false);

  const list = Array.isArray(children) ? children : [children];

  // mobile view
  if (isMobile) {
    return (
      <>
        <div className={clsx("absolute left-5 top-5", className)}>
          {showSidebar || editMobile ? (
            <nav>
              <div className="float-right mb-5 cursor-pointer">
                <AiOutlineClose onClick={() => setShowSidebar(false)} />
              </div>
              <ul>
                {children.map((child, id) =>
                  child.type !== DropdownMenu ? (
                    <li className="align-left relative flex flex-col">
                      {child}
                    </li>
                  ) : (
                    Children.map(child.props.children, (grandchild) => (
                      <li className="align-left flex-col">{grandchild}</li>
                    ))
                  )
                )}
              </ul>
            </nav>
          ) : (
            <nav className="cursor-pointer ">
              <IconContext.Provider value={{ color: "#c0c0c0" }}>
                <FaBars onClick={() => setShowSidebar(true)} />
              </IconContext.Provider>
            </nav>
          )}
        </div>
      </>
    );
  }

  //desktop
  return (
    <>
      <nav className={clsx("fixed w-full", className)}>
        <ul className="items-end">
          <li className="inline-flex basis-2/5 pl-3 align-middle">
            <Link link="/">
              <Image
                src="/images/DSC_square_logo.png"
                alt="logo"
                width="50px"
                height="50px"
              />
            </Link>
          </li>
          {list.map((child, id) => (
            <li
              className="float-right inline-flex self-auto align-bottom"
              key={id}
            >
              {child}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
