import clsx from "clsx";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type NavigationButtonsProps = {
  index: number;
  size: number;
  setIndex: Dispatch<SetStateAction<number>>;
  className: string;
  leftChild: JSX.Element;
  rightChild: JSX.Element;
};

export default function NavigationButtons({
  index,
  size,
  setIndex,
  className,
  leftChild,
  rightChild,
}: NavigationButtonsProps) {
  return (
    <>
      <button
        className={clsx("absolute left-5 z-20", className)}
        onClick={() => setIndex((size + index - 1) % size)}
      >
        {leftChild}
      </button>
      <button
        className={clsx("absolute right-5 z-20", className)}
        onClick={() => setIndex((index + 1) % size)}
      >
        {rightChild}
      </button>
    </>
  );
}
