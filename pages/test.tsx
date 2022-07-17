import { Link } from "../components";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import usePreventBodyScroll from "../components/Navbar/UsePreventBodyScroll";


export default function Test() {
  return (
    <>
      <Link className="m-8" link="https://dsc.comp.nus.edu.sg">
        Go to our website!
      </Link>
    </>
  );
}
