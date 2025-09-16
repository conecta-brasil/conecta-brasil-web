"use client";

import { FC, useEffect, useState } from "react";

type Props = {
    time: string;
    start: boolean;
    children: (time: string) => React.ReactNode;
}

export const Countdown: FC<Props> = ({time, start, children}) => {
    const [remainingTime, setRemainingTime] = useState(time);

    useEffect(() => {
        setRemainingTime(time);
    }, [time]);

    useEffect(() => {
        if (!start) return;

        const interval = setInterval(() => {
            setRemainingTime((prevTime) => {
                const [hours, minutes, seconds] = prevTime.split(":").map(Number);
                let newSeconds = seconds - 1;
                let newMinutes = minutes;
                let newHours = hours;

                if (newSeconds < 0) {
                    newSeconds = 59;
                    newMinutes -= 1;
                }

                if (newMinutes < 0) {
                    newMinutes = 59;
                    newHours -= 1;
                }

                if (newHours < 0) {
                    clearInterval(interval);
                    return "00:00:00";
                }

                return `${String(newHours).padStart(2, "0")}:${String(newMinutes).padStart(2, "0")}:${String(newSeconds).padStart(2, "0")}`;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [start]);
    
  return (
    <>
      {children(remainingTime)}
    </>
  );
}