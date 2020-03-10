// Vendor
import React from 'react';
// Internals
import FormControl from 'components/FormControl';
import TextInput from 'components/TextInput';
import Button from 'components/Button';
import style from './style.scss';

const ResetForm = () => {
  return (
    <form className={style.ResetForm}>
      <FormControl>
        <TextInput type="email" placeholder="Your Email *" />
      </FormControl>
      <Button variant="brand" type="submit" wide>
        SEND EMAIL
      </Button>
    </form>
  );
};

export default ResetForm;
