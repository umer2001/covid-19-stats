import React, { useState, useEffect } from 'react';
import {fetchDailyData} from '../api';
import {Bar, Line} from 'react-chartjs-2';

export const  Chart = ( {data: {confirmed, recovered, deaths} , country} ) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchApi = async() => {
            setDailyData(await fetchDailyData())
        }

        fetchApi();
        
    }, []);
	
    
    const lineChart = (
        dailyData[0] != null
        ? (
            <Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'Infected',
                        borderColor: '#17a2b8',
                        fill: true
                    }, {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        borderColor: '#dc3545',
                        fill: true
                    }]
                }}
                options = {{
                    lineSmooth: true,
                    height: "260px",
                    low: 0,
                    high: 'auto',
                    series: {
                        'series-projection': {
                            showPoint: true,
                        },
                    },
            
                    options: {
                        responsive: true,
                        legend: false
                    },
                }}
            />
        ) : null
    );

    const barChart = (
        confirmed
        ? (
            <Bar 
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'people',
                        backgroundColor: ['#17a2b8', '#28a745', '#dc3545'],
                        data: [confirmed.value, recovered.value, deaths.value]
                    }]
                }}
                options={{
                    legend: { display: false},
                    title: {display: true, text: `Current situation of ${country}`}
                }}
            />
        ) : null

    )
    
    return (
        <div className="MuiGrid-root root test MuiGrid-item MuiGrid-grid-md-11">
            {country ? barChart : lineChart}
        </div>
    )
}

export default Chart;
