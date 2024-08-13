import React from 'react';
import { useState } from 'react';

function FeedbackForm() {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement feedback submission logic
    console.log('Feedback submitted:', feedback);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Feedback</h2>
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Enter your feedback here..."
        rows="4"
        required
      />
      <button type="submit">Submit Feedback</button>
    </form>
  );
}

export default FeedbackForm;
