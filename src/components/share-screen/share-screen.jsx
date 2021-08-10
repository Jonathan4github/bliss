import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { shareContentUrl } from '../../api';
import { Modal, ModalContent, Form, ErrorMsg } from './share-screen.style';

const ShareScreen = ({toggle}) => {
  const [destinationEmail, setDestinationEmail] = useState('');
  const [valid, setIsValid] = useState(false);

  const emailRegex = /\S+@\S+\.\S+/;
  const contentUrl = window.location.href;

  const validateEmail = (event) => {
    const email = event.target.value;
    setDestinationEmail(email);
    if (emailRegex.test(email)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const sendShareContentUrl = async(e) => {
    e.preventDefault();
    const { data: { status } } = await shareContentUrl(destinationEmail, contentUrl);

    if (status === 'OK') {
      toast.success('Link shared Successfully');
      setTimeout(() =>  toggle(), 1000)
    }
  }
  
  return (
    <>
      <Modal>
        <ModalContent>
          <span className="close" onClick={toggle}>&times;</span>
          <Form>
            <input
              type="email"
              className="text-input"
              placeholder="enter email"
              onChange={(e) => validateEmail(e)}
            />
            <button
              title="share"
              className="btn"
              onClick={(e) => sendShareContentUrl(e)}
            >
              Share
            </button>
          </Form>
          {!valid && destinationEmail && <ErrorMsg>enter a valid email</ErrorMsg>}
        </ModalContent>
      </Modal>
    </>
  )
}

export default ShareScreen;
