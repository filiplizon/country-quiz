import React from 'react';
import styled from 'styled-components';
import actions from 'actions/actions';
import { connect } from 'react-redux';
import Form from 'components/Form/Form';
import IconButton from 'components/IconButton/IconButton';
import { GrFormClose as CloseIcon } from 'react-icons/gr';

const Modal = ({ isModalOpen, setModalOpenFn, formType, resetForm }) => (
  <StyledWrapper isModalOpen={isModalOpen}>
    <StyledIconButton
      onClick={() => {
        setModalOpenFn(!isModalOpen);
        resetForm(true);
      }}
      isVisible
      color="white"
    >
      <CloseIcon />
    </StyledIconButton>
    <Form isModalOpen={isModalOpen} setModalOpenFn={setModalOpenFn} formType={formType} />
  </StyledWrapper>
);

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  z-index: 100;
  opacity: ${({ isModalOpen }) => (isModalOpen ? 1 : 0)};
  transition: 0.3s opacity;
  display: ${({ isModalOpen }) => (isModalOpen ? 'block' : 'none')};

  @media (min-width: 1100px) {
    top: 50%;
    left: 50%;
    width: 25%;
    height: 45%;
    background-color: ${({ theme }) => theme.secondary};
    transform: translate(-50%, -50%);
    opacity: ${({ isModalOpen }) => (isModalOpen ? 1 : 0)};
    /* border: ${({ theme }) => `1px solid ${theme.secondary}`}; */
    box-shadow: 0px 0px 4px -1px rgba(66, 68, 90, 1);
  }
`;

const StyledIconButton = styled(IconButton)`
  position: absolute;
  background-color: #fff;
  top: calc(15vh + 10px);
  right: 10px;

  @media (min-width: 1100px) {
    right: 5px;
    top: 5px;
  }
`;

const mapDispatchToProps = (dispatch) => ({
  resetForm: () => dispatch(actions.resetForm()),
});

export default connect(null, mapDispatchToProps)(Modal);
