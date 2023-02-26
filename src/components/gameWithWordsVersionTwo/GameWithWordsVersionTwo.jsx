import React, { useState } from 'react'
import './GameWithWordsVersionTwo.css'

const GameWithWordsVersionTwo = ({words, number}) => {
    const [wordsApp, setWordsApp] = useState([]);
    const [selectedCard, setSelectedCard] = useState();
    const [showHint, sestShowHint] = useState(false);
    const handleClickOnCard = (id) => {
        const newSelectedCard = wordsApp.filter(item => item.id === id);
        setSelectedCard(newSelectedCard[0]);

        const newWords = wordsApp.map((item) => item.id === id ? {...item, selected: true} : item)
        setWordsApp(newWords);
    }

    const handleShowHint = () => {
        sestShowHint(!showHint)
    }

    useState(() => {
        const newWords = words.map((item) => ({...item, selected: false}))
        setWordsApp(newWords)
    }, [])
    console.log('WORDS-SELECTED', wordsApp)
  return (
    <div className='gameWithWords'>
        <div className="gameWithWords-container">
            {
                wordsApp.map((item, idx) =>
                idx < number &&
                <div className='gameWithWords-card-container' key={item.id}>
                    {
                        !item.selected ?
                        <div className="gameWithWords-card"  onClick={() => handleClickOnCard(item.id)}>
                        <p>{idx + 1}</p>
                        </div> :
                        <div className="gameWithWords-card" style={{backgroundColor:"red", color:"white", }} >
                        <p style={{fontWeight:'400', fontSize:'16px'}}>SELECTED</p>
                        </div>
                    }
                   
                </div>
                
                )
            }

        </div>

        {
                selectedCard &&
                <>
                    <div className="gameWithWords-card-selected">
                        <p className='word-name fade-in-fwd'>{selectedCard.name}</p>
                    </div>
                    <div>
                        <p>Do you want to check your answer? Click there: <span className='hint' onClick={handleShowHint}>HINT</span></p>
                    </div>
                    {
                        showHint &&
                        <div className='solution-description'>
                            <p>{selectedCard.description}</p>
                        </div>
                    }
                </>
                
            }
    </div>
  )
}

export default GameWithWordsVersionTwo