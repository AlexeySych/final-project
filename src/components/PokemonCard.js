import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class PokemonCard extends Component {

  render() {
    return (
        <article className="pokemon-card" >
          <Link to={`/pokemons/${this.props.name}`} >
            <img alt="" src={`/img/${this.props.id}.png`}/>
            <h2 className="pokemon-card__name">{this.props.name}</h2>
          </Link>
          <button className="pokemon-card__catch" onClick={this.props.catch} disabled={this.props.isCaught}>Catch</button>
        </article>
    );
  }
}

export default PokemonCard;