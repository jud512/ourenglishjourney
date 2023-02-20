import React, { useEffect, useState } from 'react'
import { AiFillSound } from 'react-icons/ai'
import {GiReturnArrow} from 'react-icons/gi'
import './SingleCard.css'

const SingleCard = ({item,  handleItemSelect, selectWords, currentIdx}) => {
    const [showBack, setShowBack] = useState(false);
    return (
    
        <div className='item-single-card' key={item.id}>            
            <div className="turnCard" onClick={() => setShowBack(!showBack)}><GiReturnArrow /></div>
                <div className="item-content">
                    <div className={ showBack ? "back showback" : "back"}>                
                        <p >{item.description}</p>
                        <p >{item.example}</p>
                    </div> 
                    <div className='front'>              

                        <p className='word'>{ item.name }</p>                      
                        <p >{item.speech}</p>
                        <p >/{item.pronunciation}/</p>
                        {
                            item.sound  &&
                                <p className='soundIcon'><AiFillSound onClick={() => {
                                    item.audio.play()}}/></p>
                        }
                        
                    </div> 
                </div>    
           

        </div>
    
  )
}

export default SingleCard