import React, { Component } from 'react';


class Pokemon extends Component {

  render() {
    return (
      <article className="pokemon-full" >
          <img alt="" src={`/img/${this.props.id}.png`}/>
          <div className="pokemon-full__info">
            <p>
              <b>ID:</b> #{this.props.id}
            </p>
            <h2>
              Name: <span className="pokemon-full__name">{this.props.name}</span>
            </h2>
            <p>
              <b>Status:</b> {this.props.isCaught ? 'Caught' : 'Not Caught'}
            </p>
            <p>
              <b>Date:</b> <time>{this.props.isCaught ? this.props.date : ' '} </time>
            </p>
          </div>
      </article>
    );
  }
}

export default Pokemon;