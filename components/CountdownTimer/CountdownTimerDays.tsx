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
    const interval = setInterval(() => {
      const now = Date.now();
      const parsedEndDate = Date.parse(endDate);
      const daysLeft = Math.floor(
        (parsedEndDate - now) / (24 * 60 * 60 * 1000)
      );

      if (daysLeft < 0) {
        //invalid timer
        setDaysToCountdown(0);
      } else {
        setDaysToCountdown(daysLeft);
      }
    });
  };
  useEffect(() => {
    calculateDaysToCountdown();
  });

  return (
    <>
      <div className={className}>{daysToCountdown}</div>
    </>
  );
}
