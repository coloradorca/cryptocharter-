import React from 'react';
import moment from 'moment';

import './App.css';

export default function Header() {
  return (
    <div className='App'>
      <div className='timeDate'>
        <header className='App-header'>
          <p>BitCoin Price Index</p>
        </header>
        <h2 className='date'>{moment().format('MMMM Do YYYY, h:mm:ss ')}</h2>
      </div>
    </div>
  );
}
