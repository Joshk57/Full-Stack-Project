import React from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';

function SignupFormModal({closeModal}) {
  return (
    <Modal onClose={closeModal}>
      <SignupForm closeModal={closeModal}/>
    </Modal>
);
}

export default SignupFormModal;