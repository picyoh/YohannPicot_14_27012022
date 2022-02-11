import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import ReactModal from 'react-modal'

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
    let subtitle;
    const dispatch = useDispatch();
    const modalIsOpen = useSelector((state) => state.modalIsOpen)

    const openModal = () => {
        dispatch({type: "setModal"})
    }

    const afterOpenModal = () => {
        subtitle.style.color = '#f00';
    }

    const closeModal = () => {
        
    }

    return (
            <ReactModal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={dispatch(setModal(false))}
                style={customStyle}
                contentLabel="employee created"
            >
                <p>Employee Created!</p>
            </ReactModal>
    )
}

export default Modal