import React from 'react';
import moment from "moment"

const WeatherInfoDays = (props) => {
    const { dailyWeather, key, handleClickWeatherHourly } = props

        const iconCode = dailyWeather.map(item => item.weather[0].icon)        
        const srcIcon = `http://openweathermap.org/img/wn/${iconCode[3]}@2x.png`    

        const max_tempDay = dailyWeather.map(item => Math.round(item.main.temp_max))
        const sum_maxTemp = max_tempDay.reduce((a, b) => a + b, 0)
        const avrage_maxTemp = Math.round(sum_maxTemp / max_tempDay.length)

        const min_tempDay = dailyWeather.map(item => Math.round(item.main.temp_min))
        const sum_minTemp = min_tempDay.reduce((a, b) => a + b, 0)
        const avrage_minTemp = Math.round(sum_minTemp / min_tempDay.length)

        let newDate = new Date()
        let weekday = dailyWeather[0].dt * 1000
        newDate.setTime(weekday)
    return ( 
        <div className="forecast-info"  onClick={handleClickWeatherHourly}>
        <div className="forecast-date" key={key} >
            <span className="day">{moment(newDate).format('dddd')}</span>
            <br />
            <span className="date">{moment(newDate).format('MMMM Do')}</span>
        </div>
        <div className="forecast-icon" key={key}>
            <img src={srcIcon} />
        </div>
        <div className="forecast-Temperature" key={key}>
            <span>{avrage_maxTemp} °</span>
            <span>{avrage_minTemp} °</span>
        </div>
        <div className="forecast-conditions" key={key}>
            <span>{dailyWeather[0].weather[0].description}</span>
        </div>
    </div>
     );
}
 
export default WeatherInfoDays;

// class WeatherInfoDays extends Component {

//     render() {
//         const { dailyWeather, key, handleClickWeatherHourly } = this.props

//         const iconCode = dailyWeather.map(item => item.weather[0].icon)        
//         const srcIcon = `http://openweathermap.org/img/wn/${iconCode[3]}@2x.png`    

//         const max_tempDay = dailyWeather.map(item => Math.round(item.main.temp_max))
//         const sum_maxTemp = max_tempDay.reduce((a, b) => a + b, 0)
//         const avrage_maxTemp = Math.round(sum_maxTemp / max_tempDay.length)

//         const min_tempDay = dailyWeather.map(item => Math.round(item.main.temp_min))
//         const sum_minTemp = min_tempDay.reduce((a, b) => a + b, 0)
//         const avrage_minTemp = Math.round(sum_minTemp / min_tempDay.length)

//         let newDate = new Date()
//         let weekday = dailyWeather[0].dt * 1000
//         newDate.setTime(weekday)
     
//         return (
//             <div className="forecast-info"  onClick={handleClickWeatherHourly}>
//                 <div className="forecast-date" key={key} >
//                     <span className="day">{moment(newDate).format('dddd')}</span>
//                     <br />
//                     <span className="date">{moment(newDate).format('MMMM Do')}</span>
//                 </div>
//                 <div className="forecast-icon" key={key}>
//                     <img src={srcIcon} />
//                 </div>
//                 <div className="forecast-Temperature" key={key}>
//                     <span>{avrage_maxTemp} °</span>
//                     <span>{avrage_minTemp} °</span>
//                 </div>
//                 <div className="forecast-conditions" key={key}>
//                     <span>{dailyWeather[0].weather[0].description}</span>
//                 </div>
//             </div>
//         );
//     }
// }

// export default WeatherInfoDays;
