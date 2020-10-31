import React, { Component } from 'react';
import WeatherInfoDays from "./WeatherInfoDays"
import WeatherHourly from './WeatherHourly'
let moment = require('moment')

class Forecast extends Component {
  state = {
    clickIndex: -1
  }
  handleClickWeatherHourly = (index) => {
    console.log("index", index);
    this.setState({ clickIndex: index })
  }
  render() {
    const { weatherData } = this.props

    const time = weatherData[0].dt_txt
    const hour = moment(time).hour()
    const lenghtDayTime = (24 - hour) / 3

    let dailyArray = []
    return (
      <div className="main-forecast-weather">
        <div className="forecast-weather">
          {weatherData.map((dailyWeather, index) => {
            if (index < lenghtDayTime) {
              dailyArray.push(dailyWeather)
            }
            if (lenghtDayTime - 1 === index) {
              let arrayCopy1 = [...dailyArray]
              dailyArray = []
              return ([
                <WeatherInfoDays
                  dailyWeather={arrayCopy1}
                  key={index }
                  handleClickWeatherHourly={() => this.handleClickWeatherHourly(index)}
                />,
                this.state.clickIndex === index &&
                <WeatherHourly dailyWeather={arrayCopy1} keyId={index}/>
              ])
            }
            if (index >= lenghtDayTime && index <= lenghtDayTime + 7) {
              dailyArray.push(dailyWeather)
            }
            if (lenghtDayTime + 7 === index) {
              let arrayCopy2 = [...dailyArray]
              dailyArray = []
              return ([
                <WeatherInfoDays
                  dailyWeather={arrayCopy2}
                  key={index}
                  handleClickWeatherHourly={() => this.handleClickWeatherHourly(index)}
                />,
                this.state.clickIndex === index &&
                <WeatherHourly dailyWeather={arrayCopy2} keyid={index} />
              ])
            }
            if (index > lenghtDayTime + 7 && index <= lenghtDayTime + 15) {
              dailyArray.push(dailyWeather)
            }
            if (lenghtDayTime + 15 === index) {
              let arrayCopy3 = [...dailyArray]
              dailyArray = []
              return ([
                <WeatherInfoDays
                  dailyWeather={arrayCopy3}
                  key={index}
                  handleClickWeatherHourly={() => this.handleClickWeatherHourly(index)}
                />,
                this.state.clickIndex === index &&
                <WeatherHourly dailyWeather={arrayCopy3} keyid={index} />
              ])
            }
            if (index > lenghtDayTime + 15 && index <= lenghtDayTime + 23) {
              dailyArray.push(dailyWeather)
            }
            if (lenghtDayTime + 23 === index) {
              let arrayCopy4 = [...dailyArray]
              dailyArray = []
              return ([
                <WeatherInfoDays dailyWeather={arrayCopy4}
                  key={index}
                  handleClickWeatherHourly={() => this.handleClickWeatherHourly(index)}
                />,
                this.state.clickIndex === index &&
                <WeatherHourly dailyWeather={arrayCopy4} keyid={index} />
              ])
            }
            if (index > lenghtDayTime + 23 && index <= lenghtDayTime + 31) {
              dailyArray.push(dailyWeather)
            }
            if (lenghtDayTime + 31 === index) {
              let arrayCopy5 = [...dailyArray]
              dailyArray = []
              return ([
                <WeatherInfoDays
                  dailyWeather={arrayCopy5}
                  key={index }
                  handleClickWeatherHourly={() => this.handleClickWeatherHourly(index)}
                />,
                this.state.clickIndex === index &&
                <WeatherHourly dailyWeather={arrayCopy5} keyid={index} />
              ])
            }
            if (index > lenghtDayTime + 31 && index <= lenghtDayTime + 39) {
              dailyArray.push(dailyWeather)
            }
            if (lenghtDayTime + 39 === index) {
              let arrayCopy6 = [...dailyArray]
              dailyArray = []
              return ([
                <WeatherInfoDays
                  dailyWeather={arrayCopy6}
                  key={index}
                  handleClickWeatherHourly={() => this.handleClickWeatherHourly(index)}
                />,
                this.state.clickIndex === index &&
                <WeatherHourly dailyWeather={arrayCopy6} keyid={index } />
              ])
            }
          })
          }
        </div>
      </div>
    );
  }
}

export default Forecast;
