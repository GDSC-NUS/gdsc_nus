import clsx from "clsx";
import { CarouselCardInterface } from ".";

export type CarouselCardProps = {
  className: string;
  children: JSX.Element;
};

export default function CarouselCard({
  className,
  children,
}: CarouselCardProps): CarouselCardInterface {
  return (
    <div
      className={clsx(
        "m-0 flex h-full w-full items-center justify-center bg-cover p-0",
        className
      )}
    >
      {children}
    </div>
  );
}
