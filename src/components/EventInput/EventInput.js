import React from 'react';

import '../EventInput/EventInput.css';

const EventInput = () => {
    return(
        <div className="event-input-container">
            <h2>An Event Time Counter App</h2>
            {/* <input type="text" className="title-input primary" id="title" placeholder="Write your Event Title"/>
            <input type="text" className="date-input" id="date" placeholder="Enter your Date and Time"/> */}

            <div className="row">
                <div className="input-field col s6">
                    <input id="first_name" type="text" className="validate"/>
                    <label for="first_name">Write your Event Title</label>
                </div>
            <div className="input-field col s6">
                <input id="last_name" type="text" className="validate"/>
                <label for="last_name">Select your Date and Time</label>
            </div>
        </div>
        <a type="submit" href="#" id="create-event" class="waves-effect waves-light btn"><i class="material-icons note_add">create</i>Create Event</a>
        </div>
        
    );
}

export default EventInput;