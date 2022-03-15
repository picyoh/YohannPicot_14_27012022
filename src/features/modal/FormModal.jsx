import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import ReactFormModal from 'react-modal'
import { setFormModal } from './formModal.actions'

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
    const formModalIsOpen = useSelector((state) => state.formModal.isOpen)
    
    const afterOpenFormModal = () => {
        // style here
    }
    const closeFormModal = () => {
        dispatch(setFormModal(false))
    }

    return (
        <>
            <ReactFormModal
                isOpen={formModalIsOpen}
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