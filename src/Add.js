import React from 'react';

class Add extends React.Component {
    constructor() {
        super()
        this.state = {
            a: 5,
            b: 2,
            c: 0,
            d: 0,
        }
    }

    addNumbers = () => {
        this.setState(
            {
                c: this.state.a + this.state.b
            }
        )
    }

    addNumbers1 = () => {
            this.state.d = this.state.a + this.state.b
            console.log(this.state.d)
    }

    render() {
        return (
            <div>
                <p>
                    Fist Number: {this.state.a}
                </p>
                <p>
                    Second Number: {this.state.b}
                </p>
                <p>
                    Sum: {this.state.c}
                </p>
                <button onClick={this.addNumbers}>
                    Get Sum
                </button>
                <p>
                    Sum1: {this.state.d}
                </p>
                <button onClick={this.addNumbers1}>
                    Get Sum
                </button>
            </div>
        )
    }
}

export default Add;