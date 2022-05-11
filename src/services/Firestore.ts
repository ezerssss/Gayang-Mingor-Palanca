import {
  browserLocalPersistence,
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  signInWithPopup,
  signOut,
} from '@firebase/auth';
import { initializeApp } from 'firebase/app';
import {
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
  writeBatch,
} from 'firebase/firestore';
import { LetterInterface } from '../interfaces/LetterInterface';

export default class Firestore {
  private app;
  public db;
  public auth;

  constructor(firebaseConfig: {
    apiKey: string | undefined;
    authDomain: string | undefined;
    projectId: string | undefined;
    storageBucket: string | undefined;
    messagingSenderId: string | undefined;
    appId: string | undefined;
    measurementId: string | undefined;
  }) {
    this.app = initializeApp(firebaseConfig);
    this.db = getFirestore(this.app);
    this.auth = getAuth();
  }

  public async signIn(): Promise<boolean> {
    const provider = new GoogleAuthProvider();
    try {
      setPersistence(this.auth, browserLocalPersistence);
      const result = await signInWithPopup(this.auth, provider);
      if (result.user.email) {
        return true;
      } else {
        return false;
      }
    } catch (er: any) {
      throw Error(er);
    }
  }

  public async signOut(): Promise<boolean> {
    try {
      await signOut(this.auth);
      return true;
    } catch (er: any) {
      throw Error(er);
    }
  }

  public async sendLetter(
    letter: LetterInterface,
    to: string
  ): Promise<boolean> {
    try {
      if (letter.body) {
        await addDoc(collection(this.db, to), {
          sender: letter.sender,
          body: letter.body,
          isFetched: letter.isFetched,
          date: letter.date,
        });
      }
      return true;
    } catch (er: any) {
      throw Error(er);
    }
  }

  public async updateLetters(to: string, ids: string[]): Promise<void> {
    if (!!ids) {
      const batch = writeBatch(this.db);

      try {
        ids.forEach((id) => {
          batch.update(doc(this.db, to, id), {
            isFetched: true,
          });
        });
        await batch.commit();
      } catch (er: any) {
        console.error(er);
        throw new Error(er);
      }
    }
  }

  public async getLetters(user: string): Promise<LetterInterface[]> {
    const fetchedLetters: LetterInterface[] = [];
    try {
      const querySnapshot = await getDocs(collection(this.db, user));
      querySnapshot.forEach((doc) => {
        const fetchedLetter: LetterInterface = {
          body: doc.data().body,
          sender: doc.data().sender,
          isFetched: doc.data().isFetched,
          date: doc.data().date,
        };
        fetchedLetters.push(fetchedLetter);
      });
      return fetchedLetters.sort((a, b) => b.date - a.date);
    } catch (er) {
      console.error(er);
      throw Error('No Letters Found');
    }
  }
}
