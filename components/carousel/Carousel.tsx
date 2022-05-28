/* eslint-disable react/jsx-key */
import clsx from "clsx";
import { ReactNode, useEffect, useState } from "react";
import {
  CarouselCard,
  CarouselCardInterface,
  CarouselCardProps,
  CarouselInterface,
} from ".";
import IndicatorButtons from "./IndicatorButton";

export type CarouselProps = {
  height?: string;
  width?: string;
  className: string;
  children?: CarouselCardInterface[];
};

export default function Carousel(props: CarouselProps): CarouselInterface {
  const { height, width, className, children } = props;
  const [propWidth, setPropWidth] = useState<string>("screen");
  const [propHeight, setPropHeight] = useState<string>("250px");
  const [selectedCard, setSelectedCard] = useState<number>(0);
  const [currentLoop, setCurrentLoop] = useState<boolean>(false);

  useEffect(()=> {
    setPropWidth(width!);
  }, [width]);

  useEffect(()=> {
    setPropHeight(height!);
  }, [height]);

  // Autoloop card every 5 seconds
  useEffect(() => {
    setTimeout(() => {
      if (children && selectedCard >= children.length - 1) {
        setSelectedCard(0);
      } else {
        setSelectedCard(selectedCard + 1);
      }
      setCurrentLoop(!currentLoop);
    }, 5000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children, currentLoop]);

  return (
    <div
      className={`${className} h-[${propHeight}] w-[${propWidth}]`}
    >
      <div className="flex flex-row w-full h-full">
        {children && children[selectedCard]}
      </div>
      <div className="absolute bottom-5 w-full flex flex-row justify-center">
        <IndicatorButtons
          index={selectedCard}
          setIndex={setSelectedCard}
          size={children!.length}
        />
      </div>
    </div>
  );
}
