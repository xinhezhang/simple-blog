import React, { Component } from 'react';
import logo from '../logo.svg';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Simple Weather Page</h1>
                <h2 className="App-author">by Xinhe Zhang</h2>
            </header>
        );
    }
}

export default Header;