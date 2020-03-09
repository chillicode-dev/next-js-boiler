// Vendor
import React from 'react';
// Internals
import Layout from 'components/Layout';
import ContactsPage from 'sections/contacts/ContactsPage';

const Home = () => {
  return (
    <Layout type="public">
      <ContactsPage />
    </Layout>
  );
};

export default Home;
