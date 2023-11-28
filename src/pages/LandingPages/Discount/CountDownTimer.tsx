import { useState, useEffect } from "react";
import "./DiscountStyle.css";

interface CountdownProps {
  targetTime: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function CountdownTimer({ targetTime }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const timeDifference = targetTime.getTime() - now.getTime();

      if (timeDifference <= 0) {
        clearInterval(intervalId);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetTime]);

  return (
    <div className="countdown flex gap-[20px]">
      <span className=" w-[60px] h-[75px] flex flex-col items-center justify-center rounded-[6px] glass">
        <div className="text-[25px] font-medium">
          {String(timeLeft.days).padStart(2, "0")}
        </div>
        <span className="text-[18px]">DAYS</span>
      </span>

      <span className="glass w-[60px] h-[75px] flex flex-col items-center justify-center">
        <div className="text-[25px] font-medium">
          {String(timeLeft.hours).padStart(2, "0")}
        </div>
        <span className="text-[18px]">HRS</span>
      </span>

      <span className="glass w-[60px] h-[75px] flex flex-col items-center justify-center">
        <div className="text-[25px] font-medium">
          {String(timeLeft.minutes).padStart(2, "0")}
        </div>
        <span className="text-[18px]">MINS</span>
      </span>

      <span className="glass w-[60px] h-[75px] flex flex-col items-center justify-center">
        <div className="text-[25px] font-medium">
          {String(timeLeft.seconds).padStart(2, "0")}
        </div>
        <span className="text-[18px]">SECS</span>
      </span>
    </div>
  );
}

export default CountdownTimer;
