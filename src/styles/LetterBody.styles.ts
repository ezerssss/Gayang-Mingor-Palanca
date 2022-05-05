import styled from 'styled-components';

export const LetterBodyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 600px;
  width: 50%;

  @media screen and (max-width: 950px) {
    width: 100%;
  }

  #container {
    width: 80%;
  }

  div {
    color: black;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  textarea {
    margin-top: 20px;
    resize: none;
    border: 1px solid #cdcdcd;
    box-sizing: border-box;
    border-radius: 8px;
    width: 100%;
    height: 400px;
    padding: 20px;
    font-weight: 400;
    font-size: 16px;
    font-family: 'Inter';
    white-space: pre-wrap;

    :focus {
      outline: none;
    }

    ::placeholder {
      color: #cdcdcd;
    }
  }
`;

interface PropsInterface {
  isValid: boolean;
}

export const ButtonContainer = styled.button<PropsInterface>`
  font-family: 'Inter';
  background-color: ${(props) => (props.isValid ? '#0073CC' : '#aaaaaa')};
  border-radius: 8px;
  width: 90%;
  height: 48px;
  border: 0;
  color: white;
  font-weight: 700;
  display: block;
  margin: auto;
  margin-top: 20px;
  font-size: 16px;
  cursor: pointer;

  :focus {
    outline: none;
  }
`;
