// Vendor
import React from 'react';
// Internals

import FormControl from 'components/FormControl';
import TextInput from 'components/TextInput';
import Button from 'components/Button';
import style from './style.scss';

const SignupForm = () => {
  return (
    <form className={style.SignupForm}>
      <div className={style.controls}>
        <div className={style.halfItems}>
          <FormControl className={style.halfItem}>
            <TextInput type="email" placeholder="First name *" />
          </FormControl>
          <FormControl className={style.halfItem}>
            <TextInput type="password" placeholder="Last name *" />
          </FormControl>
        </div>
        <FormControl>
          <TextInput type="password" placeholder="Your Email *" />
        </FormControl>
        <FormControl>
          <TextInput type="password" placeholder="Password *" />
        </FormControl>
        <FormControl>
          <TextInput type="password" placeholder="Confirm password *" />
        </FormControl>
        <FormControl>
          <TextInput type="password" placeholder="Agency/Company" />
        </FormControl>
        <FormControl>
          <TextInput type="password" placeholder="Instagram user name *" />
        </FormControl>
        <FormControl>
          <TextInput type="password" placeholder="City" />
        </FormControl>
      </div>
      <Button variant="brand" type="submit" wide>
        SIGN UP
      </Button>
    </form>
  );
};

export default SignupForm;
