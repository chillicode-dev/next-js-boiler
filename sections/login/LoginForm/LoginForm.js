// Vendor
import React from 'react';
// Internals
import FormControl from 'components/FormControl';
import TextInput from 'components/TextInput';
import Link from 'components/Link';
import Typography from 'components/Typography';
import Button from 'components/Button';
import style from './style.scss';

const LoginForm = () => {
  return (
    <form className={style.LoginForm}>
      <div className={style.controls}>
        <FormControl>
          <TextInput type="email" placeholder="Your Email *" />
        </FormControl>
        <FormControl>
          <TextInput type="password" placeholder="Password *" />
        </FormControl>
      </div>
      <Typography variant="paragraph" weight="medium" hasMargin>
        <Link href="/forgot">Forgot password?</Link>
      </Typography>
      <Button variant="brand" type="submit" wide>
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
