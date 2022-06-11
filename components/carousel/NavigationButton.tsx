import clsx from "clsx";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type NavigationButtonsProps = {
  index: number;
  size: number;
  setIndex: Dispatch<SetStateAction<number>>;
  className: string;
};

export default function NavigationButtons({
  index,
  size,
  setIndex,
  className,
}: NavigationButtonsProps) {
  return (
    <>
      <button
        className={clsx(
          "absolute left-5 z-20 h-10 w-10 rounded-full bg-slate-500 text-white",
          className
        )}
        onClick={() => setIndex((size + index - 1) % size)}
      >
        {"<"}
      </button>
      <button
        className={clsx(
          "absolute right-5 z-20 h-10 w-10 rounded-full bg-slate-500 text-white",
          className
        )}
        onClick={() => setIndex((index + 1) % size)}
      >
        {">"}
      </button>
    </>
  );
}
