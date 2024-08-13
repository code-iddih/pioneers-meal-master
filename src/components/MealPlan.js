import React from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

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
    </div>
  );
}

export default MealPlan;
