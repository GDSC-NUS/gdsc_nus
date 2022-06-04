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
    <div className={clsx("absolute left-5 rounded-full bg-slate-500 text-white", className)}>
        <button className="h-10 w-10" onClick={() => setIndex(previousIndex)}>{"<"}</button>
    </div>
    <div className={clsx("absolute right-5 rounded-full bg-slate-500 text-white", className)}>
        <button className=" h-10 w-10" onClick={() => setIndex(nextIndex)}>{">"}</button>
    </div>
    </>
)

}