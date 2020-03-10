import React, { useEffect, useState } from 'react';
import './App.css';
import moment from 'moment';
import Chart from 'chart.js';
import { Line } from 'react-chartjs-2';
import Loadscreen from './loadscreen';

export default function MyChart(props) {
  const [momentdate, updateDate] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [price, updatePrice] = useState([]);
  // console.log(props.etheriumprice);
  useEffect(() => {
    setisLoading(true);
    props.days.map((e) =>
      updateDate((days) => [...days, moment(e).format('MMM Do')]),
    );
    props.prices.map((e) =>
      updatePrice((currentprice) => [...currentprice, `$ ${e}`]),
    );
    setisLoading(false);
  }, []);

  const state = {
    labels: momentdate,
    datasets: [
      {
        label: 'BNB',
        fill: false,
        lineTension: 0,
        backgroundColor: 'yellow',
        borderColor: 'yellow',
        borderWidth: 2,
        pointBorderColor: 'green',
        data: props.bnb,
      },
      // {
      //   label: 'Bitcoin',
      //   fill: false,
      //   lineTension: 0,
      //   backgroundColor: 'white',
      //   borderColor: 'white',
      //   borderWidth: 2,
      //   pointBorderColor: 'green',
      //   data: props.prices,
      // },
      {
        label: 'BTG',
        fill: false,
        lineTension: 0,
        backgroundColor: 'purple',
        borderColor: 'purple',
        borderWidth: 2,
        pointBorderColor: 'green',
        data: props.btg,
      },
      {
        label: 'EOS',
        fill: false,
        lineTension: 0,
        backgroundColor: 'green',
        borderColor: 'green',
        borderWidth: 2,
        pointBorderColor: 'green',
        data: props.eos,
      },
      // {
      //   label: 'Etherium',
      //   fill: false,
      //   lineTension: 0,
      //   backgroundColor: 'red',
      //   borderColor: 'red',
      //   borderWidth: 2,
      //   pointBorderColor: 'green',
      //   data: props.etheriumprice,
      // },
      {
        label: 'LINK',
        fill: false,
        lineTension: 0,
        backgroundColor: 'red',
        borderColor: 'red',
        borderWidth: 2,
        pointBorderColor: 'green',
        data: props.link,
      },
      {
        label: 'NEO',
        fill: false,
        lineTension: 0,
        backgroundColor: 'orange',
        borderColor: 'orange',
        borderWidth: 2,
        pointBorderColor: 'green',
        data: props.neo,
      },

      {
        label: 'XRP',
        fill: false,
        lineTension: 0,
        backgroundColor: 'blue',
        borderColor: 'blue',
        borderWidth: 2,
        pointBorderColor: 'green',
        data: props.xrp,
      },
      {
        label: 'XZC',
        fill: false,
        lineTension: 0,
        backgroundColor: 'grey',
        borderColor: 'grey',
        borderWidth: 2,
        pointBorderColor: 'green',
        data: props.xzc,
      },
      {
        label: 'ZEN',
        fill: false,
        lineTension: 0,
        backgroundColor: 'black',
        borderColor: 'black',
        borderWidth: 2,
        pointBorderColor: 'green',
        data: props.zen,
      },
    ],
  };
  return isLoading ? (
    <div>
      <Loadscreen />
    </div>
  ) : (
    <div className='chartdiv'>
      <div>
        <Line
          data={state}
          options={{
            tooltips: {
              callbacks: {
                title: function(tooltipItem, data) {
                  return data['labels'][tooltipItem[0]['index']];
                },
                label: function(tooltipItem, data) {
                  return (
                    '$ ' + data['datasets'][0]['data'][tooltipItem['index']]
                  );
                },
              },
            },
            scales: {
              yAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: 'Price in USD',
                    fontColor: '#61822F',
                    fontSize: 20,
                  },

                  ticks: {
                    callback: function(value) {
                      return '$ ' + value;
                    },
                  },
                },
              ],
              xAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: 'Date',
                    fontColor: '#61822F',
                    fontSize: 20,
                  },
                },
              ],
            },

            title: {
              display: true,
              text: 'Price Index (past 30 days)',
              fontSize: 20,
              color: '#284282',
              fontColor: '#FFA42B',
            },
            legend: {
              display: true,
              position: 'top',
            },
          }}
        />
      </div>
    </div>
  );
}
