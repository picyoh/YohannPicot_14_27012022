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
    let subtitle;
    const dispatch = useDispatch();
    const modalIsOpen = useSelector((state) => state.modal)

    const afterOpenModal = () => {
        subtitle.style.color = '#f00';
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