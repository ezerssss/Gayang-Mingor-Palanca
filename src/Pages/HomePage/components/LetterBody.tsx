import React, { useState } from 'react';
import Swal from 'sweetalert2';
import emails from '../../../constants/emails';
import { LetterInterface } from '../../../interfaces/LetterInterface';
import Firestore from '../../../services/Firestore';
import {
  ButtonContainer,
  LetterBodyContainer,
} from '../../../styles/LetterBody.styles';
import Switch from 'react-switch';
import { User } from '@firebase/auth';

interface PropsInterface {
  firestore: Firestore | undefined;
  user?: User | null;
  pickedStudent: string;
}

const LetterBody = (props: PropsInterface) => {
  const { firestore, user, pickedStudent } = props;
  const [message, setMessage] = useState('');
  const [isAnon, setIsAnon] = useState(true);

  const handleError = () => {
    Swal.fire('Something went wrong', 'Please contact Ezra Magbanua', 'error');
  };

  const handleSendMessage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (message) {
      try {
        const formattedMessage = message.replace(/(?:\r|\n|\r\n)/g, '<br>');
        const letter: LetterInterface = {
          body: formattedMessage,
          sender: isAnon ? '' : user?.displayName || '',
        };
        firestore?.sendLetter(
          letter,
          emails[pickedStudent].trim() || 'lostletters'
        );
        setMessage('');
        Swal.fire('Palanca Sent', 'Thanks man fuck you!', 'success');
      } catch (er) {
        handleError();
        console.error(er);
      }
    } else {
      Swal.fire("You can't send an empty message!", '', 'warning');
    }
  };

  const handleAnon = async () => {
    if (user) {
      setIsAnon(!isAnon);
    } else {
      Swal.fire('', 'You need to sign in.', 'info');
      try {
        await firestore?.signIn();
        setIsAnon(!isAnon);
      } catch (er) {
        handleError();
        console.error(er);
      }
    }
  };

  return (
    <LetterBodyContainer>
      <form id="container">
        <div>
          {isAnon ? 'Anon' : user?.displayName}{' '}
          <Switch onChange={handleAnon} checked={isAnon} />
        </div>
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
