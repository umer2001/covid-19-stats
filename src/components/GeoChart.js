import React, {useState, useEffect} from 'react';
import {fetchCountryCondition} from '../api';
import { Chart } from "react-google-charts";

export const GeoChart = () => {
    const [countryData, setCountryData] = useState([]);

    useEffect(() => {
        const fetchApi = async() => {
            setCountryData(await fetchCountryCondition())
        }

        fetchApi();
        
    }, []);

    return (
        <div className="MuiGrid-root geo-chart root test MuiGrid-item MuiGrid-grid-md-11">
            <span className="geo-heading">Active cases World wide</span>
            <Chart
                width={'100%'}
                height={'auto'}
                chartType="GeoChart"
                rows={countryData}
                columns={[
                    {
                      type: "string",
                      label: "Country"
                    },
                    {
                      type: "number",
                      label: "active"
                    }
                ]}
                options={{
                    colorAxis: { maxValue: 500000, colors: ['#17a2b8'] },
                    backgroundColor: '#282b2f',
                    datalessRegionColor: '#6c757d',
                    defaultColor: '#6c757d'
                }}
                // Note: you will need to get a mapsApiKey for your project.
                // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
                mapsApiKey={process.env.REACT_APP_MAPS_API_KEY}
                rootProps={{ 'data-testid': '1' }}
            />
        </div>
    )
}

export default GeoChart;