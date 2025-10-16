import { format } from 'date-fns';
import React, { useEffect, useState } from "react";


const Home = () => {
     const [currentTime, setCurrentTime] = useState(new Date());
// ⏰ Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // 🧠 Format day, date, month, year, time
  const day = format(currentTime, "EEEE");         // Thursday
  const date = format(currentTime, "dd");          // 16
  const month = format(currentTime, "MMMM");       // October
  const year = format(currentTime, "yyyy");        // 2025
  const time = format(currentTime, "hh:mm:ss a");  // 07:25:10 PM

    return (
        <div className='flex justify-between'>
            <p>Home Page</p>
    <div className="flex items-center gap-2">
      <p className="text-xl">{day}, {month} {date}, {year}</p>
      <p className="text-xl font-semibold">{time}</p>
    </div>
            
        </div>
    );
};

export default Home;