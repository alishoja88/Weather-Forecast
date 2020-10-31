import React from 'react';
import moment from 'moment'


const Header = (props) => {
    const { weatherData, cityName } = props
    const iconCode = weatherData.weather[0].icon
    const srcIcon = `http://openweathermap.org/img/wn/${iconCode}@2x.png`
    return (
        <header className="header-weather">
            <p className="header-city-name">{cityName}</p>
            <div className="icon-weather-header">
                <img src={srcIcon} id="icon-weather" />
                <h2 className="temperatures">{Math.round(weatherData.main.temp)} °</h2>
            </div>
            <span className="conditions-weather">{weatherData.weather.map(item => item.description)}</span>
            <div className="forecast-list">
                <span><strong> feels like</strong>{Math.round(weatherData.main.feels_like)}</span>
                <span><strong>Wind</strong>{Math.round(weatherData.wind.speed)}</span>
                <span><strong>Humidity</strong> {Math.round(weatherData.main.humidity)}%</span>
            </div>
        </header>
    );
}

export default Header;