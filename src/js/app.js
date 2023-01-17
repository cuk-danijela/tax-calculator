import React, { Component } from 'react';
import { render } from 'react-dom';
import '../css/app.css';

export default class Hello extends Component {
    render() {
        return (
            <div className="text-primary text-4xl font-bold">
                Hello from react
            </div>
        );
    }
}

render(<Hello />, document.getElementById('app'));