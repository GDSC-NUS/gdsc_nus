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
import NavigationButtons from "./NavigationButton";

export type CarouselProps = {
  className: string;
  children?: CarouselCardInterface[];
  showIndicators: boolean;
  IndicatorsClassName: string;
  showArrows: boolean;
  ArrowsClassName: string;
};

export default function Carousel(props: CarouselProps): CarouselInterface {
  const { className, children, showIndicators, IndicatorsClassName, showArrows, ArrowsClassName } = props;
  const [selectedCard, setSelectedCard] = useState<number>(0);
  const [currentLoop, setCurrentLoop] = useState<boolean>(false);

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
    <div className={className}>
      <div className="absolute w-full h-full">
        {children && children[selectedCard]}
      </div>
      {showIndicators &&
      <div className="absolute bottom-5 w-full flex flex-row justify-center">
        <IndicatorButtons
        className={IndicatorsClassName}
          index={selectedCard}
          setIndex={setSelectedCard}
          size={children!.length}
        />
      </div>}
      {showArrows && 
      <div className="flex flex-row items-center h-full w-full">
      <NavigationButtons
      className={ArrowsClassName}
        previous={selectedCard === 0 ? children!.length : selectedCard - 1}
        next={selectedCard === children!.length - 1 ? 0 : selectedCard + 1}
        setIndex={setSelectedCard}
      />
      </div>}

    </div>
  );
}
