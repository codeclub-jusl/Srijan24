// EventCardContainer.js

import React from 'react';
import EventCard from './EventCard';

const EventCardContainer = () => {
  // Sample data for two events
  const eventsData = [
    {
      eventName: 'Prashnavali',
      eventTag: 'General Event',
      eventDescription:
        'For all the inquisitive young minds of the nation, Instruo 2023 brings to you its signature quizzing event, “Prashnavali”- A general quiz for...',
      imageUrl: 'https://www.cambridgeconsultants.com/sites/default/files/uploaded-images/Hero_Blog_AI-Firm-Foundations.jpg',
    },
    // Add data for the second event
    // {
    //   eventName: 'Event Name 2',
    //   eventTag: 'Tag 2',
    //   eventDescription: 'Description 2',
    //   imageUrl: 'Image URL 2',
    // },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {eventsData.map((event, index) => (
        <EventCard key={index} {...event} />
      ))}
    </div>
  );
};

export default EventCardContainer;
