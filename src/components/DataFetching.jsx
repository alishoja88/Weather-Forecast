// import React , {useState , useEffect} from 'react';
// import axios from "axios"

// const DataFetching = () => {
//     const [apis , setApis] = useState([])
//     useEffect(() => {
//         axios.get("api.openweathermap.org/data/2.5/weather?q=Tehran&appid=dcdb8a9212f4c507b9cc387081e82222")
//         .then(res => {
//             console.log(res);
            
//         })
       
//     })
//     return ( 
//         <div>

//         </div>
//      );
// }
 
// export default DataFetching;



// class App extends Component {
//     state = {
//         isLoading: false,
//         tempreatour : "",
//         city : "",
//         humidity : "",
//         error : ""
//     }


//     getWeather = async(e) => {
//         const city = e.target.elemrnts.city.value
//         e.preventDefault()
//         const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${Api_ky}`)
//         const response = await api_call.json()
//         console.log(response);
//         if (city) {
//             this.setState({
//                 tempreatour : response.main.temp ,
//                 city : response.city.name ,
//                 humidity : response.main.humidity
//             })
//         }else {
//             this.setState({
//                 error : "please"
//             })
//         }
          
//     }
    



    // render() {

    //     console.log(this.state.tempreatour);
        
    //     const { weather, isLoading } = this.state
    //     if (!isLoading) {
    //         return <p>isLoading...</p>
    //     } else {
    //         return (
    //             <main className="main-weather">
    //                 <span>{this.state.tempreatour}</span>
    //                 <span>{this.state.city}</span>

    //                 <Image />
    //                 <Header />
    //                 <Form
    //                 handelChangeForm={this.getWeather}
    //                  />
    //                 <Forecast />
    //             </main>
    //         );
    //     }


//     }
// }