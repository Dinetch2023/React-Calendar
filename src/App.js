import { useState } from "react";
import Calendar from "react-calendar";
import "./App.css";
import "./Calendar.css";

function App() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="app">
      <div className="calendar-container">
        <h1 className="text-center">React Calendar with Range</h1>
        <Calendar onChange={setDate} value={date} selectRange={true} />
        {date.length > 0 ? (
          <p className="text-center">
            <span className="bold">Start:</span> {date[0].toDateString()}
            &nbsp;|&nbsp;
            <span className="bold">End:</span> {date[1].toDateString()}
          </p>
        ) : (
          <p className="text-center">
            <span className="bold">Default selected date:</span>{" "}
            {date.toDateString()}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
