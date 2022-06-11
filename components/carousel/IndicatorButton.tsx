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

  useEffect(() => {
    setSelected(index);
  }, [index, size]);

  return (
    <div className="flex h-5 w-screen flex-row justify-center space-x-5">
      {[...Array(size)].map((e, i) =>
        i === selected ? (
          <button
            key={i}
            className={clsx(
              "z-20 h-3 w-3 cursor-default rounded-full border bg-gray-500",
              className
            )}
          />
        ) : (
          <button
            key={i}
            onClick={() => {
              setIndex(i);
            }}
            className={clsx(
              "z-20 h-3 w-3 cursor-default rounded-full bg-gray-200",
              className
            )}
          />
        )
      )}
    </div>
  );
}
