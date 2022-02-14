import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import ReactModal from 'react-modal'
import setModal from './form/employeeSlice'

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
    const modalIsOpen = useSelector((state) => state.employee.modal)
    console.log(modalIsOpen)
    const afterOpenModal = () => {
        // console.log(subtitle)
        // subtitle.style.color = 'black';
    }
    const closeModal = () => {
        dispatch(setModal(false))
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
            </ReactModal>
            <button className='close-modal' onClick={closeModal}>X</button>
        </>
    )
}

export default Modal