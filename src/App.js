import React from 'react';
import './App.css';
import EventImput from './components/EventInput/EventInput';
import EventList from './components/EventList/EventList';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      items: [
        {title: 'Go to Mymensingh',
        date: '2020-01-01',
        day: 'Saturday',
        remaining: '14 Days 5 hours 10 min'},
        {title: 'Go to Mymensingh',
        date: '2020-01-01',
        day: 'Saturday',
        remaining: '14 Days 5 hours 10 min'},
        {title: 'Go to Mymensingh',
        date: '2020-01-01',
        day: 'Saturday',
        remaining: '14 Days 5 hours 10 min'},
        {title: 'Go to Mymensingh',
        date: '2020-01-01',
        day: 'Saturday',
        remaining: '14 Days 5 hours 10 min'},
        {title: 'Go to Mymensingh',
        date: '2020-01-01',
        day: 'Saturday',
        remaining: '14 Days 5 hours 10 min'}
      ]
    }
  }
  
  render(){
        
    return (
      <div className="App">
  
      <div className="event-input-container">
        <EventImput />
      </div>
      <div className="event-list-container">
        {this.state.items.map((item, index) => 
          
            <EventList key={index} title={item.title} date={item.date} day={item.day} remaining={item.remaining}/>
          
        )}
      </div>
        
      </div>
    );

  }
  
}

export default App;
