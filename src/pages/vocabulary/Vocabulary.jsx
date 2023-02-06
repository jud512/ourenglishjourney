import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import CreateNewVocabulary from '../../components/createNewVocabulary/CreateNewVocabulary';
import ListVocabulary from '../../components/listVocabulary/ListVocabulary'
import Modal from '../../components/modal/Modal';
import './Vocabulary.css'

const Vocabulary = () => {
    const [shouldShowCreateVocab, setShouldShowCreateVocab] = useState(false);
    const [shouldShowListVocab, setShouldShowListVocab] = useState(false);

  return (
    <div className='vocabulary'>
      <h1>Vocabulary</h1>
      <p>You have an opportunity to choose whether you'd like to create new vocabulary or only learn words.</p>
      <div className="vocabulary-options">
    
        <div className="vocabulary-create" onClick={() => setShouldShowCreateVocab(true)}>
            <span>Create New Vocabulary</span>
        </div>
        <div className="vocabulary-list" onClick={() => setShouldShowListVocab(true)}>
            <span>List Vocabulary</span>
        </div>
    
            <Link to="/">
                <div className="vocabulary-edit">
                    <span>Edit Vocabulary</span> 
                </div>
            </Link>
            <Link to="/">
                <div className="vocabulary-learn">
                    <span>Learn Vocabulary</span> 
                </div>
            </Link>
        </div>

        {shouldShowCreateVocab && <Modal shouldShowModal={shouldShowCreateVocab} onRequestClose={() => setShouldShowCreateVocab(false)} children={<CreateNewVocabulary />}/>}
        
        {shouldShowListVocab && <Modal shouldShowListVocab={shouldShowListVocab} onRequestClose={() => setShouldShowListVocab(false)} children={<ListVocabulary />}/>}

      </div>
  )
}

export default Vocabulary