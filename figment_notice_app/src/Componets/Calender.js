import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./calender.css"; // Import your CSS file for calendar styles
import { useTheme } from '../Context/ThemeContext';

const MyCalendar = () => { // Receive isDarkMode prop
  const [date, setDate] = useState(new Date());
  const { toggleTheme, isDarkMode } = useTheme();

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div className={isDarkMode ? 'dark-calendar-container' : 'light-calendar-container'}>
      <Calendar
        className={isDarkMode ? 'dark-calendar' : 'light-calendar'} // Conditionally apply dark mode class
        onChange={onChange}
        value={date}
      />
    </div>
  );
};

export default MyCalendar;
