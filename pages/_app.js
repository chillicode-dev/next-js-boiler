// Vendor
import {Provider} from 'mobx-react';
import PropTypes from 'prop-types';
// Internals
import {useStore} from '@/stores';
import Header from '@/components/Header';
// Styles
import '@/styles/base.scss';

const App = ({Component, pageProps}) => {
  // Initialize Redux from page
  const store = useStore(pageProps.initialState);

  return (
    <Provider store={store}>
      <Header />
      <main style={{paddingTop: 30}}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App;
