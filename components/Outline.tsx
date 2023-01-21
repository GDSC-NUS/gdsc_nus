type OutlineProps = {
  className?: string;
  children: JSX.Element[];
};

export default function Outline({ className, children }: OutlineProps) {
  return <div className="font-outline">{children}</div>;
}
