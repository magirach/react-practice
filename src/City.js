import React from 'react';

class City extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <b>Name : {this.props.city.name}</b> <br />
                Area : {this.props.city.area} <br />
                Population : {this.props.city.population} <br />
                Mayor : {this.props.city.mayor} <br />
                Incom Per Capita : {this.props.city.incomPerCapita} <br /><br />
            </div>
        )
    }
}

export default City;