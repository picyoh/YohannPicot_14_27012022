import React from 'react'

import Modal from 'react-modal'

const customStyles = {
    content: {
        top:'50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('')

function Modal(){
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const openModal = () => {
        setIsOpen(true)
    }

    const afterOpenModal = () => {
        subtitle.style.color = '#f00';
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return(
        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={}
        onRequestClose={}
        style={}
        contentLabel={}
        >
            <p>Employee Created!</p>
        </Modal>
    )
}

export { Modal }