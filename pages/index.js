// Vendor
import React from 'react';
// Internals
import Layout from 'components/Layout';
import IntroSection from 'sections/home/IntroSection';
import FeaturesSection from 'sections/home/FeaturesSection';
import InstagramSection from 'sections/home/InstagramSection';

const Home = () => {
  return (
    <Layout useContainer={false}>
      <IntroSection />
      <FeaturesSection />
      <InstagramSection />
    </Layout>
  );
};

export default Home;
