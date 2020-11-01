import React from 'react';

class Average extends React.Component {
    constructor() {
        super()
        this.state = {
            maths: 10,
            science: 30,
            socialStudies: 56,
            physics: 88,
            chemistry: 55,
            average: 0
        }
    }

    getAverage = () => {
        this.setState(
            {
                average: (this.state.maths + this.state.science + this.state.socialStudies + this.state.physics + this.state.chemistry) / 5
            }
        )
    }

    render() {
        return (
            <div>
                <p>
                    Maths: <input type='text' value = {this.state.maths} onChange={
                        (evt) => {
                            this.setState({
                                maths: parseInt(evt.target.value)
                            })
                            this.getAverage()
                        }
                    }/>
                </p>
                <p>
                    Science: <input type='text' value = {this.state.science} onChange={
                        (evt) => {
                            this.setState({
                                science: parseInt(evt.target.value)
                            })
                            this.getAverage()
                        }
                    }/>
                </p>
                <p>
                    Social Studies: <input type='text' value = {this.state.socialStudies} onChange={
                        (evt) => {
                            this.setState({
                                socialStudies: parseInt(evt.target.value)
                            })
                            this.getAverage()
                        }
                    }/>
                </p>
                <p>
                    Physics: <input type='text' value = {this.state.physics} onChange={
                        (evt) => {
                            this.setState({
                                physics: parseInt(evt.target.value)
                            })
                            this.getAverage()
                        }
                    }/>
                </p>
                <p>
                    Chemistry: <input type='text' value = {this.state.chemistry} onChange={
                        (evt) => {
                            this.setState({
                                chemistry: parseInt(evt.target.value)
                            })
                            this.getAverage()
                        }
                    }/>
                </p>
                <p>
                    Average: {this.state.average}
                </p>
                <button onClick={this.getAverage}>
                    Average
                </button>
            </div>
        )
    }
}

export default Average;