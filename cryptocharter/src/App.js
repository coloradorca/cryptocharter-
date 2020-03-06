import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Header from './header.js';
import Loadscreen from './loadscreen.js';
import MyChart from './chart.js';
export default function App() {
  const [days, setDays] = useState([]);
  const [price, setPrice] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getData = async function() {
      const fetch = await axios.get(
        'https://api.coindesk.com/v1/bpi/historical/close.json',
      );
      const response = await fetch;
      for (var element in response.data.bpi) {
        setDays((days) => [...days, element]);
        setPrice((price) => [...price, response.data.bpi[element]]);
      }
      setIsLoading(false);
    };
    getData();
  }, []);

  return isLoading ? (
    <Loadscreen />
  ) : (
    <div>
      <Header />
      <MyChart days={days} prices={price} />
    </div>
  );
}
