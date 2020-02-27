// Vendor
import React from 'react';
// Internals
import Layout from 'components/Layout';
import LoginForm from 'sections/login/LoginForm';

const Home = () => {
  return (
    <Layout title="Login">
      <LoginForm />
    </Layout>
  );
};

export default Home;
