import { useState, useEffect } from "react";

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
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000); 

    return () => clearInterval(intervalId);
  }, [targetTime]);

  return (
    <div className="countdown flex gap-1">
      <span className="countdown-item">
        {String(timeLeft.days).padStart(2, "0")}
        <span className="text-xl">D</span>
      </span>
      :
      <span className="countdown-item">
        {String(timeLeft.hours).padStart(2, "0")}
        <span className="text-xl">H</span>
      </span>
      :
      <span className="countdown-item">
        {String(timeLeft.minutes).padStart(2, "0")}
        <span className="text-xl">M</span>
      </span>
      :
      <span className="countdown-item">
        {String(timeLeft.seconds).padStart(2, "0")}
        <span className="text-xl">S</span>
      </span>
    </div>
  );
}

export default CountdownTimer;
