// Vendor
import React from 'react';
// Internals
import Layout from 'components/Layout';
import PrivacyPolicy from 'sections/privacy/PrivacyPolicy';

const Home = () => {
  return (
    <Layout title="Privacy Policy" type="public">
      <PrivacyPolicy />
    </Layout>
  );
};

export default Home;
