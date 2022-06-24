import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css'

const Chart = () => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const dailyData = await fetchDailyData();
      console.log(dailyData)
      setDailyData(dailyData);
    };
    fetchData();
  }, []);

  const lineChart = (
    dailyData[0]
      ? <Line
        data={{
          labels: dailyData.map(({ reportDate }) => reportDate),
          datasets: [
            {
              data: dailyData.map(({ totalConfirmed }) => totalConfirmed),
              label: 'Infected',
              borderColor: '#90f',
              fill: true
            },
            {
              data: dailyData.map(({ deaths: { total } }) => total),
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

  return (
    <div className={styles.container}>
      {lineChart}
    </div>
  );
};

export default Chart;