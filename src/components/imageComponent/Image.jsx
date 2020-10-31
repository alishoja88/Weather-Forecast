import React, { Component } from 'react';

class Image extends Component {
    state = {

    }
    render() {

        const now = new Date()
        const hour = now.getHours()
        
        
        return (
            <div>
                <img className="image-forecast" src={require("./images/GTrby6G.jpg")} />
            </div>
        );
    }
}

export default Image;