import React from 'react'

const SingleCardOneSide = () => {
    const [showBack, setShowBack] = useState(false);
  return (
    <div className='singleCardOneSide'>
        <div className='item' key={item.id}>            
                <div className="item-content">
                    <div className={ showBack ? "back showback" : "back"}>                
                        <p className='desc'>{item.description}</p>
                        <p className='desc'>{item.example}</p>
                    </div> 
                </div>   
                </div>
    </div>
  )
}

export default SingleCardOneSide