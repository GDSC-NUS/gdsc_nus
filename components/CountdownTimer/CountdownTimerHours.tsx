import { useEffect, useState } from "react";

type CountdownTimerHoursProps = {
  //MUST be in YYYY-MM-DDTHH:MM:SS, e.g. 2011-10-30T12:48:00
  endDate: string;
  className?: string;
};

export default function CountdownTimerHours({
  endDate,
  className,
}: CountdownTimerHoursProps) {
  const [hoursToCountdown, setHoursToCountdown] = useState<number>();

  const calculateHoursToCountdown = () => {
    const interval = setInterval(() => {
      const now = Date.now();
      const parsedEndDate = Date.parse(endDate);
      const hoursLeft = Math.floor(
        ((parsedEndDate - now) % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );

      if (hoursLeft < 0) {
        //invalid timer
        setHoursToCountdown(0);
        clearInterval(interval);
      } else {
        setHoursToCountdown(hoursLeft);
      }
    });
  };

  useEffect(() => {
    calculateHoursToCountdown();
  });

  return (
    <>
      <div className={className}>{hoursToCountdown}</div>
    </>
  );
}
