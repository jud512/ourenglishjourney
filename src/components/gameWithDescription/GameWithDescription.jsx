import React from 'react'
import SingleCardOneSide from '../singleCardOneSide/SingleCardOneSide'
import './GameWithDescription.css'

const GameWithDescription = ({words, number}) => {
  return (
    <div className='gameWithDescription'>
      <div className="gameWithDescription-container">
        {
          words.map((item, idx) => 
            <>
              <SingleCardOneSide item={item} type="d" count={idx + 1}/>
            </>)
        }
      </div>
      
        
    </div>

)
}

export default GameWithDescription