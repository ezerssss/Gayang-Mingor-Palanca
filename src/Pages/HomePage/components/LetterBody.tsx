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
import { ClipLoader } from 'react-spinners';

interface PropsInterface {
  firestore: Firestore | undefined;
  user?: User | null;
  pickedStudent: string;
}

const LetterBody = (props: PropsInterface) => {
  const { firestore, user, pickedStudent } = props;
  const [message, setMessage] = useState('');
  const [isAnon, setIsAnon] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleError = () => {
    Swal.fire('Something went wrong', 'Please contact Ezra Magbanua', 'error');
  };

  const handleSendMessage = async (
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
        setIsLoading(true);
        await firestore?.sendLetter(
          letter,
          emails[pickedStudent].trim().replace('ñ', 'n') || 'lostletters'
        );
        setMessage('');
        setIsLoading(false);
        Swal.fire({
          title: 'Palanca Sent',
          text: 'Lamats bai',
          icon: 'success',
          confirmButtonText: 'Ge',
        });
      } catch (er) {
        handleError();
        setIsLoading(false);
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
          placeholder={
            pickedStudent === 'Magbanua'
              ? 'Tarong taronga jud nang akong message maka tilaw jud kag kumo ron'
              : 'Message'
          }
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <ButtonContainer
          onClick={(e) => handleSendMessage(e)}
          isValid={!!message}
          disabled={isLoading || !message}
        >
          {isLoading ? <ClipLoader size="20px" /> : 'Send Message'}
        </ButtonContainer>
      </form>
    </LetterBodyContainer>
  );
};

export default LetterBody;
