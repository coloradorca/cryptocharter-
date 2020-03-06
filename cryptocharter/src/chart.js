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
        label: 'bitcoin',
        fill: false,
        lineTension: 0,
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 2,
        pointBorderColor: 'green',
        data: props.prices,
      },
      {
        data: props.etheriumprice,
        label: 'etherium',
        fill: false,
        lineTension: 0,
        backgroundColor: 'red',
        borderColor: 'red',
        borderWidth: 2,
        pointBorderColor: 'green',
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
                    labelString: 'Price in $ USD',
                    fontColor: '#61822F',
                    fontSize: 20,
                  },
                },
              ],
            },

            title: {
              display: true,
              text: 'BPI (past 30 days)',
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
