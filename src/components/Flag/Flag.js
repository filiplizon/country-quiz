import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 140px;
  height: 100px;
  background-color: white;
`;

const StyledFlag = styled.img`
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.grey200};
`;

const Flag = ({ flag, name }) => (
  <StyledWrapper>
    <StyledFlag src={flag} alt={name} />
  </StyledWrapper>
);

export default Flag;
