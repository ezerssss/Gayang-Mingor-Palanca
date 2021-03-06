import styled, { keyframes } from 'styled-components';
import { TEXT_SECONDARY_GRAY } from '../constants/colors';

const fade1 = keyframes`
  0% {opacity: 1;}
  100% {opacity: 0;}
`;
const fade2 = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`;
const resizeAndTranslate = keyframes`
  0% {font-size: 96px; top: calc(50% - 96px);}
  100% {font-size: 48px; top: 50px;}
`;
const smallMobileTranslate = keyframes`
  0% {top: calc(50% - 40px);}
  100% {top: 50px;}
`;
const extraSmallMobileTranslate = keyframes`
  0% {top: calc(50% - 35px);}
  100% {top: 50px;}
`;
const goUp = keyframes`
  0% {margin-top: 100vh;}
  100% {margin-top: 180px; margin-bottom: 50px;}
`;
const allowOverflow = keyframes`
  0% {overflow: hidden;}
  100% {overflow-y: scroll;}
`;

interface PropsInterface {
  isFirst?: boolean;
  isEmpty?: boolean;
}

export const AnimationContainer = styled.div`
  height: 100vh;
  position: relative;
  width: 100%;
  overflow: hidden;
  animation: ${allowOverflow} 0.1s;
  animation-delay: 5.5s;
  animation-fill-mode: forwards;
`;

export const WelcomeText = styled.div<PropsInterface>`
  position: absolute;
  text-align: center;
  width: 90%;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: calc(50% - 96px);
  font-weight: 700;
  font-size: 96px;
  animation: ${(props) => (props.isFirst ? fade1 : fade2)}
      ${(props) => (props.isFirst ? '2s' : '3s')},
    ${resizeAndTranslate} 2s;
  opacity: ${(props) => (props.isFirst ? '100' : '0')};
  animation-delay: 1s, 3.2s;
  animation-fill-mode: forwards;

  h1 {
    margin: 0;
  }

  #logout {
    cursor: pointer;
  }

  @media screen and (max-width: 800px) {
    top: calc(50% - 40px);
    font-size: 40px;
    animation: ${(props) => (props.isFirst ? fade1 : fade2)}
        ${(props) => (props.isFirst ? '2s' : '3s')},
      ${smallMobileTranslate} 2s;
    animation-delay: 1s, 3.2s;
    animation-fill-mode: forwards;
  }
  @media screen and (max-width: 550px) {
    top: calc(50% - 35px);
    font-size: 35px;
    animation: ${(props) => (props.isFirst ? fade1 : fade2)}
        ${(props) => (props.isFirst ? '2s' : '3s')},
      ${extraSmallMobileTranslate} 2s;
    animation-delay: 1s, 3.2s;
    animation-fill-mode: forwards;
  }
`;

export const PalancasContainer = styled.div<PropsInterface>`
  margin-top: 100vh;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  text-align: center;
  animation: ${goUp} 2.5s;
  animation-delay: 3s;
  animation-fill-mode: forwards;

  column-count: ${(props) => (props.isEmpty ? 1 : 3)};
  column-gap: 10px;

  @media screen and (max-width: 1010px) {
    column-count: 2;
  }
  @media screen and (max-width: 630px) {
    column-count: 1;
  }
`;

PalancasContainer.defaultProps = {
  isEmpty: true,
};

export const LetterDiv = styled.div`
  page-break-inside: avoid;
  break-inside: avoid-column;
  width: 100%;
  background-color: white;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  margin-bottom: 20px;
  padding: 22px;
  box-sizing: border-box;
  text-align: left;
  transition: 0.3s ease-out;
  word-wrap: break-word;
  position: relative;
`;

export const NewLetterIndicator = styled.div`
  position: absolute;
  right: -6px;
  top: 10px;
`;

export const LetterBody = styled.div`
  width: 100%;
  height: 80%;
  font-weight: 400;
  font-size: 16px;
  position: relative;

  pre {
    font-family: 'Inter';
    margin: 0;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
  }
`;

export const LetterSender = styled.div`
  width: 100%;
  text-align: right;
  font-weight: 400;
  font-size: 13px;
  margin-top: 15px;
  color: ${TEXT_SECONDARY_GRAY};
`;
