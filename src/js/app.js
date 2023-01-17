import React, { Component } from 'react';
import { render } from 'react-dom';
import Main from '../components/Main';
import '../css/app.css';

export default class Hello extends Component {
    render() {
        return (
            <div className=''>
            <Main/>
            </div>
        );
    }
}

render(<Hello />, document.getElementById('app'));