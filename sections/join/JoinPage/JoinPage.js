// Vendor
import React from 'react';
// Internals

import Typography from 'components/Typography';
import RoleCard from './RoleCard';
import style from './style.scss';

const JoinPage = () => {
  return (
    <div className={style.JoinPage} color="transparent">
      <Typography variant="paragraph" uppercase="modifier" hasHtml>
        YOU WILL GET ACCESS TO THE PLATFORM AS SOON AS YOUR APPLICATION HAS BEEN APPROVED BY THE PULLQUEST TEAM. THANK
        YOU!
      </Typography>
      <div className={style.cards}>
        <RoleCard role="Stylist, Editor &amp; Influencer" cost="FREE!" buttonText="SIGN UP" />
        <RoleCard role="Designer" cost="FREE!" hasSubtitle isComing />
        <RoleCard role="Designer" cost="FREE!" hasSubtitle isComing />
      </div>
    </div>
  );
};

export default JoinPage;
