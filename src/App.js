import React from 'react';
import {fetchData} from './api';
import './App.css';
import SpacingGrid from './components/Cards';
import Chart from './components/Chart';
import CountryPicker from './components/CountryPicker';
import Particles from 'react-particles-js';
import covid from './img/covid.png';
import co1 from './img/co1.png';
import co2 from './img/co2.png';
import co3 from './img/co3.png';
import co4 from './img/co4.png';

class App extends React.Component {
  state = {
    data: {},
    country: ''
  }
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({data: fetchedData});
  }

  handleCountryChange = async (country) => {
    //fetch data
    const fetchedData = await fetchData(country);
    //set state
    this.setState({data: fetchedData, country: country});
  }

  render() {
    const {data, country} = this.state; 
    return (
      <div className="App">
        <img src={covid} />
        <h1 className="heading">statistics</h1>
        <SpacingGrid data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
        <Particles className="particles"
          params={{
            "background": {
                "color": {
                  "value": "#1f1f1f"
                }
            },
            "particles": {
                "number": {
                    "value": 45,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "speed": 1,
                    "out_mode": "out"
                },
                "shape": {
                    "type": [
                        "image",
                        "circle"
                    ],
                    "image": [
                        {
                            "src": co1,
                            "height": 20,
                            "width": 23
                        },
                        {
                          "src": co2,
                          "height": 20,
                          "width": 23
                        },
                      {
                        "src": co3,
                        "height": 20,
                        "width": 23
                      },
                      {
                        "src": co4,
                        "height": 20,
                        "width": 23
                      }
                    ]
                },
                "color": {
                    "value": "#CCC"
                },
                "size": {
                    "value": 30,
                    "random": false,
                    "anim": {
                        "enable": true,
                        "speed": 4,
                        "size_min": 10,
                        "sync": false
                    }
                }
            },
            "retina_detect": false
          }} 
        />
      </div>
    );
  }
  
}

export default App;
