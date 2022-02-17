import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import ReactModal from 'react-modal'
import { setModal } from './form/formSlice'

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

ReactModal.setAppElement('#root');

function Modal() {
    const dispatch = useDispatch();
    const state = useSelector((state)=> state)
    const modalIsOpen = useSelector((state) => state.form.modal)
    console.log(state.form.modal)
    const afterOpenModal = () => {
    }
    const closeModal = () => {
        dispatch(setModal())
    }

    return (
        <>
            <ReactModal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyle}
                contentLabel="employee created"
            >
                <p>Employee Created!</p>
                <button className='close-modal' onClick={closeModal}>X</button>
            </ReactModal>
        </>
    )
}

export default Modal