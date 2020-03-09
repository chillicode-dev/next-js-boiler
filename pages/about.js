// Vendor
import React from 'react';
// Internals
import Layout from 'components/Layout';
import AboutPage from 'sections/about/AboutPage';

const Home = () => {
  return (
    <Layout type="public">
      <AboutPage />
    </Layout>
  );
};

export default Home;
