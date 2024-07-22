// src/Events.jsx
import React, { useEffect, useState } from 'react';

const Events = () => {
  const [eventsLogs, setEventsLogs] = useState('');

  useEffect(() => {
    fetch('/events.log')
      .then(response => response.text())
      .then(data => setEventsLogs(data))
      .catch(error => console.error('Error fetching events logs:', error));
  }, []);

//   console.log("eventsLogs", eventsLogs);

  return (
    <div>
      {/* <h2>События</h2> */}
      <pre>{eventsLogs}</pre>
    </div>
  );
};

export default Events;
