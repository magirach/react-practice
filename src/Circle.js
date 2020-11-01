import React from 'react';

class Circle extends React.Component {
    constructor() {
        super()
        this.state = {
            radius: 10.0,
            area: 0,
            perimeter: 0,
        }
    }

    calc = () => {
        this.setState(
            {
                area: this.state.radius * this.state.radius * 3.14,
                perimeter: this.state.radius * 2 * 3.14,
            }
        )
    }

    render() {
        return (
            <div>
                <p>
                    Radius : <input type='text' value = {this.state.radius} onChange={
                        (evt) => {
                            this.setState({
                                radius: evt.target.value
                            })
                        }
                    }/>
                </p>
                <p>
                    Area: {this.state.area}
                </p>
                <p>
                    Perimeter: {this.state.perimeter}
                </p>
                <button onClick={this.calc}>
                    Calculate
                </button>
            </div>
        )
    }
}

export default Circle;