import React from 'react'

const CardButton = ({onClick}) => {

  const handleClick = () => {
    console.log("click");
    onClick();
  };


  return (
    <div>
      <button type="button" className="card-button"
      onClick={handleClick}>
      Go somewhere
      </button>
    </div>
  )
}

export default CardButton
