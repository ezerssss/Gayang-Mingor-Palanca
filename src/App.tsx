import { User } from '@firebase/auth';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthorizedRoute from './components/AuthorizedRoute';
import HomePage from './Pages/HomePage/HomePage';
import NotFound from './Pages/NotFound';
import Firestore from './services/Firestore';

function App() {
  const [firestoreClass, setFirestoreClass] = useState<Firestore>();
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    const firebaseConfig = {
      apiKey: process.env.REACT_APP_API_KEY,
      authDomain: process.env.REACT_APP_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_PROJECT_ID,
      storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_APP_ID,
      measurementId: process.env.REACT_APP_MEASUREMENT_ID,
    };
    setFirestoreClass(new Firestore(firebaseConfig));
  }, []);

  useEffect(() => {
    if (firestoreClass) {
      const unsubscribe = firestoreClass.auth.onAuthStateChanged(
        (fetchedUser) => {
          if (fetchedUser) {
            setUser(fetchedUser);
          } else {
            setUser(null);
          }
        }
      );

      return () => unsubscribe();
    }
  }, [firestoreClass]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <AuthorizedRoute path="/palancas" firestoreClass={firestoreClass} />
          <Route path="/">
            <HomePage firestore={firestoreClass} user={user} />
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
