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
        label: '$',
        fill: false,
        lineTension: 0,
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 2,
        pointBorderColor: 'green',
        data: props.prices,
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
            scales: {
              yAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: 'Price in $ USD',
                    fontColor: 'green',
                    fontSize: 20,
                  },
                },
              ],
              xAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: 'Price in $ USD',
                    fontColor: 'green',
                    fontSize: 20,
                  },
                },
              ],
            },

            title: {
              display: true,
              text: 'BPI (past 30 days)',
              fontSize: 20,
              color: 'white',
              fontColor: 'white',
            },
            legend: {
              display: false,
              position: 'top',
            },
          }}
        />
      </div>
    </div>
  );
}
