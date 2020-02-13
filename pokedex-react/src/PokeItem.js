import React, { Component } from 'react';

export default class PokeItem extends Component {
    render() {
      return (
        <li className='poke-item'>
            <h2>{this.props.pokeItem.pokemon}</h2>
            <img alt='' src={this.props.pokeItem.url_image}></img>     
        </li>
      );
    }
    }