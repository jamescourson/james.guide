import { useEffect, useState } from "react";

const getCurrentTimeString = () => {
  const date = new Date();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const hour = hours < 10 ? "0" + hours : hours;
  const minute = minutes < 10 ? "0" + minutes : minutes;
  const second = seconds < 10 ? "0" + seconds : seconds;

  const ampm = hour < 12 ? "AM" : "PM";
  const hourTime = hour > 12 ? hour - 12 : hour;

  return hourTime + ":" + minute + ":" + second + ampm;
}

const clockStyles = {
  color: 'ivory',
  marginBottom: '.5em'
}

const LiveClock = () => {
  const [timeString, setTimeString] = useState(getCurrentTimeString()); 
  const updateTimeString = () => setTimeString(getCurrentTimeString());

  useEffect(() => { setTimeout(updateTimeString, 1000) }, [timeString]);

  return (
    <small style={clockStyles}>{timeString}</small>
  );
}

export default LiveClock;
