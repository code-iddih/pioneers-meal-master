import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function MealPlan() {
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState({});

  //  the note input
  const handleNoteChange = (event) => {
    setNotes({
      ...notes,
      [date.toDateString()]: event.target.value,
    });
  };

  return (
    <div className="meal-plan-container">
      <h2>Meal Plan</h2>
      <div className="calendar-container">
        <Calendar
          onChange={setDate}
          value={date}
        />
        <p>Selected Date: {date.toDateString()}</p>
      </div>
      <div className="note-container">
        <h3>Notes for {date.toDateString()}</h3>
        <textarea
          value={notes[date.toDateString()] || ''}
          onChange={handleNoteChange}
          placeholder="Enter your meal plan notes here..."
        />
      </div>
    </div>
  );
}

export default MealPlan;
