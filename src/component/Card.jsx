import React from 'react'
import CardButton from './CardButton';

const Card = () => {
  return (
    <div className="card">
      <h5 className="card-title">Card title
      </h5>
      <p className="Card-sub-text">
      Some quick example text to build on the card title and make up the bulk of the card's content.
      </p>
      <CardButton />
    </div>
  )
}

export default Card;
