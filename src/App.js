import React from "react";
import "./App.css";
import EventInput from "./components/EventInput/EventInput";
import EventList from "./components/EventList/EventList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.clickhandler = this.clickhandler.bind(this);

    this.state = {
      items: [
        {
          title: "Go to Mymensingh",
          date: "2020-01-01",
          day: "Saturday",
          remaining: "14 Days 5 hours 10 min"
        }
      ]
    };
  }

  clickhandler(eventTitle, eventDate) {
    if (eventDate != "" && eventDate != "") {
      var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      var date = new Date(eventDate);
      var dayName = days[date.getDay()];
      console.log(eventDate - new Date());

      var formattedDate =
        date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

      // var delta = Math.abs(date_future - new Date()) / 1000;

      var data = {
        title: eventTitle,
        date: formattedDate,
        day: dayName,
        remaining: "1 Days 5 hours 10 min"
      };

      this.state.items.push(data);
      this.setState({ items: this.state.items });
    }
  }

  deleteEvent() {}

  editEvent() {}

  render() {
    return (
      <div className="App">
        <div className="event-input-container">
          <EventInput clicked={this.clickhandler} />
        </div>
        <div className="event-list-container">
          {this.state.items.map((item, index) => {
            // const { title, date, day, remaining } = item;
            return (
              <EventList
                key={index}
                {...item}
                deleteEvent={this.deleteEvent}
                editEvent={this.editEvent}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
