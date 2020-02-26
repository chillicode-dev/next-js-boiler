// Vendor
import React from 'react';
// Internals
import IntroSection from 'sections/home/IntroSection';
import FeaturesSection from 'sections/home/FeaturesSection';
import InstagramSection from 'sections/home/InstagramSection';

const Home = () => {
  return (
    <React.Fragment>
      <IntroSection />
      <FeaturesSection />
      <InstagramSection />
    </React.Fragment>
  );
};

export default Home;
