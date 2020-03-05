import React from 'react';
import moment from 'moment';

import './App.css';

function Header() {
  return (
    <div className='App'>
      <div className='timeDate'>
        <header className='App-header'>
          <p>Crypto Charter</p>
        </header>
        <h2 className='date'>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h2>
      </div>
    </div>
  );
}

export default Header;
