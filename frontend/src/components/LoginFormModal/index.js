import React from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

function LoginFormModal({closeModal}) {


  return (
    <Modal onClose={closeModal}>
      <LoginForm closeModal={closeModal}/>
    </Modal>
);
}


export default LoginFormModal;