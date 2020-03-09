// Vendor
import React from 'react';
// Internals
import Layout from 'components/Layout';
import JoinSection from 'sections/signup/JoinPage';

const Home = () => {
  return (
    <Layout title="REQUEST TO JOIN" type="public">
      <JoinSection />
    </Layout>
  );
};

export default Home;
