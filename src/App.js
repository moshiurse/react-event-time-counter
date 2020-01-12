import React from 'react';
import './App.css';
import EventImput from './components/EventInput/EventInput';
import EventList from './components/EventList/EventList';

function App() {
  return (
    <div className="App">

    <div className="event-input-container">
      <EventImput />
    </div>
    <div className="event-list-container">
      <EventList />
      <EventList />
      <EventList />
    </div>
      
    </div>
  );
}

export default App;
