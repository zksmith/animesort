import React, { useState } from 'react';
import Modal from 'react-modal';
import { login } from '../../services/userActions';
import './LoginModal.scss';

const customStyles = {
  content: {
    top: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    backgroundColor: '#080A13',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function LoginModal({ modalIsOpen, closeModal }) {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  });

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = await login(formData);
      // TODO: Get user data using token
      closeModal();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel='Example Modal'
    >
      <h2>Login</h2>
      <form className='login-form' onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          name='username'
          id='username'
          onChange={(e) => handleInput(e)}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          onChange={(e) => handleInput(e)}
        />
        <button type='submit'>Login</button>
      </form>
      <button onClick={closeModal}>close</button>
    </Modal>
  );
}

export default LoginModal;
