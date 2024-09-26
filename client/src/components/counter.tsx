import React, { useEffect, useState, useRef } from "react";

interface CounterProps {
  endValue: number;
  duration: number;
}

const Counter: React.FC<CounterProps> = ({ endValue, duration }) => {
  const [count, setCount] = useState<number>(0);
  const [hasCounted, setHasCounted] = useState<boolean>(false);
  const counterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!counterRef.current) return;

      const rect = counterRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= windowHeight && !hasCounted) {
        startCounting();
        setHasCounted(true);
      }
    };

    const startCounting = () => {
      let start = 0;
      const incrementTime = Math.ceil(duration / endValue);

      const timer = setInterval(() => {
        start += 1;
        setCount(start);

        if (start === endValue) {
          clearInterval(timer);
        }
      }, incrementTime);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [endValue, duration, hasCounted]);

  return (
    <div
      ref={counterRef}
      className="text-4xl font-bold text-blue-600 transition duration-500 ease-in-out"
    >
      +{count}
    </div>
  );
};

export default Counter;

{/* <Counter endValue={100} duration={2000} />
        <div className="text-8xl outline-text">
          01
        </div> */}