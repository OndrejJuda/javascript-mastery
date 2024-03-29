import React, { useState, useEffect, useRef } from 'react';
import { fetchDailyData } from '../../api';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,

} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  const lineRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchData();
  }, []);

  useEffect(() => {
    lineRef.current && lineRef.current.update();
  }, [dailyData]);

  const lineChart = (
    dailyData.length
      ? <Line
        data={{
          labels: dailyData.map(({ date }) => new Date(date).toDateString()),
          datasets: [
            {
              id: 1,
              data: dailyData.map(({ confirmed }) => confirmed),
              label: 'Infected',
              borderColor: '#90f',
              fill: true
            },
            {
              id: 2,
              data: dailyData.map(({ deaths }) => deaths),
              label: 'Deaths',
              borderColor: 'red',
              backgroundColor: 'rgba(255, 0, 0, 0.5)',
              fill: true
            },
          ],
        }}
      />
      : null
  );

  const barChart = (
    confirmed ? (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: [
                'rgba(153, 0, 255, 0.5)',
                'rgba(0, 255, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)',
              ],
              data: [confirmed.value, recovered.value, deaths.value],
            }
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state is ${country}` }
        }}
      />
    ) : null
  );

  return (
    <div className={styles.container}>
      {country ? barChart : lineChart}
    </div>
  );
};

export default Chart;