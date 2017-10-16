import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';
import './Restaurant.css';

class Restaurant extends Component {

  render () {
    const { name, votes, handleSelect, handleDeselect } = this.props;

    return (
      <article className="Restaurant">
          <ul>
              { votes && map(votes,(vote, key) => <li key={key}>{vote}</li>)}
          </ul>
        <h3> { name }</h3>
        <button onClick = { handleSelect }>
          Yea, This one!
        </button>
          <button className="destructive" onClick = { handleDeselect }>
              I was wrong
          </button>
      </article>
    );
  }
}

Restaurant.propTypes = {
  name: PropTypes.string,
  votes: PropTypes.object,
  user: PropTypes.object,
  handleSelect: PropTypes.func,
  handleDeselect: PropTypes.func
};

export default Restaurant;
