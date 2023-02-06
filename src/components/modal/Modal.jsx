import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Modal.css'
import { MdClose } from 'react-icons/md'

const Modal = ({shouldShowModal, onRequestClose, children, level}) => {
    //level === 1 --> first level modal
    //level === 2 --> second level modal
  return (
    <div className={level === 1 ? "modal" : "modal modal-z"} onClick={(e) => e.stopPropagation()}>
        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-close-icon" onClick={onRequestClose}>
                <MdClose />                
            </div>
            { children }
        </div>
    </div>
  )
}

export default Modal