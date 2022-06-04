import clsx from "clsx";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type IndicatorButtonsProps = {
  index: number;
  size: number;
  setIndex: Dispatch<SetStateAction<number>>;
  className: string;
};

export default function IndicatorButtons({
  index,
  size,
  setIndex,
  className,
}: IndicatorButtonsProps) {
  const [selected, setSelected] = useState<number>(index);
  const [numElements, setNumElements] = useState<number>(size);

  useEffect(() => {
    setSelected(index);
    setNumElements(size);
  }, [index, size]);

  return (
    <div className="w-screen h-5 flex flex-row space-x-5 justify-center">
      {[...Array(numElements)].map((e, i) =>
        i === selected ? (
          <button key={i} className={clsx("w-3 h-3 rounded-full bg-gray-500 border cursor-default", className)} />
        ) : (
          <button
            key={i}
            onClick={() => {
              setIndex(i);
            }}
            className={clsx("w-3 h-3 rounded-full bg-gray-200 cursor-default", className)}
          />
        )
      )}
    </div>
  );
}
