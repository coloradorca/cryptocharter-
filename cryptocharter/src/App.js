import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Header from './header.js';
import Loadscreen from './loadscreen.js';
import MyChart from './chart.js';

export default function App() {
  const [days, setDays] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [bnb, updatebnb] = useState([]);
  const [price, setPrice] = useState([]);
  const [btg, updatebtg] = useState([]);
  const [eos, updateeos] = useState([]);
  const [etheriumprice, updateethprice] = useState([]);
  const [link, updatelink] = useState([]);
  const [neo, updateneo] = useState([]);
  const [xrp, updatexrp] = useState([]);
  const [xzc, updatexzc] = useState([]);
  const [zen, updatezen] = useState([]);

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
        `https://api.nomics.com/v1/currencies/sparkline?key=${nomicsKey}&ids=BTC,EOS,ETH,NEO,XRP,BNB,ZEN,XZC,LINK,BTG&start=2020-02-06T00%3A00%3A00Z`,
      );
      const responseCoins = await fetchCoins;
      console.log(fetchCoins.data);
      fetchCoins.data[0].timestamps.map((e) => setDays((days) => [...days, e]));
      fetchCoins.data[0].prices.map((e) => updatebnb((bnb) => [...bnb, e]));
      fetchCoins.data[1].prices.map((e) => setPrice((price) => [...price, e]));
      fetchCoins.data[2].prices.map((e) => updatebtg((btg) => [...btg, e]));
      fetchCoins.data[3].prices.map((e) => updateeos((eth) => [...eth, e]));
      fetchCoins.data[4].prices.map((e) =>
        updateethprice((etheriumprice) => [...etheriumprice, e]),
      );
      fetchCoins.data[5].prices.map((e) => updatelink((link) => [...link, e]));
      fetchCoins.data[6].prices.map((e) => updateneo((neo) => [...neo, e]));
      fetchCoins.data[7].prices.map((e) => updatexrp((xrp) => [...xrp, e]));
      fetchCoins.data[8].prices.map((e) => updatexzc((xzc) => [...xzc, e]));
      fetchCoins.data[9].prices.map((e) => updatezen((zen) => [...zen, e]));
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
        bnb={bnb}
        prices={price}
        btg={btg}
        eos={eos}
        etheriumprice={etheriumprice}
        link={link}
        neo={neo}
        xrp={xrp}
        xzc={xzc}
        zen={zen}
      />
    </div>
  );
}
