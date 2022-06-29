import React, { useState } from 'react';

// Internal modules
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';

function SignupFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='button purple' onClick={() => setShowModal(true)}>Sign Up</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SignupForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default SignupFormModal;
