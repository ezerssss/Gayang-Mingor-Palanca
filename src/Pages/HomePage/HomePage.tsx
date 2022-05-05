import React, { useCallback, useState } from 'react';
import ScrollToTop from 'react-scroll-to-top';
import { SignInDiv, SubtitleDiv, TitleDiv } from '../../styles/HomePage.styles';
import Gallery from './components/Gallery';
import { ReactComponent as ArrowSVG } from '../../images/arrow.svg';
import Firestore from '../../services/Firestore';
import { User } from '@firebase/auth';
import { useHistory } from 'react-router-dom';
import Filters from './components/Filters';
import Modal from 'react-modal';
import SendLetterModal from './components/SendLetterModal';
import Swal from 'sweetalert2';
import { ReactComponent as LogoutSVG } from '../../images/logoutSVG.svg';

interface PropsInterface {
  firestore: Firestore | undefined;
  user?: User | null;
}

const HomePage = (props: PropsInterface) => {
  const { firestore, user } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pickedStudent, setPickedStudent] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [selectedStudent, setSelectedStudent] = useState('');

  const history = useHistory();

  const handleButtonClick = async () => {
    if (!user) {
      try {
        await firestore?.signIn();
      } catch (er) {
        if (er instanceof Error) {
          if (
            er.message ===
            'FirebaseError: Firebase: Error (auth/popup-closed-by-user).'
          ) {
            return;
          }
        }
        console.error(er);
        Swal.fire(
          'Something went wrong',
          'Please contact Ezra Magbanua',
          'error'
        );
      }
    } else {
      history.push('/palancas');
    }
  };

  const openModal = useCallback((student: string) => {
    setIsModalOpen(true);
    setPickedStudent(student);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSignOut = async () => {
    try {
      await firestore?.signOut();
    } catch (er) {
      console.error(er);
    }
  };

  const SignedInView = () => {
    return (
      <span>
        <LogoutSVG onClick={handleSignOut} id="logout" /> {user?.displayName}
      </span>
    );
  };

  return (
    <div>
      <SignInDiv>
        {user ? (
          <SignedInView />
        ) : (
          <p onClick={handleButtonClick}>Sign In via Google</p>
        )}
      </SignInDiv>
      <TitleDiv>Gayang Mingor</TitleDiv>
      <SubtitleDiv>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ipsa
        provident rem. Ab vitae in a harum! Voluptate aspernatur id, asperiores
        fuga quis numquam vero, libero debitis excepturi ducimus dolorum!
      </SubtitleDiv>
      <Filters
        selectedSection={selectedSection}
        handleSelectedSection={(selected: string) =>
          setSelectedSection(selected)
        }
        handleSelectedStudent={(selected: string) =>
          setSelectedStudent(selected)
        }
      />
      <Gallery
        openModal={openModal}
        selectedSection={selectedSection}
        selectedStudent={selectedStudent}
      />
      <ScrollToTop
        smooth
        id="scroll-to-top"
        height="20"
        component={<ArrowSVG />}
      />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={{
          content: {
            padding: '0px',
            border: '0px',
          },
        }}
      >
        <SendLetterModal
          firestore={firestore}
          user={user}
          closeModal={closeModal}
          pickedStudent={pickedStudent}
        />
      </Modal>
    </div>
  );
};

export default HomePage;
