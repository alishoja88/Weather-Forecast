import React from 'react';


const Form = (props) => {
    return (
        <form id="search-city-form" className="search-form" onSubmit={(e) => props.fetchData(e)}>
            <input type="text" name="city"  placeholder="City Name" className="search-city-weather" />
            <button>Get Weather</button>
        </form>
    );
}

export default Form;
