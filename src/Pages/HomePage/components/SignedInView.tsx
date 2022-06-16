import { User } from '@firebase/auth';
import React from 'react';
import { ReactComponent as LogoutSVG } from '../../../images/logoutSVG.svg';

interface PropsInterface {
  handleSignOut: () => Promise<void>;
  handleButtonClick: (sentMessages: boolean) => Promise<void>;
  user: User | null | undefined;
  numberOfNewMessages: number;
}

const SignedInView = (props: PropsInterface) => {
  const { handleSignOut, handleButtonClick, user, numberOfNewMessages } = props;
  return (
    <span>
      <LogoutSVG onClick={handleSignOut} id="logout" />{' '}
      <p onClick={() => handleButtonClick(false)}>{user?.displayName}</p>
      {!!numberOfNewMessages && <div>{numberOfNewMessages}</div>}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
        height={20}
        id="sent"
        onClick={() => handleButtonClick(true)}
      >
        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
      </svg>
    </span>
  );
};

export default SignedInView;
