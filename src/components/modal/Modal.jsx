import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Modal.css'
import { MdClose } from 'react-icons/md'

const Modal = ({ shouldShowModal, onRequestClose, children, level, direct}) => {
    //level === 1 --> first level modal
    //level === 2 --> second level modal
  return shouldShowModal && (
    <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
          <Link to={direct}>
            <div className="modal-close-icon" onClick={onRequestClose}>
                <MdClose />                
            </div>
          </Link>
            { children }
        </div>
    </div>
  )
}

export default Modal