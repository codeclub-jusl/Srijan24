// EventPage.js

// EventPage.js

import React, { useState } from 'react';
import Navbar from './Navbar';
import EventCard from './EventCard'; // Assuming you have the EventCard component
import './EventPage.css';

const EventPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
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
    {
      eventName: 'Event 7',
      eventTag: 'Tag 1',
      eventDescription: 'Description 7',
      imageUrl: 'https://images.unsplash.com/photo-1605496036006-fa36378ca4ab?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      eventName: 'Event 8',
      eventTag: 'Tag 2',
      eventDescription: 'Description 8',
      imageUrl: 'https://images.unsplash.com/photo-1605496036006-fa36378ca4ab?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      eventName: 'Event 9',
      eventTag: 'Tag 3',
      eventDescription: 'Description 9',
      imageUrl: 'https://images.unsplash.com/photo-1605496036006-fa36378ca4ab?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      eventName: 'Event 10',
      eventTag: 'Tag 4',
      eventDescription: 'Description 10',
      imageUrl: 'https://images.unsplash.com/photo-1605496036006-fa36378ca4ab?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      eventName: 'Event 11',
      eventTag: 'Tag 5',
      eventDescription: 'Description 11',
      imageUrl: 'https://images.unsplash.com/photo-1605496036006-fa36378ca4ab?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      eventName: 'Event 12',
      eventTag: 'Tag 6',
      eventDescription: 'Description 12',
      imageUrl: 'https://images.unsplash.com/photo-1605496036006-fa36378ca4ab?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      eventName: 'Event 13',
      eventTag: 'Tag 1',
      eventDescription: 'Description 13',
      imageUrl: 'https://images.unsplash.com/photo-1605496036006-fa36378ca4ab?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      eventName: 'Event 14',
      eventTag: 'Tag 2',
      eventDescription: 'Description 14',
      imageUrl: 'https://images.unsplash.com/photo-1605496036006-fa36378ca4ab?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      eventName: 'Event 15',
      eventTag: 'Tag 3',
      eventDescription: 'Description 15',
      imageUrl: 'https://images.unsplash.com/photo-1605496036006-fa36378ca4ab?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      eventName: 'Event 16',
      eventTag: 'Tag 4',
      eventDescription: 'Description 16',
      imageUrl: 'https://images.unsplash.com/photo-1605496036006-fa36378ca4ab?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      eventName: 'Event 17',
      eventTag: 'Tag 5',
      eventDescription: 'Description 17',
      imageUrl: 'https://images.unsplash.com/photo-1605496036006-fa36378ca4ab?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      eventName: 'Event 18',
      eventTag: 'Tag 6',
      eventDescription: 'Description 18',
      imageUrl: 'https://images.unsplash.com/photo-1605496036006-fa36378ca4ab?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      eventName: 'Event 19',
      eventTag: 'Tag 1',
      eventDescription: 'Description 19',
      imageUrl: 'https://images.unsplash.com/photo-1605496036006-fa36378ca4ab?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      eventName: 'Event 20',
      eventTag: 'Tag 2',
      eventDescription: 'Description 20',
      imageUrl: 'https://images.unsplash.com/photo-1605496036006-fa36378ca4ab?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];
  const allTags = ['All Events', ...new Set(eventsData.map(event => event.eventTag))];

  const filteredEvents = selectedCategory
  ? eventsData.filter((event) => event.eventTag === selectedCategory)
  : eventsData;

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === 'All Events' ? null : category);
  };

  return (
    <div className="event-page">
      <Navbar tags={allTags} onTagClick={handleCategoryClick} />

      <div className="meteor-background">
        <iframe
          src="https://i.gifer.com/fxac.gif"
          width="100%"
          height="85.75%"
          style={{ position: 'absolute', top: 0, left: 0 }}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <p>
        <a href="https://gifer.com"></a>
      </p>

      <h1 className="event-title">Events</h1>

      <div className="events-navbar">
        <ul>
          {allTags.map((tag, index) => (
            <li key={index} onClick={() => handleCategoryClick(tag)}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div className="event-cards-container">
        {filteredEvents.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
     <div className="footer">
        <p>Srijan is back!</p>
        <p>
          Presented at the heart of Kolkata, the largest techno-management festival is set to run at Jadavpur University from March 21st to 24th, 2024.
          Arriving this Spring with a plethora of episodes, dive into the realm of cutting-edge technology, innovation, and cultural prowess.
        </p>
        <p>
          Follow us on the social media platforms for exclusive updates, and be a part of the grandest tech celebration in the region.
          Don't miss a beat– from groundbreaking competitions to inspiring talks, Srijan 2024 promises an unforgettable experience.
          Fasten your seatbelts for a feat of unshackling thoughts!!
        </p>
      </div>
    </div>
  );
};

export default EventPage;


// EventPage.js

/*import React, { useState } from 'react';
import Navbar from './Navbar';
import EventCard from './EventCard'; // Assuming you have the EventCard component
import './EventPage.css';

const EventPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
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
    ? eventsData.filter((event) => event.eventTag === selectedCategory)
    : eventsData;

  const handleCategoryClick = (category) => {
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
      </div>

      <div className="events-navbar">
        <ul>
          {eventsData.map((event, index) => (
            <li key={index} onClick={() => handleCategoryClick(event.eventTag)}>
              {event.eventTag}
            </li>
          ))}
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

export default EventPage;*/


