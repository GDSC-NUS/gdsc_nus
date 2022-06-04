import clsx from "clsx";
import { CarouselCardInterface } from ".";

export type CarouselCardProps = {
  className: string;
  children: JSX.Element;
};

export default function CarouselCard(props: CarouselCardProps): CarouselCardInterface {
  const { className, children } = props;

  return (
    <div className={clsx("h-full w-full p-0 m-0 flex items-center justify-center bg-cover", className)}>
      {children}
    </div>
  );
}
