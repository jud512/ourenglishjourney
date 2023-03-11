import { hover } from '@testing-library/user-event/dist/hover'
import React, { useState } from 'react'
import './CircleOption.css'

const CircleOption = ({title, background}) => {
    const [isHover, setIsHover] = useState(false);

    const onMouseEnter = () => {
        setIsHover(true);
    }

    const onMouseLeave = () => {
        setIsHover(false);
    }

    const boxStyle = {
        backgroundColor: isHover ? 'white' : background,
        color: isHover ? background : 'white',
        borderColor: background
    }
  return (
    <div className="circleOption roll-in-left" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}  style={boxStyle}>
            <span>{title}</span>
    </div>
  )
}

export default CircleOption