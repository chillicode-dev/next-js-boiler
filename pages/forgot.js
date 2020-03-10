// Vendor
import React from 'react';
// Internals
import Layout from 'components/Layout';
import ResetForm from 'sections/forgot/ResetForm';

const Forgot = () => {
  return (
    <Layout title="Reset your password" type="public">
      <ResetForm />
    </Layout>
  );
};

export default Forgot;
