import React, { Component } from 'react';
import './App.css';
import Header from './Header.js'
import PokeList from './PokeList.js'
import SearchOptions from './SearchOptions.js'
import Pagination from './Pagination.js'
// import { getPokemon } from './pokemon-api';
import request from 'superagent';

export default class App extends Component {
  state = { 
    pokedex: [],
    totalPokemon: 801,
    perPage: 20,
    totalPage: 41
  }

  async loadPokemon() {
    const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';
    let queryString = window.location.hash.slice(1);
    const url = `${URL}?${queryString}`;
    
    const searchedPokemon = await request.get(url);
    this.setState({ 
      pokedex: searchedPokemon.body.results,
      totalPokemon: searchedPokemon.body.count,
    }) 
      const newTotalPage = Math.ceil(this.state.totalPokemon/this.state.perPage);
      this.setState({ totalPage: newTotalPage });
  }

  async componentDidMount() {
    const data = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex/');
    this.setState({ pokedex: data.body.results })
    this.setState({ totalPokemon: data.body.count })
    
    window.addEventListener('hashchange', () => {
      this.loadPokemon()
    })
  }



  render() {
    
    return (
      <div>

      <Header></Header>
      <SearchOptions></SearchOptions>
      <Pagination totalPokemon={this.state.totalPokemon} totalPage={this.state.totalPage} />
      
      <PokeList pokedex={this.state.pokedex}></PokeList>
      </div>
    );
  }
  }


