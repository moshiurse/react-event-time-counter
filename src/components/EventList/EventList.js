import React from "react";

import "../EventList/EventList.css";

const EventList = props => {
  return (
    <div className="event-list">
      <div className="event-item">
        <div className="row">
          <div className="col s6">
            <div className="event-title">{props.title}</div>
          </div>
          <div className="col s4">
            <div className="event-date">
              <label>{props.date}</label>
              <br></br>
              <label>{props.day}</label>
            </div>
          </div>
          <div className="col s2">
            <div className="btn-container">
              <a
                type="submit"
                href="#"
                id="create-event"
                onClick={props.editEvent}
                className="waves-effect light-blue btn"
              >
                <i className="material-icons note_add">edit</i>
              </a>
              <a
                type="submit"
                href="#"
                id="create-event"
                onClick={props.deleteEvent}
                className="waves-effect red lighten-3 btn"
              >
                <i className="material-icons note_add">delete</i>
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s4"></div>
          <div className="col s6">
            <div className="event-time-remaining">{props.remaining}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventList;
