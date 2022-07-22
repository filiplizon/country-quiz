import React from 'react';
import { connect } from 'react-redux';
import actions from 'actions/actions';
import Form from 'components/Form/Form';
import { GrFormClose as CloseIcon } from 'react-icons/gr';
import { StyledWrapper, StyledIconButton } from './Modal.styles';

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

const mapDispatchToProps = (dispatch) => ({
  resetForm: () => dispatch(actions.resetForm()),
});

export default connect(null, mapDispatchToProps)(Modal);
