import React, { Component } from 'react';
import './App.css';
import Header from './Header.js'
import PokeList from './PokeList.js'
import request from 'superagent';

export default class App extends Component {
  state = { pokedex: [] }

  async componentDidMount() {
    const data = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex/')
    this.setState({ pokedex: data.body.results })

    console.log(data.body)
  }



  render() {
    return (
      <div>

      <Header></Header>
      <PokeList pokedex={this.state.pokedex}></PokeList>
      </div>
    );
  }
  }


