// Vendor
import {Provider} from 'mobx-react';
import {getSnapshot} from 'mobx-state-tree';
import PropTypes from 'prop-types';
// Internals
import {useStore} from '@/stores';
// Styles
import '@/styles/base.scss';

const App = ({Component, pageProps}) => {
  // Initialize Redux from page
  const store = useStore(pageProps.initialState);

  console.log(getSnapshot(store));

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App;
