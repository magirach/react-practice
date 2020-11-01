import React from "react";
class Second extends React.Component {

    constructor() {
        super();
        this.state = {
            name : "Moinuddin Girach",
            age : 21,
            desc : "I am iOS developer"
        }
    }

    render() {
        return (
            <section>
                <h1>
                    Name : { this.state.name}
                </h1>
                <p>
                    Age : {this.state.age}
                </p>
                <div>{this.state.desc}</div>
            </section>
        )
    }
}

export default Second;