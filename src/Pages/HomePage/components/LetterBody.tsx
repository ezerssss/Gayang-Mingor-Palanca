import React, { useState } from 'react';
import Swal from 'sweetalert2';
import emails from '../../../constants/emails';
import { LetterInterface } from '../../../interfaces/LetterInterface';
import Firestore from '../../../services/Firestore';
import {
  ButtonContainer,
  LetterBodyContainer,
} from '../../../styles/LetterBody.styles';

interface PropsInterface {
  firestore: Firestore | undefined;
  pickedStudent: string;
}

const LetterBody = (props: PropsInterface) => {
  const { firestore, pickedStudent } = props;
  const [sender, setSender] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (message) {
      try {
        const letter: LetterInterface = {
          body: message,
          sender: sender,
        };
        firestore?.sendLetter(
          letter,
          emails[pickedStudent].trim() || 'lostemails'
        );
        setMessage('');
        setSender('');
        Swal.fire('Palanca Sent', 'Thanks man fuck you!', 'success');
      } catch (er) {
        Swal.fire(
          'Something went wrong',
          'Please contact Ezra Magbanua',
          'error'
        );
        console.error(er);
      }
    } else {
      Swal.fire("You can't send an empty message!", '', 'warning');
    }
  };

  return (
    <LetterBodyContainer>
      <form id="container">
        <input
          type="text"
          placeholder="Name (Optional)"
          value={sender}
          onChange={(e) => setSender(e.target.value)}
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <ButtonContainer
          onClick={(e) => handleSendMessage(e)}
          isValid={!!message}
        >
          Send Message
        </ButtonContainer>
      </form>
    </LetterBodyContainer>
  );
};

export default LetterBody;
