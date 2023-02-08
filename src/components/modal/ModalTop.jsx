import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './ModalTop.css'
import { MdClose } from 'react-icons/md'

const ModalTop = ({ shouldShowModal, onRequestClose, children, level, direct}) => {
    //level === 1 --> first level modal
    //level === 2 --> second level modal
  return shouldShowModal && (
    <div className="modal modal-z" onClick={(e) => e.stopPropagation()}>
        <div className="modal-container-top" onClick={(e) => e.stopPropagation()}>
          
           
            <div className='modal-container-content'>
                <div className="modal-close-icon-top" onClick={onRequestClose}>
                    <MdClose />                
                </div>
                <div className="modal-content">
                     { children }
                </div>
               
            </div>
            
        </div>
    </div>
  )
}

export default ModalTop