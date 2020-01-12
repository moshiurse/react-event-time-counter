import React from 'react';

import '../EventList/EventList.css';

const EventList  = () => {

    return(
        <div className="event-list">
            <div className="event-item">
            <div className="row">
            <div className="col s6">
            <div className="event-title">Go to Mymensingh</div>
            </div>
            <div className="col s4">
            <div className="event-date">
                <label>2020-01-05</label>
                <label>Saturday</label>
            </div>
            </div>
            <div className="col s2">
            <div className="btn-container">
                <a type="submit" href="#" id="create-event" class="waves-effect light-blue btn"><i class="material-icons note_add">edit</i></a>
                <a type="submit" href="#" id="create-event" class="waves-effect red lighten-3 btn"><i class="material-icons note_add">delete</i></a>
                </div>
            </div>
            </div>

            <div className="row">
            <div className="col s4"></div>
            <div className="col s6">
                <div className="event-time-remaining">
                    2 Month 1 Day 5 hours 54 s
                </div>
            </div>
            </div>
                

            </div>
        </div>
    );
}

export default EventList;