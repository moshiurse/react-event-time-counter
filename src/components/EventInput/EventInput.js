import React from 'react';

import '../EventInput/EventInput.css';

class EventInput extends React.Component{     
        
    constructor(props){
        super(props);

        this.state = {
            term: '',
            items: []
          }
    }


    render(){

        const createEvent = (event) => {
            let title = document.getElementById('title').value;
            let date = document.getElementById('date').value;
        }

        return(
            <div className="event-input-container">
                <h2>An Event Time Counter App</h2>
            <form onSubmit={this.createEvent}>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="title" type="text" className="validate" value={this.state.term}/>
                        <label for="title">Write your Event Title</label>
                    </div>
                <div className="input-field col s6">
                    <input id="date" type="datetime-local" className="validate"/>
                    <label for="date"></label>
                </div>
            </div>
            <a type="submit" href="#" 
            id="create-event" 
            // onClick={createEvent}
            class="waves-effect waves-light deep-purple lighten-3 btn"><i class="material-icons note_add">add</i></a>
            </form>
            </div>  
        );
    }
}

export default EventInput;