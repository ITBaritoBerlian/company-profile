import * as React from "react";

type CounterProps = {
  from?: number; // mulai dari berapa (default 0)
  to: number; // target angka
  duration?: number; // durasi animasi (ms)
  suffix?: string; // tambahan teks, misal "%", "+", "/7"
};

export const Counter: React.FC<CounterProps> = ({
  from = 0,
  to,
  duration = 2000,
  suffix = "",
}) => {
  const [value, setValue] = React.useState(from);

  React.useEffect(() => {
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(Math.floor(progress * (to - from) + from));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [from, to, duration]);

  return (
    <span>
      {value}
      {suffix}
    </span>
  );
};
