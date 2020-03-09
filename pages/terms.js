// Vendor
import React from 'react';
// Internals
import Layout from 'components/Layout';
import TermsPage from 'sections/terms/TermsPage';

const Home = () => {
  return (
    <Layout title="Terms of service" type="public">
      <TermsPage />
    </Layout>
  );
};

export default Home;
