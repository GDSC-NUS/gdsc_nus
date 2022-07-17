import clsx from "clsx";
import React, { useState } from "react";
import { useWindowDimensions } from "../utils";
import Link from "../Link";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import usePreventBodyScroll from "./usePreventBodyScroll";
import Image from "next/Image";

type NavbarProps = {
  className?: string;
  children: JSX.Element[];
  editMobile: boolean;
  mobileWidthRange: number;
};

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

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

  //Converts children to an array
  const items = Array.isArray(children) ? children : [children];

  //Converts items to a format that is usable for Mobile View ScrollMenu
  const getItems = () =>
    items.map((child, ind) => ({ id: `element-${ind}`, child: { child } }));
  const [list, setList] = useState(getItems);

  //Displays in Mobile View. Checks if item is visible, before fading it (if at corners)
  function DisplayItem({ child, itemId }: { child: any; itemId: string }) {
    const { isItemVisible } = React.useContext(VisibilityContext);
    if (isItemVisible(itemId)) {
      return <div className="inline-block">{child.child}</div>;
    }
    return <div className="inline-block opacity-50">{child.child}</div>;
  }

  //Scroll/Swipe for mobile view
  function onWheel(apiObj: any, ev: React.WheelEvent): void {
    const isTouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

    if (isTouchpad) {
      ev.stopPropagation();
      return;
    }

    if (ev.deltaY > 0) {
      apiObj.scrollNext();
    } else if (ev.deltaY < 0) {
      apiObj.scrollPrev();
    }
  }

  //Mobile view
  const { disableScroll, enableScroll } = usePreventBodyScroll();

  if (isMobile) {
    return (
      <>
        <div
          className={clsx("absolute z-50 w-full bg-white", className)}
          onMouseEnter={disableScroll}
          onMouseLeave={enableScroll}
        >
          <div className="float-left inline-block border-b-0 pl-3 pr-3 align-middle">
            <Link className="pt-1" link="/">
              <Image
                src="/images/DSC_square_logo.png"
                alt="logo"
                width="50px"
                height="50px"
              />
            </Link>
          </div>
          <ScrollMenu
            onWheel={onWheel}
            scrollContainerClassName="scrollbar-hide flex flex-row flex-grow float-right mr-5 h-full"
          >
            {list.map(({ child, id }) => (
              <DisplayItem child={child} itemId={id} />
            ))}
          </ScrollMenu>
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
        <div className="pl-3 align-middle">
          <Link className="relative float-left ml-5" link="/">

            <Image
              src="/images/DSC_square_logo.png"
              alt="logo"
              height="50px"
              width="50px"
              objectPosition="0px 2.5px"
            />
          </Link>
        </div>
        <div className="float-right mr-5 flex flex-grow flex-row justify-end">
          {items.map((child) => (
            <div className="inline-block">{child}</div>

          ))}
        </div>
      </nav>
    </>
  );
}
