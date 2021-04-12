// Vendor
import NextApp from 'next/app';
import PropTypes from 'prop-types';
import {Provider} from 'mobx-react';
// Internals
import Layout from '@/components/Layout';
import {withMobXStore} from '@/mobx';
// Styles
import '@/styles/base.scss';

class App extends NextApp {
  static propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
  };

  render() {
    const {Component, pageProps, store} = this.props;

    return (
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  }
}

export default withMobXStore(App);
