// Vendor
import React from 'react';
// Internals
import Layout from 'components/Layout';
import IntroSection from 'sections/home/IntroSection';
import FeaturesSection from 'sections/home/FeaturesSection';
import PopUpSection from 'sections/home/PopUpSection';
import InstagramSection from 'sections/home/InstagramSection';

const Home = () => {
  return (
    <Layout type="public" useContainer={false}>
      <IntroSection />
      <PopUpSection />
      <FeaturesSection />
      <InstagramSection />
    </Layout>
  );
};

export default Home;
