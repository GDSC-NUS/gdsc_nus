import clsx from "clsx";
import { ReactNode } from "react";
import { ButtonInterface, CarouselCardInterface } from ".";

export type CarouselCardProps = {
  className: string;
  showButton: boolean;
  image: string;
  button: ButtonInterface;
};

export default function CarouselCard(props: CarouselCardProps): CarouselCardInterface {
  const { className, showButton, image, button } = props;
  let a = new URL(image);

  return (
    <div className={clsx("h-full w-full p-0 m-0 flex items-center justify-center bg-cover", className)} style={{backgroundImage: `url(${a.href})`}}>
      {showButton && button}
    </div>
  );
}
