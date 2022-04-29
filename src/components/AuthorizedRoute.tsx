import { User } from '@firebase/auth';
import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import NotFound from '../Pages/NotFound';
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

  return user ? (
    <Route path={path}>
      <UserPage user={user} firestore={firestoreClass} />
    </Route>
  ) : (
    <NotFound />
  );
};

export default AuthorizedRoute;
