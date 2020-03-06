// Vendor
import React from 'react';
// Internals

import Typography from 'components/Typography';
import {roles} from 'config';
import RoleCard from './RoleCard';
import style from './style.scss';

const JoinPage = () => {
  const renderCard = (props, key) => <RoleCard key={key} {...props} />;

  return (
    <div className={style.JoinPage} color="transparent">
      <Typography className={style.description} variant="paragraph" uppercase="modifier">
        YOU WILL GET ACCESS TO THE PLATFORM AS SOON AS YOUR <br />
        APPLICATION HAS BEEN APPROVED BY THE PULLQUEST TEAM. <br />
        THANK YOU!
      </Typography>
      <div className={style.cards}>{roles.map(renderCard)}</div>
    </div>
  );
};

export default JoinPage;
