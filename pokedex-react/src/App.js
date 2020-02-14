import React, { Component } from 'react';
import './App.css';
import Header from './Header.js'
import PokeList from './PokeList.js'
import SearchOptions from './SearchOptions.js'
// import { getPokemon } from './pokemon-api';
import request from 'superagent';

export default class App extends Component {
  state = { pokedex: [] }

  async loadPokemon() {
    
    const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';
    let queryString = window.location.hash.slice(1);
    const url = `${URL}?${queryString}`;

    const searchedPokemon = await request.get(url);
    this.setState({ pokedex: searchedPokemon.body.results }) 
  }

  async componentDidMount() {
    const data = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex/')
    this.setState({ pokedex: data.body.results })
    
    window.addEventListener('hashchange', () => {
      this.loadPokemon()
    })
  }



  render() {
    
    return (
      <div>

      <Header></Header>
      <SearchOptions></SearchOptions>
      
      <PokeList pokedex={this.state.pokedex}></PokeList>
      </div>
    );
  }
  }


