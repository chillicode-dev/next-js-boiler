// Vendor
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
// Internals
import Link from 'components/Link';
import {nav} from 'config';
import AppPropTypes from 'utils/propTypes';
import {headerHeight} from 'styles/config/grid';
import logoImg from 'assets/img/logo.png';
import style from './style.scss';

export default class Header extends PureComponent {
  static defaultProps = {
    className: '',
  };

  static propTypes = {
    className: PropTypes.string,
    type: AppPropTypes.layoutType,
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

  renderNav(items) {
    return (
      <nav className={style.nav}>
        {items.map(({title, href}, key) => (
          <Link href={href} className={style.navItem} activeClassName={style.navItemActive} key={key}>
            {title}
          </Link>
        ))}
      </nav>
    );
  }

  renderNavCols() {
    switch (this.props.type) {
      case 'public': {
        return <div className={style.userCol}>{this.renderNav(nav.publicUserCol)}</div>;
      }
      case 'user': {
        return (
          <React.Fragment>
            <div className={style.navCol}>{this.renderNav(nav.userNav)}</div>
            <div className={style.userCol}>Userbar will be here</div>
          </React.Fragment>
        );
      }
      default:
        return null;
    }
  }

  render() {
    const {className, type} = this.props;
    const {isSticky} = this.state;
    const classes = cn({
      [style.Header]: true,
      [style[`${type}LayoutType`]]: true,
      [style.sticky]: isSticky,
      [className]: className,
    });

    return (
      <header className={classes}>
        <div className={style.logoCol}>
          <img src={logoImg} className={style.logo} alt="Logo" />
          <Link href="/" className={style.logoLink}>
            Homepage
          </Link>
        </div>
        {this.renderNavCols()}
      </header>
    );
  }
}
