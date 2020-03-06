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
  const [etherium, updateeth] = useState([]);
  const [etheriumprice, updateethprice] = useState([]);

  const cryptocompareKey = process.env.REACT_APP_API_KEY;
  const nomicsKey = process.env.REACT_APP_NOMICS_KEY;

  useEffect(() => {
    setIsLoading(true);
    const getData = async function() {
      const fetchBPI = await axios.get(
        'https://api.coindesk.com/v1/bpi/historical/close.json',
      );
      const responsebpi = await fetchBPI;
      for (var element in responsebpi.data.bpi) {
        setDays((days) => [...days, element]);
        setPrice((price) => [...price, responsebpi.data.bpi[element]]);
      }
      const fetchCoins = await axios.get(
        `https://api.nomics.com/v1/currencies/sparkline?key=${nomicsKey}&ids=BTC,ETH,NEO,EOS,XRP&start=2020-02-06T00%3A00%3A00Z`,
      );
      const responseCoins = await fetchCoins;
      console.log(fetchCoins.data);
      fetchCoins.data[2].timestamps.map((e) => updateeth((eth) => [...eth, e]));
      fetchCoins.data[2].prices.map((e) =>
        updateethprice((ethp) => [...ethp, e]),
      );
      setIsLoading(false);
    };
    getData();
  }, []);

  return isLoading ? (
    <Loadscreen />
  ) : (
    <div>
      <Header />
      <MyChart
        days={days}
        prices={price}
        etherium={etherium}
        etheriumprice={etheriumprice}
      />
    </div>
  );
}
