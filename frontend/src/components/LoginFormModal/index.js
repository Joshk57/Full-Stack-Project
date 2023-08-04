import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);
  // debugger

  return (
    <>
      <button className="modalBtn" onClick={(e) => {e.stopPropagation(); setShowModal(true)}}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm showModal={showModal} setShowModal={setShowModal}/>
        </Modal>
        // <h1>Hello</h1>
      )}
    </>
  );
}


export default LoginFormModal;