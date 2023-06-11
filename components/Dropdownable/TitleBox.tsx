import clsx from "clsx";
import { useState, useEffect } from "react";

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
    <div className={className}>
      <button onClick={toggleExpanded}>{title}</button>
      {expanded && <div>{children}</div>}
    </div>
  );
}
