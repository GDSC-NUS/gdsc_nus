import clsx from "clsx";
import { useState } from "react";
import PopupWindow from "./PopupWindow";
import { Transition } from "@headlessui/react";

interface PopupProps {
  windowClassName?: string;
  popupBoxClassName?: string;
  clickableClassName?: string;
  clickable?: JSX.Element;
  popupBox?: JSX.Element;
  preview?: boolean;
}

export default function Popup({
  windowClassName,
  popupBoxClassName,
  clickableClassName,
  clickable,
  popupBox,
  preview = false,
}: PopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={clsx("hover: cursor-pointer", clickableClassName)}
        onClick={() => setIsOpen(true)}
      >
        {clickable}
      </div>
      {/*Disabled transitions as elements underneath transition slide will show up as the opacity of gray screen is non-100% */}
      <Transition
        show={isOpen || preview}
        // enter="transition-opacity duration-300"
        // enterFrom="opacity-0"
        // enterTo="opacity-100"
        // leave="transition-opacity duration-300"
        // leaveFrom="opacity-100"
        // leaveTo="opacity-0"
      >
        <PopupWindow
          closeButton={setIsOpen}
          windowClassName={windowClassName}
          popupBoxClassName={popupBoxClassName}
        >
          {popupBox}
        </PopupWindow>
      </Transition>
    </>
  );
}
