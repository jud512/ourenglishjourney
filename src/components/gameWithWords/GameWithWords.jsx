import React from 'react'
import SingleCardOneSide from '../singleCardOneSide/SingleCardOneSide'
import './GameWithWords.css';

const GameWithWords = ({words, number}) => {
    console.log('WORDS FROM GAME', words)
    console.log('COUNT WORDS', number)
  return (
    <div className='gameWithWords'>
      <div className="gameWithWords-container">
        {
          words.map(item => 
            <>
              <SingleCardOneSide item={item} type="w" />
            </>)
        }
      </div>
      
        
    </div>
  )
}

export default GameWithWords