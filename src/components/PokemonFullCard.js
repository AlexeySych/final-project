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
            <h2 className="pokemon-full__name">
              {this.props.name}
            </h2>
            <p>
              <b>Status:</b> {this.props.isCaught ? 'Caught' : 'Not Caught'}
            </p>
            {this.props.isCaught ? 
            <p> 
              <b>Date:</b> <time>{this.props.date}</time> 
            </p> 
            : ' '}
            
          </div>
      </article>
    );
  }
}

export default Pokemon;