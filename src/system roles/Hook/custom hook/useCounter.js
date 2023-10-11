import React, { useEffect, useState } from "react";

const useCounter = (time) => {

    const [createdAt, setCreatedAt] = useState(new Date(time));
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        const currentTime = new Date();
        const timeDifference = Math.floor((currentTime - createdAt) / 1000);
  
        const minutes = Math.floor(timeDifference / 60);
        const seconds = timeDifference % 60;
        setMin(minutes);
        setSec(seconds);
      }, 1000);
  
      return () => {
        clearInterval(interval);
      };
    }, [createdAt]);

    return {
        min , sec
    }
};

export default useCounter;
