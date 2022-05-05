import React from 'react';
import { SelectContainer } from '../../../styles/HomePage.styles';
import Select from 'react-select';
import students from '../../../constants/students';
import section from '../../../constants/sections';

interface PropsInterface {
  selectedSection: string;
  handleSelectedSection: (selected: string) => void;
  handleSelectedStudent: (selected: string) => void;
}

const Filters = (props: PropsInterface) => {
  const { selectedSection, handleSelectedSection, handleSelectedStudent } =
    props;
  return (
    <SelectContainer>
      <Select
        options={students.filter((student) => {
          if (selectedSection) {
            if (student.section === selectedSection) {
              return student;
            }
          } else {
            return student;
          }
        })}
        className="react-select-container"
        classNamePrefix="react-select"
        placeholder="Sige kinsa man"
        onChange={(e) => handleSelectedStudent(e?.label || '')}
        isClearable
      />

      <Select
        options={section}
        className="react-select-container-section"
        classNamePrefix="react-select"
        defaultValue={section[3]}
        onChange={(e) => handleSelectedSection(e?.value || '')}
      />
    </SelectContainer>
  );
};

export default Filters;
