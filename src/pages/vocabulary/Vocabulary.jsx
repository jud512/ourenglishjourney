import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import CreateNewVocabulary from '../../components/createNewVocabulary/CreateNewVocabulary';
import LearnVocabulary from '../../components/learnVocabulary/LearnVocabulary';
import ListVocabulary from '../../components/listVocabulary/ListVocabulary';
import Modal from '../../components/modal/Modal';
import './Vocabulary.css'

const Vocabulary = () => {
    const [shouldShowCreateVocab, setShouldShowCreateVocab] = useState(false);
    const [shouldShowListVocab, setShouldShowListVocab] = useState(false);
    const [shouldShowLearnVocab, setShouldShowLearnVocab] = useState(false);

  return (
    <div className='vocabulary'>
      <h1>Vocabulary</h1>
      <p>You have an opportunity to choose whether you'd like to create new vocabulary or only learn words.</p>
      <div className="vocabulary-options">
        <Link to="createvocabulary">
          <div className="vocabulary-create" >
            <span>Create New Vocabulary</span>
        </div>
        </Link>
        <Link to="listvocabulary">
          <div className="vocabulary-list">
            <span>List Vocabulary</span>
          </div>
        </Link>
        
        <Link to="learnvocabulary">
          <div className="vocabulary-learn">
            <span>Learn Vocabulary</span> 
          </div>
        </Link>
        

        </div>

        {shouldShowCreateVocab && 
        <Modal shouldShowModal={shouldShowCreateVocab} onRequestClose={() => setShouldShowCreateVocab(false)}  level={1}>
          <CreateNewVocabulary />
        </Modal>}
        
        {shouldShowListVocab && <Modal shouldShowModal={shouldShowListVocab} onRequestClose={() => setShouldShowListVocab(false)} children={<ListVocabulary />} level={1}/>}


        {shouldShowLearnVocab && <Modal shouldShowModal={shouldShowLearnVocab} onRequestClose={() => setShouldShowLearnVocab(false)} children={<LearnVocabulary />} level={1}/>}

      </div>
  )
}

export default Vocabulary