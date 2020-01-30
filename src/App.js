import React from "react";
import "./App.css";
import EventInput from "./components/EventInput/EventInput";
import EventList from "./components/EventList/EventList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.clickhandler = this.clickhandler.bind(this);

    this.state = {
      items: []
    };
  }

  componentDidMount() {
    setInterval(this.setRemainder.bind(this), 1000);
  }

  setRemainder() {
    this.state.items.map(item => {
      var rem = new Date(item.date) - new Date();
      // console.log(rem);
      var days = Math.floor(rem / 86400000);
      var hour = Math.floor((rem % 86400000) / 3600000);
      var min = Math.floor(((rem % 86400000) % 3600000) / 60000);
      var second = Math.floor(((rem % 86400000) % 3600000) / 60000 / 1000);
      // console.log(second);
      var remaining =
        days +
        " days " +
        hour +
        " hour " +
        min +
        " Minute " +
        second +
        " second.";
      // console.log(rem);

      this.setState(prevState => ({
        items: prevState.items.map(obj =>
          obj.title === item.title
            ? Object.assign(obj, { remaining: remaining })
            : obj
        )
      }));
    });
    return true;
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

      var formattedDate =
        date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

      var rem = new Date(eventDate) - new Date();
      var days = Math.floor(rem / 86400000);
      var hour = Math.floor((rem % 86400000) / 3600000);
      var min = Math.floor(((rem % 86400000) % 3600000) / 60000);
      var second = Math.round(((rem % 86400000) % 3600000) / 60000 / 1000);

      var remaining =
        days +
        " days " +
        hour +
        " hour " +
        min +
        " Minute " +
        second +
        " second.";

      var data = {
        title: eventTitle,
        date: formattedDate,
        day: dayName,
        remaining: remaining
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
