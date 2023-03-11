import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import CreateNewVocabulary from '../../components/createNewVocabulary/CreateNewVocabulary';
import LearnVocabulary from '../../components/learnVocabulary/LearnVocabulary';
import ListVocabulary from '../../components/listVocabulary/ListVocabulary';
import Modal from '../../components/modal/Modal';
import './Vocabulary.css'
import Header from '../../components/header/Header'

const Vocabulary = () => {
    const [shouldShowCreateVocab, setShouldShowCreateVocab] = useState(false);
    const [shouldShowListVocab, setShouldShowListVocab] = useState(false);
    const [shouldShowLearnVocab, setShouldShowLearnVocab] = useState(false);

  return (
    <div className='vocabulary'>
      <Header title="Vocabulary" img1="https://images.pexels.com/photos/4567484/pexels-photo-4567484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" img2="https://images.pexels.com/photos/3782235/pexels-photo-3782235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      
      <p className='vocabulary-instruction'>You have an opportunity to choose whether you'd like to create new vocabulary or only learn words.</p>
      <div className="vocabulary-options">
        <Link to="createvocabulary ">
          <div className="vocabulary-create roll-in-left" >
            <span>Create New Vocabulary</span>
        </div>
        </Link>
        <Link to="listvocabulary">
          <div className="vocabulary-list roll-in-left-2">
            <span>List Vocabulary</span>
          </div>
        </Link>
        
        <Link to="learnvocabulary">
          <div className="vocabulary-learn roll-in-left-3">
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