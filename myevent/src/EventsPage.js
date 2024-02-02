// EventPage.js

import React from 'react';
import Navbar from './Navbar'; // Assuming you have a separate Navbar component
import './EventPage.css';

const EventPage = () => {
  return (
    <div className="event-page">
      <Navbar />

      <div className="meteor-background" style={{ paddingTop: '50.000%', position: 'relative' }}>
        <iframe
          src="https://gifer.com/embed/6IX"
          width="100%"
          height="10%"
          style={{ position: 'absolute', top: 0, left: 0 }}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <p>
        <a href="https://gifer.com"></a>
      </p>

      <div className="foreground">
        <h1 className="event-title">Events</h1>
        {/* Add other content related to events below */}
      </div>

      <div className="events-navbar">
        <ul>
          <li>Event Type 1</li>
          <li>Event Type 2</li>
          <li>Event Type 3</li>
          <li>Event Type 4</li>
          <li>Event Type 5</li>
          <li>Event Type 6</li>
        </ul>
      </div>
    </div>
  );
};

export default EventPage;
