import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { NotFoundDiv } from '../styles/NotFound.styles';

const NotFound = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <NotFoundDiv>
      {isLoading ? <ClipLoader /> : <h1>Not Found...</h1>}
    </NotFoundDiv>
  );
};

export default NotFound;
