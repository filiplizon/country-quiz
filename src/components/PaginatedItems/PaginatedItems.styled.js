import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
/* eslint-disable no-unneeded-ternary */
export const StyledPaginatedItems = styled(ReactPaginate)`
  &.items-container {
    list-style: none;
    display: flex;
    margin: 0;
    height: ${({ height }) => (height ? height : '10%')};
    padding: 0 30%;
    width: 100%;
    justify-content: space-around;
    font-size: 1.3rem;
    align-items: center;
    position: absolute;
    bottom: 10px;

    & li {
      cursor: pointer;

      @media (min-width: 768px) {
        font-size: ${({ theme }) => theme.fontSize.m};
      }

      @media (max-height: 600px) and (orientation: landscape) {
        font-size: ${({ theme }) => theme.fontSize.xs};
      }

      @media (min-width: 1100px) {
        font-size: ${({ theme }) => theme.fontSize.s};
      }

      &:hover,
      &.selected {
        font-weight: bold;
        color: ${({ theme }) => theme.secondary};
      }
      &.disabled:hover {
        font-weight: unset;
        cursor: unset;
        color: #000;
      }
    }
  }
`;
