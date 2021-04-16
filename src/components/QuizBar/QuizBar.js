import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button/Button';

const StyledQuizBar = styled.nav`
  width: 100%;
  height: 120px;
  position: fixed;
  top: 15vh;
  background-color: ${({ theme }) => theme.grey100};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;

  @media (min-width: 1200px) {
    position: relative;
    width: 35%;
    top: 0;
    right: -55%;
    transform: translateX(0);
  }
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

const StyledListItem = styled.li`
  width: 28%;
  list-style: none;
  font-size: 2rem;
  text-decoration: none;
  margin-bottom: 10px;
  color: hsl(204, 57%, 34%);
  transition: color 0.2s;

  @media (min-width: 1200px) {
    width: 25%;
  }
`;

const StyledParagraph = styled.p`
  color: #000000;
  font-size: ${({ theme }) => theme.fontSize.m};
  text-align: center;
`;

const QuizBar = ({ className, open }) => (
  <StyledQuizBar className={className} open={open}>
    <StyledParagraph>Quiz:</StyledParagraph>
    <StyledList>
      <StyledListItem>
        <Button className="active" type="button">
          Flags
        </Button>
      </StyledListItem>
      <StyledListItem>
        <Button type="button">Capitals</Button>
      </StyledListItem>
    </StyledList>
  </StyledQuizBar>
);

export default QuizBar;
