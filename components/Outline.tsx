type OutlineProps = {
  className?: string;
  largeSize: boolean;
  children: JSX.Element[];
};

export default function Outline({
  className,
  children,
  largeSize,
}: OutlineProps) {
  if (largeSize) {
    return <div className="font-outline-large">{children}</div>;
  } else {
    return <div className="font-outline-small">{children}</div>;
  }
}
