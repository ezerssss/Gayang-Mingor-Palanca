import React, { useEffect, useState } from 'react';
import {
  AnimationContainer,
  PalancasContainer,
  WelcomeText,
} from '../../styles/UserPage.styles';
import { ReactComponent as LogoutSVG } from '../../images/logoutSVG.svg';
import Firestore from '../../services/Firestore';
import { User } from '@firebase/auth';
import Letter from '../UserPage/components/Letter';
import { useHistory } from 'react-router-dom';
import { LetterInterface } from '../../interfaces/LetterInterface';
import { ClipLoader } from 'react-spinners';

interface PropsInterface {
  firestore: Firestore | undefined;
  user?: User | null;
}

const SentMessagesPage = (props: PropsInterface) => {
  const { firestore, user } = props;
  const history = useHistory();

  const [sentLetters, setSentLetters] = useState<LetterInterface[]>([]);

  const handleSignOut = async () => {
    try {
      if (await firestore?.signOut()) {
        history.push('/');
      }
    } catch (er) {
      console.error(er);
    }
  };

  useEffect(() => {
    const getSentLetters = async () => {
      if (user?.email && firestore) {
        setSentLetters(await firestore.getSentLetters(user.displayName));
      }
    };

    if (firestore && user) {
      getSentLetters();
    }
  }, [firestore, user]);

  return (
    <>
      <AnimationContainer>
        <WelcomeText isFirst>Here are your sent messages</WelcomeText>
        <WelcomeText isFirst={false}>
          {user?.displayName || 'bro'}
          <div>
            <LogoutSVG onClick={handleSignOut} id="logout" />
          </div>
        </WelcomeText>
        <PalancasContainer isEmpty={!sentLetters.length}>
          {sentLetters.length ? (
            sentLetters.map((letter, index) => (
              <Letter
                key={index}
                body={letter.body}
                sender={letter.sender}
                date={letter.date}
                isFetched={letter.isFetched}
                to={letter.to}
                isSentLetter
              />
            ))
          ) : (
            <span>
              You did not send any letters or ga loading pa pls huwat lang jud{' '}
              <ClipLoader size={10} color="#e8960f" />
            </span>
          )}
        </PalancasContainer>
      </AnimationContainer>
    </>
  );
};

export default SentMessagesPage;
