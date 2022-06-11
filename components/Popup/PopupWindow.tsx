import clsx from "clsx";
import React, { ReactNode } from "react";

export interface PopupWindowProps {
  windowClassName?: string;
  popupBoxClassName?: string;
  closeButton: React.Dispatch<React.SetStateAction<boolean>>;
  children?: JSX.Element;
}

export default function PopupWindow({
  windowClassName,
  popupBoxClassName,
  children,
  closeButton,
}: PopupWindowProps) {
  return (
    <>
      <div
        className={clsx(
          "fixed inset-0 z-10 bg-gray-500 bg-opacity-75",
          windowClassName
        )}
        onClick={() => closeButton(false)}
      />
      <div
        className={clsx(
          "fixed inset-0 z-20 m-auto h-fit max-h-[80vh] min-h-[20vh] w-fit min-w-[40vw] max-w-[80vw] overflow-auto rounded-lg bg-white p-3",
          popupBoxClassName
        )}
      >
        <button
          className="float-right cursor-pointer font-bold text-gray-500"
          onClick={() => closeButton(false)}
        >
          X
        </button>
        <div className="p-8">{children}</div>
      </div>
    </>
  );
}