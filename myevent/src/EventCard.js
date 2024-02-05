// EventCard.js

/*import React from 'react';
import { Card, CardContent, Typography, Button, Chip } from '@material-ui/core';
import './EventCard.css'; // Create a CSS file for additional styling

const EventCard = ({ eventName, eventTag, eventDescription, imageUrl }) => {
  const cardStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white', // Set text color to white or another contrasting color
  };

  return (
    <Card className="event-card" style={cardStyle}>
      <CardContent>
        <Typography variant="h5">{eventName}</Typography>
        <Chip label={eventTag} color="primary" />
        <Typography variant="body2" color="textSecondary">{eventDescription}</Typography>
      </CardContent>
      <Button variant="contained" color="primary" className="view-details-btn">View Details</Button>
    </Card>
  );
};

export default EventCard; */
// EventCard.js

/*import React from 'react';
import './EventCard.css'; // Import the CSS file

const EventCard = ({ title, types, imageUrl, exploreLink }) => {
  // Assign dummy values to types if it's undefined
  const dummyTypes = types || ['Type A', 'Type B'];

  return (
    <div className="Dashboard_eventBox__E3dhk">
      <div className="Dashboard_eventImageBox__dxso_">
        <img alt="event_image" src={imageUrl} className="Dashboard_eventImage__AAUGI" loading="lazy" />
      </div>
      <div className="Dashboard_eventBodyBox__nynMn">
        <h2 className="Dashboard_eventBodyTitle__on30a">{title}</h2>
        <div className="Dashboard_eventBodyTypes__pMiNE">
          {dummyTypes.map((type, index) => (
            <h5 key={index}>{type}</h5>
          ))}
        </div>
        <div className="Dashboard_exploreEventButton__VLbHB">
          <a href={exploreLink}>Explore Event</a>
        </div>
      </div>
    </div>
  );
};

export default EventCard; */

import React from 'react';
import './EventCard.css'; // Import the CSS file

const EventCard = ({ title, types, imageUrl, exploreLink }) => {
  // Assign dummy values to types if it's undefined
  const dummyTypes = types || ['Type A', 'Type B'];

  return (
    <div className="Dashboard_eventBox__E3dhk">
      <div className="Dashboard_eventImageBox__dxso_">
        <img alt="event_image" src={imageUrl} className="Dashboard_eventImage__AAUGI" loading="lazy" />
      </div>
      <div className="Dashboard_eventBodyBox__nynMn">
        <h2 className="Dashboard_eventBodyTitle__on30a">{title}</h2>
        <div className="event-card-types">
          {dummyTypes.map((type, index) => (
            <div key={index} className="event-card-tag">
              {type}
            </div>
          ))}
        </div>
        <div className="Dashboard_exploreEventButton__VLbHB">
          <a href={exploreLink}>Explore Event</a>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
