import React from 'react';

export default class CardItem extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div key={this.props.label} className="card-item" onClick={this.props.onClick}>
                <img src={this.props.img} className="card-photo"/>
                <p className="card-label">{this.props.label}</p>
            </div>
        );
    }
}