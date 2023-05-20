import clsx from "clsx";
import { useState } from "react";

interface TitleBoxProps {
  title: JSX.Element;
  className?: string;
  children?: JSX.Element;
}
export default function TitleBox({
  title,
  className,
  children,
}: TitleBoxProps) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <button
        onClick={toggleExpanded}
        className={clsx(
          "border-stone-950 w-1/2 flex-row bg-blue-400 p-2 font-bold text-gray-900 hover:bg-blue-200",
          className
        )}
      >
        {title}
      </button>
      {expanded && <div>{children}</div>}
    </div>
  );
}
