import clsx from "clsx";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type NavigationButtonsProps = {
  previous: number;
  next: number;
  setIndex: Dispatch<SetStateAction<number>>;
  className: string;
};

export default function NavigationButtons({
previous,
next,
  setIndex,
  className
}: NavigationButtonsProps) {
  const [previousIndex, setPreviousIndex] = useState<number>(previous);
  const [nextIndex, setNextIndex] = useState<number>(next);

  useEffect(()=> {
      setPreviousIndex(previous);
  }, [previous]);

  useEffect(() => {
      setNextIndex(next)
  }, [next]);

return (
    <>
        <button className={clsx("absolute h-10 w-10 left-5 rounded-full bg-slate-500 text-white", className)} onClick={() => setIndex(previousIndex)}>{"<"}</button>
        <button className={clsx("absolute right-5 h-10 w-10 rounded-full bg-slate-500 text-white", className)} onClick={() => setIndex(nextIndex)}>{">"}</button>
    </>
)
}