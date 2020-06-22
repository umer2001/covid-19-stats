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
        <div>
            <Chart
                width={'500px'}
                height={'300px'}
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
                // Note: you will need to get a mapsApiKey for your project.
                // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
                mapsApiKey="AIzaSyDy1kbpkcDk68z1vFoddvxzzXGqbY5PP54"
                rootProps={{ 'data-testid': '1' }}
            />
        </div>
    )
}

export default GeoChart;