// Vendor
import React from 'react';
// Internals
import Layout from 'components/Layout';
import SignupForm from 'sections/signup/SignupForm';

const Home = () => {
  return (
    <Layout title="GENERAL INFORMATION" type="public">
      <SignupForm />
    </Layout>
  );
};

export default Home;
