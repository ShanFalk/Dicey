import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { Modal } from '../../../context/Modal'
import { createPurchases } from '../../../store/purchases';
import LoginForm from '../../LoginForms/LoginForm';

function Checkout({ brewIds, duplicates }) {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history =useHistory();

    const [showModal, setShowModal] = useState(false);

    const onClick = async (e) => {
        e.preventDefault();

        if (!sessionUser) {
            setShowModal(true);
            return
        }

        const payload = {
            user_id: sessionUser.id,
            brew_ids: brewIds
        }

        let makePurchase = await dispatch(createPurchases(payload))

        if (makePurchase) {
            localStorage.setItem('cart', JSON.stringify([]));
            history.push(`/profile/${sessionUser.id}`)
        }

    }

    return (
        <>
            <button disabled={duplicates?.length > 0} className="purple button" onClick={onClick}>
                Checkout
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <h4>Please log in to continue</h4>
                    <LoginForm />
                </Modal>
            )}
        </>
    )
}

export default Checkout;
