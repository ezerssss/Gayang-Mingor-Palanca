import React from 'react';
import { SelectContainer } from '../../../styles/HomePage.styles';
import Select from 'react-select';

const Filters = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  return (
    <SelectContainer>
      <Select
        options={options}
        className="react-select-container"
        classNamePrefix="react-select"
      />

      <Select
        options={options}
        className="react-select-container-block"
        classNamePrefix="react-select"
      />
    </SelectContainer>
  );
};

export default Filters;
