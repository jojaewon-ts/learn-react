import React from 'react'
import CardButton from './CardButton';

const Card = ({title, subText, onCardClick}) => {
  //logic
  const className = "teamsmart";
  const handleClick = () => {
    console.log("click1");
  };
  //view
  return (
    <div className="card">
      <h5 className="card-title">{title}
      </h5>
      <p className={className}>
      {subText}
      </p>
      <CardButton onClick={handleClick} />
    </div>
  )
}

export default Card;
