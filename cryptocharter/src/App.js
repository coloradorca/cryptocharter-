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
  const [etheriumprice, updateethprice] = useState([]);
  const [neo, updateneo] = useState([]);
  const [eos, updateeos] = useState([]);
  const [xrp, updatexrp] = useState([]);

  const cryptocompareKey = process.env.REACT_APP_API_KEY;
  const nomicsKey = process.env.REACT_APP_NOMICS_KEY;

  useEffect(() => {
    setIsLoading(true);
    const getData = async function() {
      // const fetchBPI = await axios.get(
      //   'https://api.coindesk.com/v1/bpi/historical/close.json',
      // );
      // const responsebpi = await fetchBPI;
      // for (var element in responsebpi.data.bpi) {
      //   setDays((days) => [...days, element]);
      //   setPrice((price) => [...price, responsebpi.data.bpi[element]]);
      // }
      const fetchCoins = await axios.get(
        `https://api.nomics.com/v1/currencies/sparkline?key=${nomicsKey}&ids=BTC,EOS,ETH,NEO,XRP&start=2020-02-06T00%3A00%3A00Z`,
      );
      const responseCoins = await fetchCoins;
      console.log(fetchCoins.data[0].timestamps);
      fetchCoins.data[0].timestamps.map((e) => setDays((days) => [...days, e]));
      fetchCoins.data[0].prices.map((e) => setPrice((price) => [...price, e]));
      fetchCoins.data[1].prices.map((e) => updateeos((eth) => [...eth, e]));
      fetchCoins.data[3].prices.map((e) => updateneo((neo) => [...neo, e]));
      fetchCoins.data[4].prices.map((e) => updatexrp((xrp) => [...xrp, e]));
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
        etheriumprice={etheriumprice}
        eos={eos}
        neo={neo}
        xrp={xrp}
      />
    </div>
  );
}
