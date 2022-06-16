import { User } from '@firebase/auth';
import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import NotFound from '../Pages/NotFound';
import SentMessagesPage from '../Pages/SentMessagesPage/SentMessagesPage';
import UserPage from '../Pages/UserPage/UserPage';
import Firestore from '../services/Firestore';

interface PropsInterface {
  firestoreClass: Firestore | undefined;
  path: string;
}

const AuthorizedRoute = (props: PropsInterface) => {
  const { firestoreClass, path } = props;
  const [user, setIsUser] = useState<User>();

  useEffect(() => {
    if (firestoreClass) {
      const unsubscribe = firestoreClass.auth.onAuthStateChanged(
        (fetchedUser) => {
          if (fetchedUser) {
            setIsUser(fetchedUser);
          }
        }
      );

      return () => unsubscribe();
    }
  }, [firestoreClass]);

  const Page =
    path === '/palancas' ? (
      <UserPage user={user} firestore={firestoreClass} />
    ) : (
      <SentMessagesPage user={user} firestore={firestoreClass} />
    );

  return user ? <Route path={path}>{Page}</Route> : <NotFound />;
};

export default AuthorizedRoute;
