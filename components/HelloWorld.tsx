import clsx from "clsx";
import React, { ReactNode } from "react";

interface HelloWorldProps {
  children?: ReactNode;
  className?: string;
  verbose?: boolean;
}

export default function HelloWorld({
  children,
  className,
  verbose,
}: HelloWorldProps) {
  return (
    <div className={clsx("p-5", className)}>
      <p>Hello there! {verbose && "Really nice to meet you!"}</p>
      <div>{children}</div>
    </div>
  );
}
