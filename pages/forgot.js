// Vendor
import React from 'react';
// Internals
import Layout from 'components/Layout';
import ResetForm from 'sections/forgot/ResetForm';

const Home = () => {
  return (
    <Layout title="Login" type="public">
      <ResetForm />
    </Layout>
  );
};

export default Home;
