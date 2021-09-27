import React from 'react';

import useInput from '../hooks/use-input';
import "../App.css";


const SimpleInput = (props) => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: FirstNameInputHasError,
    valueChangeHandler: FirstNameChangeHandler,
    inputBlurHandler: FirstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: LastNameInputHasError,
    valueChangeHandler: LastNameChangeHandler,
    inputBlurHandler: LastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes('@'));

  const {
    value: enteredEnterpriseId,
    isValid: enteredEnterpriseIdIsValid,
    hasError: EnterpriseIdInputHasError,
    valueChangeHandler: EnterpriseIdChangeHandler,
    inputBlurHandler: EnterpriseIdBlurHandler,
    reset: resetEnterpriseIdInput,
  } = useInput((value) => value.length ===6);

  const {
    value: enteredBirthdate,
    isValid: enteredBirthdateIsValid,
    hasError: BirthdateInputHasError,
    valueChangeHandler: BirthdateChangeHandler,
    inputBlurHandler: BirthdateBlurHandler,
    reset: resetBirthdateInput,
  } = useInput((value) => value.trim() !== '');

  let formIsValid = false;

  if (enteredFirstNameIsValid && 
      enteredLastNameIsValid && 
      enteredEmailIsValid && 
      enteredEnterpriseIdIsValid && 
      enteredBirthdateIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredFirstNameIsValid) {
      return;
    }
   
    if (!enteredLastNameIsValid) {
      return;
    }
    console.log(enteredLastName);

    if (!enteredEmailIsValid) {
      return;
    }
    console.log(enteredEmail);

    if (!enteredEnterpriseIdIsValid) {
      return;
    }
    console.log(enteredEnterpriseId);

    if (!enteredBirthdateIsValid) {
      return;
    }
    console.log(enteredBirthdate);

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
    resetEnterpriseIdInput();
    resetBirthdateInput();
  }

  const FirstNameInputClasses = FirstNameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const LastNameInputClasses = LastNameInputHasError
    ? 'form-control invalid'
    : 'form-control';  

  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';

    const EnterpriseIdInputClasses = EnterpriseIdInputHasError
    ? 'form-control invalid'
    : 'form-control';

    const BirthdateInputClasses = BirthdateInputHasError
    ? 'form-control invalid'
    : 'form-control';

    return (
      <form onSubmit={formSubmissionHandler}>
          <div className='container'>
              <div className='app-wrapper'>
                  <div>
                      <h2>Workbook Signup</h2>
                  </div>
                  <div className='form-control'>
                      <div className={FirstNameInputClasses}>
                          <label htmlFor='first name'>First Name</label>
                          <input
                          type='text'
                          name='name'
                          id='first name'
                          onChange={FirstNameChangeHandler}
                          onBlur={FirstNameBlurHandler}
                          value={enteredFirstName}
                          />
                          {FirstNameInputHasError && (
                              <p className='error-text'>Please enter first name.</p>
                          )}    
                      </div>

                  <div className={LastNameInputClasses}>
                          <label htmlFor='last name'>Last Name</label>
                          <input
                          type='text'
                          name='name'
                          id='last name'
                          onChange={LastNameChangeHandler}
                          onBlur={LastNameBlurHandler}
                          value={enteredLastName}
                          />
                          {LastNameInputHasError && (
                              <p className='error-text'>Please enter last name.</p>
                          )}    
                      </div>

                  <div className={emailInputClasses}>
                          <label htmlFor='first name'>Email</label>
                          <input
                          type='email'
                          name='name'
                          id='email'
                          onChange={emailChangeHandler}
                          onBlur={emailBlurHandler}
                          value={enteredEmail}
                          />
                          {emailInputHasError && (
                              <p className='error-text'>Please enter valid email adress.</p>
                          )}    
                      </div>

                      <div className={EnterpriseIdInputClasses}>
                          <label htmlFor='first name'>Enterprise ID</label>
                          <input
                          type='number'
                          name='name'
                          id='enterprise id'
                          onChange={EnterpriseIdChangeHandler}
                          onBlur={EnterpriseIdBlurHandler}
                          value={enteredEnterpriseId}
                          />
                          {EnterpriseIdInputHasError && (
                              <p className='error-text'>Please enter valid six-digit Enterprise ID.</p>
                          )}    
                      </div>

                      <div className={BirthdateInputClasses}>
                          <label htmlFor='birthdate'>Birthdate</label>
                          <input
                          type='date'
                          name='name'
                          id='birthdate'
                          onChange={BirthdateChangeHandler}
                          onBlur={BirthdateBlurHandler}
                          value={enteredBirthdate}
                          />
                          {BirthdateInputHasError && (
                              <p className='error-text'>Birthdate is required.</p>
                          )}    
                      </div>

                      <div className='form-actions'>
                          <button disabled={!formIsValid}>Submit</button>
                      </div>

                  </div>    
              </div>
          </div>  
      </form>          
              
  );
};

export default SimpleInput;