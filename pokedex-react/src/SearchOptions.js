import React, { Component } from 'react';

export default class SearchOptions extends Component {
    componentDidMount() {
        this.updateControls();

        window.addEventListener('hashchange', () => {
            this.updateControls();
        })
    }

    state = {
        searchInput: ''
    }

    updateControls() {
        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);
        

        this.setState({
            searchInput: searchParams.get('s') || ''
        })
    }

    handleSubmit = event => {
        const form = document.querySelector('form');
        event.preventDefault();
        const formData = new FormData(form);

        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);

        
        searchParams.set('pokemon', formData.get('search'));


        window.location.hash = searchParams.toString();
    };

    render() {
        return (
            <div className='search-div'>
            <form className='options' onSubmit={this.handleSubmit}>
                <label for='search'>Search:</label>
                <p>
                    <input
                    id='search'
                    name='search'
                    onChange={e => this.setState({ searchInput: e.target.value })}
                    value={this.state.searchInput} 
                    />
                </p>
                <button>Search</button>
            </form>
            </div>
        )
    }
}