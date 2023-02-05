import clsx from "clsx";

type OutlineProps = {
  className: string;
  largeSize: boolean;
  children: JSX.Element[];
};

export default function Outline({
  className,
  children,
  largeSize,
}: OutlineProps) {
  if (largeSize) {
    return (
      <div className={clsx("font-outline-large", className)}>{children}</div>
    );
  } else {
    return (
      <div className={clsx("font-outline-small", className)}>{children}</div>
    );
  }
}
