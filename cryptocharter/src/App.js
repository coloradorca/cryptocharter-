import React from 'react';
import Header from './header.js';
import './App.css';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: undefined,
    };
  }

  componentDidMount() {
    axios
      .get('https://api.coindesk.com/v1/bpi/historical/close.json')
      .then((response) => {
        this.setState({
          data: response.data.bpi,
        });
      });
  }

  render() {
    console.log(this.state.data);
    return <Header />;
  }
}

// export default App;
