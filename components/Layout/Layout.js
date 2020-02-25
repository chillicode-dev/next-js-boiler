// Vendor
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
// Internals
import Header from 'components/Header';
import Footer from 'components/Footer';
import style from './style.scss';

export default class Layout extends PureComponent {
  static defaultProps = {
    className: '',
  };

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const {className, children} = this.props;

    return (
      <div className={cn(style.Layout, className)}>
        <Header />
        <main className={style.main}>{children}</main>
        <Footer />
      </div>
    );
  }
}
