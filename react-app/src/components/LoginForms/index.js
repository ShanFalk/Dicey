import React, { useState } from 'react';

// Internal modules
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

function LoginFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='button purple' onClick={() => setShowModal(true)}>Log In</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <LoginForm setShowModal={setShowModal}/>
                </Modal>
            )}
        </>
    );
}

export default LoginFormModal;
