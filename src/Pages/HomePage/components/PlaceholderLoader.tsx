import React from 'react';
import { ClipLoader } from 'react-spinners';
import {
  CircleImage,
  ImageContainer,
  ImageName,
  ImageNickName,
} from '../../../styles/HomePage.styles';

const PlaceholderLoader = () => {
  return (
    <ImageContainer>
      <CircleImage>
        <ClipLoader />
      </CircleImage>
      <ImageName>......</ImageName>
      <ImageNickName>......</ImageNickName>
    </ImageContainer>
  );
};

export default PlaceholderLoader;
