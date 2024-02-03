// EventPage.js

import React,{useState} from 'react';
import Navbar from './Navbar';
import EventCard from './EventCard'; // Assuming you have the EventCard component
import './EventPage.css';

const EventPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  // Sample event data (replace with your actual data)
  const eventsData = [
    {
      eventName: 'Event 1',
      eventTag: 'Tag 1',
      eventDescription: 'Description 1',
      imageUrl: 'https://images.unsplash.com/photo-1605496036006-fa36378ca4ab?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      eventName: 'Event 2',
      eventTag: 'Tag 2',
      eventDescription: 'Description 2',
      imageUrl: 'https://images.unsplash.com/photo-1605496036006-fa36378ca4ab?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      eventName: 'Event 3',
      eventTag: 'Tag 3',
      eventDescription: 'Description 3',
      imageUrl: 'https://images.unsplash.com/photo-1605496036006-fa36378ca4ab?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      eventName: 'Event 4',
      eventTag: 'Tag 4',
      eventDescription: 'Description 4',
      imageUrl: 'https://images.unsplash.com/photo-1605496036006-fa36378ca4ab?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      eventName: 'Event 5',
      eventTag: 'Tag 5',
      eventDescription: 'Description 5',
      imageUrl: 'https://images.unsplash.com/photo-1605496036006-fa36378ca4ab?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      eventName: 'Event 6',
      eventTag: 'Tag 6',
      eventDescription: 'Description 6',
      imageUrl: 'https://images.unsplash.com/photo-1605496036006-fa36378ca4ab?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    ];
    const filteredEvents = selectedCategory
    ? eventsData.filter(event => event.eventTag === selectedCategory)
    : eventsData;

  const handleCategoryClick = category => {
    setSelectedCategory(category);
  };
  return (
    <div className="event-page">
      <Navbar />

      <div className="meteor-background" style={{ paddingTop: '50.000%', position: 'relative' }}>
        <iframe
          src="https://gifer.com/embed/6IX"
          width="100%"
          height="16.75%"
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
          <li onClick={() => handleCategoryClick('Tag 1')}>Event Type 1</li>
          <li onClick={() => handleCategoryClick('Tag 2')}>Event Type 2</li>
          <li onClick={() => handleCategoryClick('Tag 3')}>Event Type 3</li>
          <li onClick={() => handleCategoryClick('Tag 4')}>Event Type 4</li>
          <li onClick={() => handleCategoryClick('Tag 5')}>Event Type 5</li>
          <li onClick={() => handleCategoryClick('Tag 6')}>Event Type 6</li>
        </ul>
      </div>
      <div className="event-cards-container">
        {filteredEvents.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

export default EventPage;
