import React, { Component } from 'react';
import './App.css';
import Header from './Header.js'
import PokeList from './PokeList.js'

export default class App extends Component {
  render() {
    return (
      <div>

      <Header></Header>
      <PokeList></PokeList>
      </div>
    );
  }
  }


