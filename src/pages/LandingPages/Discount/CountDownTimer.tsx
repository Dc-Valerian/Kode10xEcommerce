import { useState, useEffect } from "react";
import "./DiscountStyle.css";

function CountdownTimer() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const time = new Date().getTime();
    const thatDay = new Date("02/14/2024 00:00:00").getTime();

    const difference = thatDay - time;

    const inty = setInterval(() => {
      clearInterval(inty);
      const dDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(dDays);

      const dHours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(dHours);

      const dMinutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      setMinutes(dMinutes);

      const dSeconds = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(dSeconds);
    }, 1000);
  }, [seconds]);

  return (
    <div className="countdown flex gap-[20px]">
      <span className=" w-[60px] h-[75px] flex flex-col items-center justify-center rounded-[6px] glass counter">
        <div className="text-[25px] font-medium">{days}</div>
        <span className="text-[18px]">DAYS</span>
      </span>

      <span className="glass counter  w-[60px] h-[75px] flex flex-col items-center justify-center">
        <div className="text-[25px] font-medium">{hours}</div>
        <span className="text-[18px]">HRS</span>
      </span>

      <span className="glass counter  w-[60px] h-[75px] flex flex-col items-center justify-center">
        <div className="text-[25px] font-medium">{minutes}</div>
        <span className="text-[18px]">MINS</span>
      </span>

      <span className="glass  counter w-[60px] h-[75px] flex flex-col items-center justify-center">
        <div className="text-[25px] font-medium">{seconds}</div>
        <span className="text-[18px]">SECS</span>
      </span>
    </div>
  );
}

export default CountdownTimer;
