import React from 'react';
import moment from 'moment'

const WeatherHourly = (props) => {
    const { dailyWeather, keyid } = props
    
    const hour = dailyWeather.map(item => {
        const time = item.dt_txt
        return moment(time).hour()
    })
   
    return (
        <div className="WeatherHourly" keyid={keyid}>
            {dailyWeather.map((item ) => {
                const time = item.dt_txt;
                const hour = moment(time).format('HH:mm');
                const iconCode = item.weather[0].icon 
                const srcIcon = `http://openweathermap.org/img/wn/${iconCode}@2x.png`                
                return (
                    <div className="forecast-weather-hourly"  keyid={keyid}>
                        <div className="forecast-weather-hourly-time"  keyid={keyid}>
                            <span>{hour}</span>
                        </div>
                        <div className="forecast-weather-hourly-temp"  keyid={keyid}>
                            <span>{item.main.temp}°</span>
                        </div>
                        <div className="forecast-weather-hourly-icon"  keyid={keyid}>
                            <img src={srcIcon} alt="icon"/>
                        </div>
                        <div className="forecast-weather-hourly-description"  keyid={keyid}>
                            <span>{item.weather[0].description}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default WeatherHourly;