// Vendor
import PropTypes from 'prop-types';
import cn from 'classnames';
import Link from 'next/link';
// Internals
import ExampleLogo from '@/public/assets/icons/example-logo.svg';
import style from './style.module.scss';

function Header({className, isLogoHidden}) {
  return (
    <header className={cn(style.Header, className)}>
      {isLogoHidden || (
        <Link href="/" passHref={false}>
          <ExampleLogo className={style.logo} />
        </Link>
      )}
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
