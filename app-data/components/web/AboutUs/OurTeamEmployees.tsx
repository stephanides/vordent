import { useState } from 'react';
import { Row } from 'reactstrap';
import styled from 'styled-components';
import { employees } from './employees';
import { colors } from '../../../shared/design';
import { OurTeamEmployee } from './OurTeamEmployee';
import { EmployeeCategory } from '../../../shared/types';

export const OurTeamEmployees = () => {
  const [category, setCategory] = useState<EmployeeCategory | undefined>(
    undefined
  );
  const employeesToShow = category
    ? employees.filter((employee) => employee.category === category)
    : employees;
  return (
    <Wrapper>
      <EmployeesPicker>
        <GroupButton
          active={category === undefined}
          onClick={() => setCategory(undefined)}
        >
          Všetci
        </GroupButton>
        <GroupButton
          active={category === 'doctor'}
          onClick={() => setCategory('doctor')}
        >
          Lekári
        </GroupButton>
        <GroupButton
          active={category === 'dental'}
          onClick={() => setCategory('dental')}
        >
          Dentálna hygiena
        </GroupButton>
        <GroupButton
          active={category === 'nurse'}
          onClick={() => setCategory('nurse')}
        >
          Zdravotné sestry
        </GroupButton>
      </EmployeesPicker>
      <Row>
        {employeesToShow.map((employee) => (
          <OurTeamEmployee {...employee} />
        ))}
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const EmployeesPicker = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 53px 0;
`;

type GroupButtonProps = {
  active: boolean;
};
const GroupButton = styled.div<GroupButtonProps>`
  width: 142px;
  padding: 14px 0;
  border-radius: 25px;
  background-color: ${({ active }) => (active ? 'transparent' : '#f4f7f8')};
  border: 2px solid;
  border-color: ${({ active }) => (active ? colors.green : '#f4f7f8')};
  font-size: 12px;
  color: ${({ active }) => (active ? colors.green : colors.text)};
  margin: 0 20px;
  margin-bottom: 16px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:hover {
    color: ${colors.green};
    border-color: ${colors.green};
    background-color: transparent;
  }
`;
