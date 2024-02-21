import React from 'react'
import EventPage from '@/components/EventComponents/EventPage'

const RegisteredEvents = () => {
  return (
    <div>
        <EventPage eventsId={['007']} pageType='Registered Events' bgColor='green'/>
    </div>
  )
}

export default RegisteredEvents