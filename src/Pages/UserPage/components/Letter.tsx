import React from 'react';
import {
  LetterBody,
  LetterDiv,
  LetterSender,
  NewLetterIndicator,
} from '../../../styles/UserPage.styles';
import Marker from '../../../images/marker.png';

interface PropsInterface {
  body: string;
  sender: string;
  date: number;
  isFetched?: boolean;
  isSentLetter?: boolean;
  to?: string;
}

const Letter = (props: PropsInterface) => {
  const { body, sender, date, isFetched, isSentLetter, to } = props;

  const subtitle = isSentLetter ? to : sender || 'Anon';

  return (
    <LetterDiv>
      {!isFetched && (
        <NewLetterIndicator>
          <img src={Marker} alt="New" />
        </NewLetterIndicator>
      )}
      <LetterBody>
        <pre>{body.replaceAll('<br>', '\n')}</pre>
      </LetterBody>
      <LetterSender>
        {isSentLetter ? 'To ' : 'From '} {subtitle} -{' '}
        {new Date(date).toLocaleDateString()}
      </LetterSender>
    </LetterDiv>
  );
};

export default React.memo(Letter);
