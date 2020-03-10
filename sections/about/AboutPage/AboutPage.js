// Vendor
import React from 'react';
// Internals
import Typography from 'components/Typography';
import style from './style.scss';

const AboutPage = () => {
  return (
    <div className={style.AboutPage}>
      <Typography className={style.title} variant="heading1">
        About us
      </Typography>
      <Typography variant="annotation">
        We believe in a more collaborative fashion world by connecting brands with stylists and influencers and
        streamlining the pull process.
      </Typography>
    </div>
  );
};

export default AboutPage;
