import React from 'react'
import { useState } from 'react';
import './SingleCardOneSide.css';
import { AiFillSound } from 'react-icons/ai';

const SingleCardOneSide = ({item, type}) => {
  //type == w : word
  //type == d : description
    const hide = type === "w";
    
    const [showBack, setShowBack] = useState(false);
  return (
    <div className='singleCardOneSide'>
        <div className='item' key={item.id}>            
                <div className="item-content">
                    <div className={hide ? "" : "hide"}>
                      <p style={{fontWeight:"bold"}}>{item.name}</p>
                      <p>{item.pronunciation}</p>
                      <p><AiFillSound className={item.sound ? "" : "hidden"} onClick={() => {
                                item.audio.play()
                            }}/></p>
                    </div>
                    <div className={ hide ? "hide" : ""}>                
                        <p className='desc'>{item.description}</p>
                        <p className='desc'>{item.example}</p>
                    </div> 
                </div>   
                </div>
    </div>
  )
}

export default SingleCardOneSide