import React, {useEffect, useLayoutEffect, useRef, useState} from 'react'
import './GameWithPicture.css'

const GameWithPicture = ({pictures, number}) => {

    
    

  

    
    return (
    <div className='gameWithPicture' >
        <div className="gameWithPicture-container">
            {
                pictures.map((item, idx) => 
                    (
                        idx < number &&
                        <div className='gameWithPicture-image' key={item.id} >
                            <img src={item.url} alt="" />
                        </div>
                    )
                    )
            }
        </div>
        
    </div>
  )
}

export default GameWithPicture