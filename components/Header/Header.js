// Vendor
import PropTypes from 'prop-types';
import cn from 'classnames';
// Internals
import ExampleLogo from '@/public/assets/icons/example-logo.svg';
import style from './style.module.scss';

function Header({className, isLogoHidden}) {
  return (
    <header className={cn(style.Header, className)}>
      {isLogoHidden || <ExampleLogo className={style.logo} />}
    </header>
  );
}

Header.defaultProps = {
  className: '',
  isLogoHidden: false,
};

Header.propTypes = {
  className: PropTypes.string,
  isLogoHidden: PropTypes.bool,
};

export default Header;
