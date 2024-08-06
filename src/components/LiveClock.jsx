import { useEffect, useState } from "react";

const getCurrentDateTimeString = () => {
  const date = new Date();

  // get dateString
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();
  const currentDay = date.getDate();

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const dateString = `${months[currentMonth]} ${currentDay}, ${currentYear}`;

  // get timeString
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const currentHour = hours < 10 ? "0" + hours : hours;
  const currentMinute = minutes < 10 ? "0" + minutes : minutes;
  const currentSecond = seconds < 10 ? "0" + seconds : seconds;

  const ampm = currentHour < 12 ? "AM" : "PM";
  const hourTime = currentHour > 12 ? currentHour - 12 : currentHour;
  const timeString = `${hourTime}:${currentMinute}:${currentSecond}${ampm}`;

  // return dateTimeString
  return `${dateString} | ${timeString}`;
}

const clockStyles = {
  color: 'ivory',
  marginBottom: '.5em',
  fontWeight: 'bold'
}

const LiveClock = () => {
  const [dateTimeString, setDateTimeString] = useState(getCurrentDateTimeString());
  const updateDateTimeString = () => setDateTimeString(getCurrentDateTimeString());
  const resetUpdateTimeout = () => setTimeout(updateDateTimeString, 1000);

  useEffect(() => { resetUpdateTimeout() }, [dateTimeString]);

  return (
    <small style={clockStyles}>{dateTimeString}</small>
  );
}

export default LiveClock;
