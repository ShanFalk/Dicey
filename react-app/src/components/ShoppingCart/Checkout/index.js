import React, {useState} from 'react';
import { useSelector } from 'react-redux'
import { Modal } from '../../../context/Modal'
import LoginForm from '../../LoginForms/LoginForm';

function Checkout() {
    const sessionUser = useSelector(state => state.session.user);
    const [showModal, setShowModal] = useState(false);

    function onClick() {
        if (!sessionUser) {
            setShowModal(true);
            return
        }
    }

    return (
        <>
            <button onClick={onClick}>
                Checkout
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <h4>Please log in</h4>
                    <LoginForm />
                </Modal>
            )}
        </>
    )
}

export default Checkout;
