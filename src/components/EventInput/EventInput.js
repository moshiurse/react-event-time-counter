import React from "react";

import "../EventInput/EventInput.css";

class EventInput extends React.Component {
  constructor(props) {
    super(props);

    this.changeDate = this.changeDate.bind(this);
    this.changeTitle = this.changeTitle.bind(this);

    this.state = {
      title: "",
      date: ""
    };
  }

  changeTitle(event) {
    const title = event.target.value;
    this.setState({ title: title });
  }

  changeDate(event) {
    const date = event.target.value;
    this.setState({ date: date });
  }

  render() {
    return (
      <div className="event-input-container">
        <h3>An Event Time Counter App</h3>
        <form>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="title"
                type="text"
                className="validate"
                onChange={this.changeTitle}
                value={this.state.title}
              />
              <label htmlFor="title">Write your Event Title</label>
            </div>
            <div className="input-field col s6">
              <input
                id="date"
                type="datetime-local"
                className="validate"
                onChange={this.changeDate}
                value={this.state.date}
              />
              <label htmlFor="date"></label>
            </div>
          </div>
          <a
            type="submit"
            href="#"
            id="create-event"
            onClick={() => {
              this.props.clicked(this.state.title, this.state.date);
              this.setState({
                title: "",
                date: ""
              });
            }}
            class="waves-effect waves-light deep-purple lighten-3 btn"
          >
            <i class="material-icons note_add">add</i>
          </a>
        </form>
      </div>
    );
  }
}

export default EventInput;
