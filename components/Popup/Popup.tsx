import clsx from "clsx";
import { useState } from "react";
import PopupWindow from "./PopupWindow";

interface PopupProps {
  windowClassName?: string;
  popupBoxClassName?: string;
  clickableClassName?: string;
  clickable?: JSX.Element;
  popupBox?: JSX.Element;
}

export default function Popup({
  windowClassName,
  popupBoxClassName,
  clickableClassName,
  clickable,
  popupBox,
}: PopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <div
        className={clsx("hover: cursor-pointer", clickableClassName)}
        onClick={() => setIsOpen(true)}
      >
        {clickable}
      </div>
      {isOpen && (
        <PopupWindow
          closeButton={setIsOpen}
          windowClassName={windowClassName}
          popupBoxClassName={popupBoxClassName}
        >
          {popupBox}
        </PopupWindow>
      )}
    </div>
  );
}
