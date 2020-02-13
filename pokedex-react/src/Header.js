import React, { Component } from 'react';

export default class Header extends Component {
    render() {
      return (
        <div id='header'>
            <div id='blue-sensor'></div>
            <div id='red-sensor'></div>
            <div id='yellow-sensor'></div>
            <div id='green-sensor'></div>
            <h1 id='logo-header'>Poke'dex</h1>
        </div>
      );
    }
    }