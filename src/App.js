import React from 'react';
import './App.css';
import Today from './components/today/today.js';
import PlannerSection from './components/planner section/plannerSection.js';
import CalendarPage from './components/calendar page/calendarPage.js';

function App() {
  return (
    <div className="App">
      <div className="today">
        <Today/>
      </div>
      <div className="center_content">
        <div className="calendar_page">
          <CalendarPage/>
        </div>
        <div className="planner_section">
          <PlannerSection/>
        </div>
      </div>
    </div>
  );
}

export default App;
