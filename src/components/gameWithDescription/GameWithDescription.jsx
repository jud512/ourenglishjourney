import React, {useState} from 'react'
import Header from '../header/Header';
import SingleCardOneSide from '../singleCardOneSide/SingleCardOneSide'
import './GameWithDescription.css'

const GameWithDescription = ({words, number}) => {
    const [wordsApp, setWordsApp] = useState([]);
    const [selectedCard, setSelectedCard] = useState();
    const [showHint, setShowHint] = useState(false);
    const [showHintMessage, setShowHintMessage] = useState(false);
    const handleClickOnCard = (id) => {
        const newSelectedCard = wordsApp.filter(item => item.id === id);
        setSelectedCard(newSelectedCard[0]);

        const newWords = wordsApp.map((item) => item.id === id ? {...item, selected: true} : item)
        setWordsApp(newWords);
        setShowHintMessage(false);
    }

    const handleShowHint = () => {
        setShowHint(true)
        setShowHintMessage(!showHintMessage);
    }

    useState(() => {
        const newWords = words.map((item) => ({...item, selected: false}))
        setWordsApp(newWords)
    }, [])
  return (
    <div className='gameWithWords'>
     
        <p className='gameWithWords-intruction'>Please, select a number!</p>
        <div className="gameWithWords-container">
            
            {
                wordsApp.map((item, idx) =>
                idx < number &&
                <div className='gameWithWords-card-container  roll-in-left' key={item.id}>
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
                <div>
                    <div className="gameWithWords-card-selected slide-in-blurred-top">
                        <p className='word-name '>{selectedCard.description}</p>
                    </div>
                    <div>
                        <p>Do you want to check your answer? Click there: <span className='hint' onClick={handleShowHint}>{showHintMessage ? 'HIDE':'HINT'}</span></p>
                    </div>
                    {
                        showHint &&
                        <div className={showHintMessage ? 'solution-description scale-in-center ' : 'solution-description scale-in-center scale-out-center'}>
                            <p>{selectedCard.name}</p>
                            
                        </div>
                    } 
                </div>
                
            }

            <div className='gamewithwordsversiontwo-img-container'>
                <img src="https://images.pexels.com/photos/1181715/pexels-photo-1181715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
    </div>
  )
  }

export default GameWithDescription