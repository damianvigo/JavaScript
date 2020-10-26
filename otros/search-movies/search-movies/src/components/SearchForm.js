import React, { Component } from 'react';

const API_KEY = 'f68de5ac'

export class SearchForm extends Component {
  state = {
    inputMovie: ''
  }

  _handleChange = (e) => {
    this.setState({
      inputMovie: e.target.value
    })
  }

  _handleSubmit = e => {
    e.preventDefault()
    const { inputMovie } = this.state
    
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
      .then(res => res.json())
      .then(results => {
        const { Search = [], totalResults = '0' } = results
        console.log({ Search, totalResults })
        this.props.onResults(Search)
      })
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div name='field has-addons'>
        <div name='control'>
          <input
            name='input'
            onChange={this._handleChange}
            type='text'
            placeholder='Movie to search...' />
        </div>
        <div name='control'>
          <button className='button is-info'>Search</button>
        </div>
      </div>
      </form>
    );
  }
}
