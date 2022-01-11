import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import actions from 'actions/actions';
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
  transition: 0.2s opacity;
  display: ${({ isModalOpen }) => (isModalOpen ? 'block' : 'none')};

  @media (min-width: 768px) {
    top: 50%;
    left: 50%;
    width: 400px;
    height: 340px;
    background-color: ${({ theme }) => theme.secondary};
    transform: translate(-50%, -50%);
    opacity: ${({ isModalOpen }) => (isModalOpen ? 1 : 0)};
    box-shadow: 0px 0px 4px -1px rgba(66, 68, 90, 1);
    z-index: 100000;
  }
`;

const StyledIconButton = styled(IconButton)`
  position: absolute;
  background-color: #fff;
  top: calc(15vh + 10px);
  right: 10px;

  @media (min-width: 768px) {
    right: 5px;
    top: 5px;
  }
`;

const mapDispatchToProps = (dispatch) => ({
  resetForm: () => dispatch(actions.resetForm()),
});

export default connect(null, mapDispatchToProps)(Modal);
