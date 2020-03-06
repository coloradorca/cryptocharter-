import React, { useEffect } from 'react';
import './App.css';
// import moment from 'moment';
import Chart from 'chart.js';
import { Line } from 'react-chartjs-2';
export default function MyChart(props) {
  const chartRef = React.createRef();
  console.log(props.data);
  // useEffect(() => {
  //   const myChartRef = chartRef.current.getContext('2d');

  //   new Chart(myChartRef, {
  //     type: 'line',
  //     data: {
  //       //Bring in data
  //       labels: ['Jan', 'Feb', 'March'],
  //       datasets: [
  //         {
  //           label: 'Sales',
  //           data: [86, 67, 91],
  //         },
  //       ],
  //     },
  //     options: {
  //       //Customize chart options
  //     },
  //   });
  // }, []);
  const state = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'price',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56],
      },
    ],
  };
  return (
    <div className='chartdiv'>
      <div>
        <Line
          data={state}
          options={{
            title: {
              display: true,
              text: 'BPI (past 30 days)',
              fontSize: 20,
            },
            legend: {
              display: true,
              position: 'right',
            },
          }}
        />
      </div>
    </div>
  );
}
