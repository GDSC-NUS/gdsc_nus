import { Link } from "../components";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import usePreventBodyScroll from "../components/Navbar/UsePreventBodyScroll";

function onWheel(apiObj: any, ev: React.WheelEvent): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

export default function Test() {
  const items = [
    "Home",
    "About Us",
    "Our Team",
    "Our Projects",
    "Apply Now",
    6,
    7,
    8,
    9,
    10,
  ];
  const { disableScroll, enableScroll } = usePreventBodyScroll();
  return (
    <>
      <>
        <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
          <ScrollMenu
            onWheel={onWheel}
            scrollContainerClassName="scrollbar-hide"
          >
            {items.map((child, id) => (
              <div className="inline-block w-20">{child}</div>
            ))}
          </ScrollMenu>
        </div>
      </>
    </>
  );
}
