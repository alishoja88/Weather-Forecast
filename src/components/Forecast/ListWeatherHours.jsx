import React from 'react';
import WeatherinfoHors from './WeatherinfoHors'

const ListWeatherHours = (props) => {
    const { weatherData } = props
    // console.log("weatherData", weatherData);


    // let day = new Date(weatherData[0].dt_txt);
    // let hour = day.getHours()
    // let lengthTime = (24 - hour) / 3
    // let lengthTime2 = (lengthTime + 8)
    // let lengthTime3 = ((lengthTime2 + 8))
    // let lengthTime4 = ((lengthTime3 + 8))
    // let lengthTime5 = ((lengthTime4 + 8))
    // let lengthTime6 = ((lengthTime5 + 8))

    // let weatherInfo1 = []
    // let weatherInfo2 = []
    // let weatherInfo3 = []
    // let weatherInfo4 = []
    // let weatherInfo5 = []
    // let weatherInfo6 = []



    // // const bbb = weatherData[lengthTime]
    // // // console.log("bbb" , bbb);

    // for (let i = 0; i < lengthTime; i++) {
    //     weatherInfo1.push(weatherData[i])
    //    console.log("1" ,weatherInfo1);
    // }

    // for (let i = lengthTime; i < lengthTime2; i++) {
    //     console.log("2", weatherData[i]);

    // }
    // for (let i = lengthTime2; i < lengthTime3; i++) {
    //     console.log("3", weatherData[i]);

    // }
    // for (let i = lengthTime3; i < lengthTime4; i++) {
    //     console.log("4", weatherData[i]);

    // }
    // for (let i = lengthTime4; i < lengthTime5; i++) {
    //     console.log("5", weatherData[i]);

    // } for (let i = lengthTime5; i < lengthTime6 -1; i++) {
    //     console.log("6", weatherData[i]);

    // }


    return ( 
        <div>
            <WeatherinfoHors lengthTime={lengthTime}/>
            <WeatherinfoHors lengthTime2={lengthTime2}/>
            <WeatherinfoHors lengthTime3={lengthTime3}/>
            <WeatherinfoHors lengthTime4={lengthTime4}/>
            <WeatherinfoHors lengthTime5={lengthTime5}/>
        </div>
     );
}
 
export default ListWeatherHours;