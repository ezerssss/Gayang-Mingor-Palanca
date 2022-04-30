import styled from 'styled-components';
import { TEXT_GRAY } from '../constants/colors';

export const SignInDiv = styled.div`
  text-align: right;
  margin-top: 42px;
  margin-right: 42px;
  cursor: pointer;

  @media screen and (max-width: 770px) {
    margin-right: 12px;
  } ;
`;

export const TitleDiv = styled.div`
  font-weight: 700;
  font-size: 96px;
  margin-top: 80px;

  @media screen and (max-width: 770px) {
    font-size: 40px;
  } ;
`;

export const SubtitleDiv = styled.div`
  font-weight: 400;
  font-size: 18px;
  max-width: 709px;
  margin: auto;
  margin-top: 21px;
  margin-bottom: 50px;

  @media screen and (max-width: 760px) {
    font-size: 15px;
    padding: 0px 25px;
  } ;
`;

export const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 12px;
  color: ${TEXT_GRAY};

  .react-select-container {
    border-radius: 200px 0px 0px 200px;
    width: 60%;

    .react-select__control {
      border-radius: 200px 0px 0px 200px;
    }
  }
  .react-select-container-section {
    border-radius: 0px 200px 200px 0px;
    width: 10%;

    .react-select__control {
      border-radius: 0px 200px 200px 0px;
    }

    @media screen and (max-width: 1100px) {
      width: 15%;
    }
    @media screen and (max-width: 770px) {
      width: 20%;
    }
    @media screen and (max-width: 570px) {
      width: 25%;
    }
    @media screen and (max-width: 440px) {
      width: 30%;
    }
  }
`;

export const GalleryContainer = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  margin-bottom: 100px;
`;

export const ImageContainer = styled.div`
  margin-bottom: 20px;
  cursor: pointer;
  box-sizing: border-box;
  height: 262px;
  width: 206px;

  img {
    border-radius: 50%;
    filter: grayscale(100%);
    transition: 0.5s ease;
  }

  :hover {
    img {
      filter: grayscale(0%);
    }
  }
`;

export const CircleImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #aaaaaa;
  width: 206px;
  height: 206px;
`;

export const ImageName = styled.div`
  margin: auto;
  width: 200px;
  margin-top: 13px;
  font-weight: 700;
  font-size: 20px;
`;

export const ImageNickName = styled.div`
  font-weight: 400;
  font-size: 12px;
`;

export const ModalContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  position: relative;
  color: white;

  #close {
    position: absolute;
    top: 19px;
    right: 19px;
    cursor: pointer;
  }

  @media screen and (max-width: 950px) {
    display: block;
    overflow-y: scroll;

    #close {
      display: none;
    }
  }
`;

export const ImageModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  background-color: #2b2b2b;
  text-align: center;
  position: relative;

  @media screen and (max-width: 950px) {
    width: 100%;

    div {
      width: 100%;
    }
  }

  #mobile {
    display: none;

    @media screen and (max-width: 950px) {
      display: block;
      position: absolute;
      top: 19px;
      right: 19px;
      cursor: pointer;
    }
  }

  #scroll {
    position: absolute;
    display: none;
    color: white;
    font-size: 12px;
    bottom: 20px;
    left: 10px;

    @media screen and (max-width: 950px) {
      display: block;
    }
  }

  img {
    margin: auto;
    height: 400px;
    border-radius: 50%;

    @media screen and (max-width: 560px) {
      height: 350px;
    }
    @media screen and (max-width: 460px) {
      height: 220px;
    }
  }

  #name {
    font-weight: 700;
    font-size: 24px;
  }
  #nickname {
    font-weight: 400;
    font-size: 14px;
  }
`;
