import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Pokemon extends Component {

  render() {
    return (
        <article className="pokemon-caught">
          <Link to={`/pokemons/${this.props.name}`}>
            <img src={`/img/${this.props.id}.png`} alt=""/>
            <h2 className="pokemon-caught__name">{this.props.name}</h2>
          </Link>
        </article>
    );
  }
}

export default Pokemon;