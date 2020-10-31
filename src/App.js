import React, { Component } from "react";
import './App.css'
import Header from "./components/Header/Header"
import Form from "./components/Form/Form"
import Forecast from "./components/Forecast/Forecast"
import Image from "./components/imageComponent/Image"



class App extends Component {
    state = {
        fullData: [],
        dailyData: [],
        cityName: '',
        isLoading: false
    }

    componentDidMount = () => {
        this.fetchData = (e) => {
            e.preventDefault()
            const city = e.target.elements.city.value
            const Api_key = "dcdb8a9212f4c507b9cc387081e82222";
            const weatherURL =
                `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${Api_key}`

            fetch(weatherURL)
                .then(res => {
                    if (res.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            res.status);
                        return;
                    }
                    res.json().then(data => {
                        const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
                        this.setState({
                            fullData: data.list,
                            dailyData: dailyData,
                            cityName: data.city.name,
                            isLoading: true
                        })
                    })
                        .catch(err => {
                            console.log("Error : " + err);

                        })
                })

        }

    }



    render() {


        const { fullData, dailyData, cityName, isLoading } = this.state

        return (

            <main className="main-weather">
                <Image />
                {isLoading && <Header weatherData={fullData[0]} cityName={cityName} />}
               <Form fetchData={(e) => this.fetchData(e)} />
               {isLoading && <Forecast weatherData={fullData} dailyData={dailyData} /> } 

            </main>

        );
    }
}

export default App;





