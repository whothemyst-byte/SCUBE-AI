
import React, { useState, useEffect } from 'react';

const Countdown: React.FC = () => {
  const [targetDate] = useState(() => {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 30);
    return futureDate;
  });

  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
        timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    const value = String(timeLeft[interval as keyof typeof timeLeft] ?? 0).padStart(2, '0');
    
    return (
      <div key={interval} className="flex flex-col items-center">
        <div className="relative pb-8">
            <div className="text-3xl md:text-5xl font-bold text-white tracking-widest">{value}</div>
            <div
                className="absolute top-full left-0 w-full h-full text-3xl md:text-5xl font-bold text-white tracking-widest blur-sm opacity-20 pointer-events-none"
                style={{
                transform: 'scaleY(-1)',
                maskImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.5), transparent)',
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.5), transparent)',
                }}
                aria-hidden="true"
            >
                {value}
            </div>
        </div>
        <div className="text-xs text-gray-400 uppercase">{interval}</div>
      </div>
    );
  });

  return (
    <div className="flex items-center justify-center gap-4 md:gap-8 p-4 rounded-lg">
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
};

export default Countdown;
