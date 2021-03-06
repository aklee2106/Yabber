import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = state => {
  return {
    errors: state.errors.session,
    formType: 'Sign Up',
    navLink: <Link to="/login">log in instead</Link>,
  };
};

const mDTP = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    clearErrors: ()=> dispatch(clearErrors())
  };
};

export default connect(mSTP, mDTP)(SessionForm);