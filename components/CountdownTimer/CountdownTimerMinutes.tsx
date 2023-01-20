import { useEffect, useState } from "react";

type CountdownTimerMinutesProps = {
  //MUST be in YYYY-MM-DDTHH:MM:SS, e.g. 2011-10-30T12:48:00
  endDate: string;
  className?: string;
};

export default function CountdownTimerMinutes({
  endDate,
  className,
}: CountdownTimerMinutesProps) {
  const [minsToCountdown, setMinsToCountdown] = useState<number>();

  const calculateMinsToCountdown = () => {
    const interval = setInterval(() => {
      const now = Date.now();
      const parsedEndDate = Date.parse(endDate);
      const minsLeft = Math.floor(
        ((parsedEndDate - now) % (60 * 60 * 1000)) / (1000 * 60)
      );

      if (minsLeft < 0) {
        //invalid timer
        setMinsToCountdown(0);
        clearInterval(interval);
      } else {
        setMinsToCountdown(minsLeft);
      }
    });
  };

  useEffect(() => {
    calculateMinsToCountdown();
  });

  return (
    <>
      <div className={className}>{minsToCountdown}</div>
    </>
  );
}
