import React from 'react';

class Cities extends React.Component {
    constructor() {
        super()
        this.state = {
            cities: [
                {
                    name: "Delhi",
                    area: 12345,
                    population: 123456789,
                    mayor: "Dehli Meyor",
                    incomPerCapita: 1234.5
                },
                {
                    name: "Mumbai",
                    area: 12365,
                    population: 183456789,
                    mayor: "Mumbai Meyor",
                    incomPerCapita: 4234.5
                },
                {
                    name: "Kolkatta",
                    area: 123456,
                    population: 176456789,
                    mayor: "Kolkatta Meyor",
                    incomPerCapita: 234.5
                },
                {
                    name: "Chennai",
                    area: 10345,
                    population: 23456789,
                    mayor: "Chennai Meyor",
                    incomPerCapita: 634.5
                }
            ]
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.cities.map((city) => {
                        return (
                            <div>
                                <b>Name : {city.name}</b> <br />
                                Area : {city.area} <br />
                                Population : {city.population} <br />
                                Mayor : {city.mayor} <br />
                                Incom Per Capita : {city.incomPerCapita} <br /><br />
                            </div>
                        ) 
                    })
                }
            </div>
        )
    }
}

export default Cities;