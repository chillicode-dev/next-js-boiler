// Vendor
import React from 'react';
// Internals
import Layout from 'components/Layout';
import LoginForm from 'sections/login/LoginForm';

const Login = () => {
  return (
    <Layout title="Login" type="public">
      <LoginForm />
    </Layout>
  );
};

export default Login;
