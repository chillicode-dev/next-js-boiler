// Vendor
import React from 'react';
// Internals
import FormControl from 'components/FormControl';
import TextInput from 'components/TextInput';
import Button from 'components/Button';
import Select from 'components/Select';
import style from './style.scss';

const SignupForm = () => {
  return (
    <form className={style.SignupForm}>
      <div className={style.controls}>
        <div className={style.halfItems}>
          <FormControl className={style.halfItem}>
            <TextInput type="text" placeholder="First name *" />
          </FormControl>
          <FormControl className={style.halfItem}>
            <TextInput type="text" placeholder="Last name *" />
          </FormControl>
        </div>
        <FormControl>
          <TextInput type="email" placeholder="Your Email *" />
        </FormControl>
        <FormControl>
          <TextInput type="password" placeholder="Password *" />
        </FormControl>
        <FormControl>
          <TextInput type="password" placeholder="Confirm password *" />
        </FormControl>
        <FormControl>
          <TextInput type="text" placeholder="Agency/Company" />
        </FormControl>
        <FormControl>
          <TextInput type="text" placeholder="Instagram user name *" />
        </FormControl>
        <FormControl>
          {/* TODO: add Google Places API cities */}
          <Select
            options={[
              {value: 'london', label: 'London'},
              {value: 'new-york', label: 'New York City'},
              {value: 'berlin', label: 'Berlin'},
              {value: 'paris', label: 'Paris'},
              {value: 'moscow', label: 'Moscow'},
            ]}
            placeholder="Select city"
          />
        </FormControl>
      </div>
      <Button variant="brand" type="submit" wide>
        SIGN UP
      </Button>
    </form>
  );
};

export default SignupForm;
