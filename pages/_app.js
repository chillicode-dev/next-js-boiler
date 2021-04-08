// Vendor
import {Provider} from 'mobx-react';
import PropTypes from 'prop-types';
// Internals
import {useStore} from '@/store';
import Layout from '@/components/Layout';
// Styles
import '@/styles/base.scss';

function App({Component, pageProps}) {
  // Initialize Redux from page
  const store = useStore(pageProps.initialState);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App;
