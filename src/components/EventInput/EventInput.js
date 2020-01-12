import React from 'react';

import '../EventInput/EventInput.css';

const EventInput = () => {     

    return(
        <div className="event-input-container">
            <h2>An Event Time Counter App</h2>

            <div className="row">
                <div className="input-field col s6">
                    <input id="title" type="text" className="validate"/>
                    <label for="title">Write your Event Title</label>
                </div>
            <div className="input-field col s6">
                <input id="date" type="datetime-local" className="validate"/>
                <label for="date"></label>
            </div>
        </div>
        <a type="submit" href="#" id="create-event" class="waves-effect waves-light deep-purple lighten-3 btn"><i class="material-icons note_add">add</i></a>
        </div>
        
    );
}

export default EventInput;