import React, { useState } from 'react';
import Footer from "./Footer";

function FeedbackForm() {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedback);
    setFeedback(''); // Clear feedback after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Feedback</h2>
      <textarea 
        value={feedback} 
        onChange={(e) => setFeedback(e.target.value)} 
        placeholder="Your feedback here..." 
        rows="4" 
        cols="50" 
        required 
      />
      <button type="submit">Submit Feedback</button>
      <Footer /> 
    </form>
  );
}

export default FeedbackForm;
