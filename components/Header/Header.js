// Vendor
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
// Internals
import Link from 'components/Link';
import logoImg from 'assets/img/logo.png';
import style from './style.scss';

export default class Header extends PureComponent {
  static defaultProps = {
    className: '',
  };

  static propTypes = {
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {className} = this.props;

    return (
      <header className={cn(style.Header, className)}>
        <div className={style.logoCol}>
          <Link href="/">
            <img src={logoImg} className={style.logo} alt="Logo" />
          </Link>
        </div>
        <div className={style.toolboxCol}>
          <Link href="/" className={style.navItem} activeClassName={style.navItemActive}>
            REQUEST TO JOIN
          </Link>
          <Link href="/" className={style.navItem} activeClassName={style.navItemActive}>
            LOGIN
          </Link>
        </div>
      </header>
    );
  }
}
