import clsx from "clsx";
import DropdownMenu from "./DropdownMenu";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { Children, useState } from "react";
import { useWindowDimensions } from ".";

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
        <div className="absolute left-5 top-5">
          {showSidebar || editMobile ? (
            <nav>
              <AiOutlineClose onClick={() => setShowSidebar(false)} />
              <ul>
                {children.map((child, id) =>
                  child.type !== DropdownMenu ? (
                    <li>{child}</li>
                  ) : (
                    Children.map(child.props.children, (grandchild) => (
                      <li>{grandchild}</li>
                    ))
                  )
                )}
              </ul>
            </nav>
          ) : (
            <nav>
              <FaBars onClick={() => setShowSidebar(true)} />
            </nav>
          )}
        </div>
      </>
    );
  }

  //desktop
  return (
    <>
      <nav
        className={clsx(
          "z-1000 sticky top-0 m-0 h-40 w-full rounded-none",
          className
        )}
      >
        <ul>
          {list.map((child, id) => (
            <li className="inline-block" key={id}>
              {child}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
