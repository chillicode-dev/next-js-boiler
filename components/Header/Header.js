// Vendor
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
// Internals
import Link from 'components/Link';
import {headerHeight} from 'styles/config/grid';
import logoImg from 'assets/img/logo.png';
import style from './style.scss';

export default class Header extends PureComponent {
  static defaultProps = {
    className: '',
  };

  static propTypes = {
    className: PropTypes.string,
  };

  state = {
    isSticky: false,
  };

  componentDidMount() {
    this.handleWindowScroll();
    window.addEventListener('scroll', this.handleWindowScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleWindowScroll);
  }

  handleWindowScroll = () => {
    this.setState({
      isSticky: window.pageYOffset > headerHeight * 2,
    });
  };

  render() {
    const {className} = this.props;
    const {isSticky} = this.state;
    const classes = cn({
      [style.Header]: true,
      [style.sticky]: isSticky,
      [className]: className,
    });

    return (
      <header className={classes}>
        <div className={style.logoCol}>
          <Link href="/">
            <img src={logoImg} className={style.logo} alt="Logo" />
          </Link>
        </div>
        <div className={style.authCol}>
          <Link href="/join" className={style.navItem} activeClassName={style.navItemActive}>
            REQUEST TO JOIN
          </Link>
          <Link href="/login" className={style.navItem} activeClassName={style.navItemActive}>
            LOGIN
          </Link>
        </div>
      </header>
    );
  }
}
