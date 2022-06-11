import { useEffect, useState } from "react";
import { CarouselCardInterface, CarouselInterface } from ".";
import IndicatorButtons from "./IndicatorButton";
import NavigationButtons from "./NavigationButton";

export type CarouselProps = {
  className: string;
  children?: CarouselCardInterface[];
  showIndicators: boolean;
  IndicatorsClassName: string;
  showArrows: boolean;
  ArrowsClassName: string;
  autoplay: boolean;
  activeKey: string;
};

export default function Carousel({
  className,
  children,
  showIndicators,
  IndicatorsClassName,
  showArrows,
  ArrowsClassName,
  autoplay,
  activeKey = "0",
}: CarouselProps): CarouselInterface {
  const [selectedCard, setSelectedCard] = useState<number>(0);
  const [currentLoop, setCurrentLoop] = useState<boolean>(false);

  // Autoloop card every 5 seconds
  useEffect(() => {
    autoplay &&
      setTimeout(() => {
        children && setSelectedCard((selectedCard + 1) % children.length);
        setCurrentLoop(!currentLoop);
      }, 5000);
  }, [children, currentLoop]);

  // For displaying card based on activekey selection
  useEffect(() => {
    setSelectedCard(parseInt(activeKey));
  }, [activeKey]);

  return (
    <div className={className}>
      <div className="absolute h-full w-full">
        {children && children[selectedCard]}
      </div>
      {showIndicators && (
        <div className="absolute bottom-5 flex w-full flex-row justify-center">
          <IndicatorButtons
            className={IndicatorsClassName}
            index={selectedCard}
            setIndex={setSelectedCard}
            size={children!.length}
          />
        </div>
      )}
      {showArrows && (
        <div className="flex h-full w-full flex-row items-center">
          <NavigationButtons
            className={ArrowsClassName}
            index={selectedCard}
            setIndex={setSelectedCard}
            size={children!.length}
          />
        </div>
      )}
    </div>
  );
}
