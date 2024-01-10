import { useEffect } from "react";
import { useState } from "react";

let interval;
export const UseTimer = () => {
  const [time, setTime] = useState(360000);
  const [start, setStart] = useState(true);
  if (time == 0) {
    clearInterval(interval);
  }

  useEffect(() => {
    if (start) {
      interval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [start]);

  return { time, setTime, start, setStart };
};
