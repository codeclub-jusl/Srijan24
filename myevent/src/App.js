import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventsPage from './EventsPage.js';
import './App.css'
import Navbar from './Navbar.js';
import EventPage from './EventsPage.js';
function App() {
  return (
      <EventPage />
  );
}

export default App;
