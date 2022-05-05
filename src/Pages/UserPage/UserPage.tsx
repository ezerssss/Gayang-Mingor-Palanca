import { User } from '@firebase/auth';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Firestore from '../../services/Firestore';
import {
  AnimationContainer,
  LetterDiv,
  LetterBody,
  LetterSender,
  PalancasContainer,
  WelcomeText,
} from '../../styles/UserPage.styles';
import { ReactComponent as LogoutSVG } from '../../images/logoutSVG.svg';
import { LetterInterface } from '../../interfaces/LetterInterface';
import { collection, onSnapshot } from 'firebase/firestore';

interface PropsInterface {
  firestore: Firestore | undefined;
  user?: User | null;
}

const UserPage = (props: PropsInterface) => {
  const { user, firestore } = props;
  const history = useHistory();
  const [letters, setLetters] = useState<LetterInterface[]>([]);

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
    const getLetters = async () => {
      if (user?.email && firestore) {
        setLetters(await firestore.getLetters(user.email));
      }
    };

    getLetters();

    if (firestore && user) {
      const unsub = onSnapshot(
        collection(firestore.db, user.email || ''),
        () => {
          getLetters();
        }
      );

      return () => {
        unsub();
      };
    }
  }, [firestore, user]);

  return (
    <>
      <AnimationContainer>
        <WelcomeText isFirst>Here are your palancas</WelcomeText>
        <WelcomeText isFirst={false}>
          Welcome, {user?.displayName || 'bro'}
          <div>
            <LogoutSVG onClick={handleSignOut} id="logout" />
          </div>
        </WelcomeText>
        <PalancasContainer>
          {letters.length
            ? letters.map((letter, index) => {
                return (
                  <LetterDiv key={index}>
                    <LetterBody>
                      <pre>{letter.body.replaceAll('<br>', '\n')}</pre>
                    </LetterBody>
                    <LetterSender>From {letter.sender || 'Anon'}</LetterSender>
                  </LetterDiv>
                );
              })
            : 'You have no letters 🤭😝🤪😂'}
        </PalancasContainer>
      </AnimationContainer>
    </>
  );
};

export default UserPage;
