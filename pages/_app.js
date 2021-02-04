// Vendor
import {Provider} from 'react-redux';
import PropTypes from 'prop-types';
// Internals
import {useStore} from 'store';
// Styles
import 'styles/base.scss';

const App = ({Component, pageProps}) => {
  // Initialize Redux from page
  const store = useStore(pageProps.reduxStore);

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
