import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledQuizBar = styled.nav`
  width: 100vw;
  height: 110px;
  position: fixed;
  left: 0;
  top: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  box-shadow: ${({ open }) => (open ? '0 10px 30px -10px hsla(0, 0%, 0%, 0.1)' : 'none')};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;

  @media (min-width: 500px) and (orientation: landscape) {
    height: 100px;
  }

  @media (min-width: 768px) {
    height: 135px;
  }

  @media (min-width: 800px) and (orientation: landscape) {
    height: 100px;
  }

  @media (min-width: 1024px) {
    height: 150px;
  }

  @media (min-width: 1200px) {
    height: 15vh;
    width: 30%;
    top: 0;
    left: 65%;
    padding: 0;
    transform: translateX(0);
    box-shadow: none;
  }
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  margin: 0;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

const StyledListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28%;
  list-style: none;
  font-size: ${({ theme }) => theme.fontSize.m};
  text-decoration: none;
  margin-bottom: 10px;

  @media (min-width: 1200px) {
    width: 25%;
  }
`;

const StyledParagraph = styled.p`
  margin: 0;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.black};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align: center;

  @media (min-width: 500px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media (min-width: 800px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.primary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.s};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media (min-width: 800px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  :hover {
    color: ${({ theme }) => theme.secondary};
  }
`;

const QuizBar = ({ className, open }) => (
  <StyledQuizBar className={className} open={open}>
    <StyledParagraph>Quiz:</StyledParagraph>
    <StyledList>
      <StyledListItem>
        <StyledLink to="/quiz">Flags</StyledLink>
      </StyledListItem>
      <StyledListItem>
        <StyledLink to="/quiz">Capitals</StyledLink>
      </StyledListItem>
    </StyledList>
  </StyledQuizBar>
);

export default QuizBar;
