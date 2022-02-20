import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import ReactFormModal from 'react-modal'
import { setFormModal } from '../../store'

const customStyle = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

ReactFormModal.setAppElement('#root');

function FormModal() {
    const dispatch = useDispatch();
    const FormModalIsOpen = useSelector((state) => state.formFormModal)
    
    const afterOpenFormModal = () => {
        // style here
    }
    const closeFormModal = () => {
        dispatch(setFormModal())
    }

    return (
        <>
            <ReactFormModal
                isOpen={FormModalIsOpen}
                onAfterOpen={afterOpenFormModal}
                onRequestClose={closeFormModal}
                style={customStyle}
                contentLabel="employee created"
            >
                <p>Employee Created!</p>
                <button className='close-FormModal' onClick={closeFormModal}>X</button>
            </ReactFormModal>
        </>
    )
}

export default FormModal