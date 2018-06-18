import React from 'react';
import Newcard from './Newcard';


const Cardlist = (props) => {
  
  let cards = props.items.map((card, index) => {
    return <Newcard key={index} cardDetails={card} />;
  });

  return (
      <div className="col-md-6 m-3 d-flex justify-content-center">
        <div className="row flex-md-row">{cards}</div>
      </div>
  );
};




export default Cardlist;