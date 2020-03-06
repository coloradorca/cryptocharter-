import React from 'react';
import './App.css';
import moment from 'moment';
export default function Loadscreen(props) {
  return (
    <div className='App'>
      <div className='timeDate'>
        <header className='App-header'>
          <p>Page is Loading </p>
        </header>
        <h2 className='date'>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h2>
      </div>
    </div>
  );
}
