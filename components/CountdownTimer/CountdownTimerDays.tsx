import { useEffect, useState } from "react";

type CountdownTimerDaysProps = {
  //MUST be in YYYY-MM-DDTHH:MM:SS, e.g. 2011-10-30T12:48:00
  endDate: string;
  className?: string;
};

export default function CountdownTimerDays({
  endDate,
  className,
}: CountdownTimerDaysProps) {
  const [daysToCountdown, setDaysToCountdown] = useState<number>();

  const calculateDaysToCountdown = () => {
    //This keeps the interval ticking so the timer keeps counting down
    const interval = setInterval(() => {
      const now = Date.now();
      const parsedEndDate = Date.parse(endDate);
      const daysLeft = Math.floor(
        (parsedEndDate - now) / (24 * 60 * 60 * 1000)
      );

      if (daysLeft < 0) {
        //invalid timer
        clearInterval(interval);
        setDaysToCountdown(0);
      } else {
        setDaysToCountdown(daysLeft);
      }
    });
  };

  //This continually refreshes and updates the timer
  useEffect(() => {
    calculateDaysToCountdown();
  });

  return (
    <>
      <div className={className}>{daysToCountdown}</div>
    </>
  );
}
