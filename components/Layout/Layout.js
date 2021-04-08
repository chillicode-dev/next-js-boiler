// Vendor
import PropTypes from 'prop-types';
import cn from 'classnames';
// Internals
import Header from '@/components/Header';
import style from './style.module.scss';

function Layout({className, children}) {
  return (
    <div className={cn(style.Layout, className)}>
      <Header />
      <main className={style.main}>{children}</main>
    </div>
  );
}

Layout.defaultProps = {
  className: '',
};

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Layout;
