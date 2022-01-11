import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme, primary }) => (primary ? theme.primary : '#fff')};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.s};
  transition: transform 0.3s;
  z-index: 990000;

  &:hover {
    transform: translateY(-5px);
  }

  @media (min-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export default StyledLink;
