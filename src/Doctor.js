import React from 'react';

class Doctor extends React.Component {
    constructor() {
        super()
        this.state = {
            name : "Atiq Girach",
            age :  8,
            dept : "Ortho",
            address : {
                home : {
                    line1: "6 Juned Park",
                    line2: "B/h Navrang Tenament",
                    line3: "Fatehwadii Tower Road, Juhapura",
                    city : "Ahmedabad",
                    pin: "380055"
                },
                office : {
                    line1: "6 Juned Park",
                    line2: "B/h Navrang Tenament",
                    line3: "Fatehwadii Tower Road, Juhapura",
                    city : "Ahmedabad",
                    pin: "380055"
                }
            }
        }
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.name}
                </h1>
                <p>
                    Age: {this.state.age}
                </p>
                <p>
                    <b>Address</b>
                    {this.state.address.home.line1}{this.state.address.home.line3}{this.state.address.home.line3}
                </p>
            </div>
        )
    }
}

export default Doctor;