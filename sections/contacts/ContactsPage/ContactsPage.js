// Vendor
import React from 'react';
// Internals
import Typography from 'components/Typography';
import style from './style.scss';

const ContactsPage = () => {
  return (
    <div className={style.ContactsPage}>
      <Typography className={style.title} variant="heading1">
        Contacts
      </Typography>
      <div className={style.contact}>
        <Typography variant="annotation">Email</Typography>
        <Typography variant="annotation">natalie@pullquest.net</Typography>
      </div>
      <div className={style.contact}>
        <Typography variant="annotation">Phone</Typography>
        <Typography variant="annotation">310-871-5002</Typography>
      </div>
      <div className={style.contact}>
        <Typography variant="annotation">Address</Typography>
        <Typography variant="annotation">Los Angeles, CA</Typography>
      </div>
    </div>
  );
};

export default ContactsPage;
