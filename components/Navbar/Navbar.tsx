import clsx from "clsx";
import DropdownMenu from "./DropdownMenu";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Children, useState } from "react";
import { useWindowDimensions } from "../utils";
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
  if (typeof window === "undefined") return <h2>Error Message</h2>;

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
        {(showSidebar || editMobile) && (
          <div
            className="fixed inset-0 z-30 w-full bg-gray-400 bg-opacity-75"
            onClick={() => setShowSidebar(false)}
          />
        )}
        <div
          className={
            showSidebar || editMobile
              ? clsx(
                  "fixed left-0 top-0 z-50 h-screen w-6/12 self-start bg-white pt-5 pl-5 duration-1000 ease-out",
                  className
                )
              : clsx(
                  "fixed -left-full z-40 h-screen self-start pt-5 pl-5",
                  className
                )
          }
        >
          <div
            className="float-right cursor-pointer pr-3"
            onClick={() => setShowSidebar(false)}
          >
            <IconContext.Provider value={{ size: "30px" }}>
              <AiOutlineClose />
            </IconContext.Provider>
          </div>
          <ul className="absolute left-0 pt-10">
            {list.map((child, id) =>
              child.type !== DropdownMenu ? (
                <li className="border-right-color left -0 relative top-0 flex flex-col text-left">
                  {child}
                </li>
              ) : (
                Children.map(child.props.children, (grandchild) => (
                  <li className="align-left border-right-color relative flex flex-col">
                    {grandchild}
                  </li>
                ))
              )
            )}
          </ul>
        </div>

        <div
          className={
            showSidebar || editMobile
              ? "fixed -left-full cursor-pointer pt-3 pl-10"
              : "fixed left-0 z-50 h-0 cursor-pointer pt-3 pl-10 duration-500 ease-out"
          }
        >
          <button className="">
            <IconContext.Provider value={{ color: "#c0c0c0", size: "50px" }}>
              <FaBars onClick={() => setShowSidebar(true)} />
            </IconContext.Provider>
          </button>
        </div>
      </>
    );
  }

  //desktop
  return (
    <>
      <nav
        className={clsx(
          "fixed z-50 flex w-full flex-row items-center bg-white",
          className
        )}
      >
        <div className="inline-flex w-3/12 align-middle">
          <Link className="relative float-left ml-5" link="/">
            <Image
              src="/images/DSC_square_logo.png"
              alt="logo"
              width="50px"
              height="50px"
              className="h-full"
            />
          </Link>
        </div>
        <div className="float-right flex flex-grow flex-row justify-end">
          {list.map((child, id) => (
            <div className="relative">{child}</div>
          ))}
        </div>
      </nav>
    </>
  );
}
