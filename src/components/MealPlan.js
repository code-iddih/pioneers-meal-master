import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Footer from "./Footer";

function MealPlan() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <h2>Meal Plan</h2>
      <Calendar
        onChange={setDate}
        value={date}
      />
      <p>Selected Date: {date.toDateString()}</p>
      <Footer /> 
    </div>
  );
}

export default MealPlan;
