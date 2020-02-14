import React, { Component } from 'react';

export default class PokeItem extends Component {
    render() {
      return (
        <li className='poke-item'>
            <h2 className='poke-name' >{this.props.pokeItem.pokemon}</h2>
            <img alt='' src={this.props.pokeItem.url_image}></img>
            <p> HP: {this.props.pokeItem.hp} </p>
            <p> Element: {this.props.pokeItem.type_1} </p>     
        </li>
      );
    }
    }