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
    var data = {
      title: eventTitle,
      date: eventDate,
      day: "Saturday",
      remaining: "1 Days 5 hours 10 min"
    };

    this.state.items.push(data);

    this.setState({ items: this.state.items });
    console.log(this.state.items);
  }

  render() {
    return (
      <div className="App">
        <div className="event-input-container">
          <EventInput clicked={this.clickhandler} />
        </div>
        <div className="event-list-container">
          {this.state.items.map((item, index) => (
            <EventList
              key={index}
              title={item.title}
              date={item.date}
              day={item.day}
              remaining={item.remaining}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
