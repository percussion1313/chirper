import React from 'react';
const Cardlist = (props) => {

  return(
    <div>{this.state.defaultChirp.map((defaultChirp, array) => (
      <div>{defaultChirp.props.userID}{defaultChirp.props.name}{defaultChirp.props.text}</div>
  ))}</div>
  );
}

export default Cardlist;