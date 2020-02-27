// Vendor
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
// Internals
import Header from 'components/Header';
import Footer from 'components/Footer';
import Container from 'components/Container';
import Typography from 'components/Typography';
import style from './style.scss';

export default class Layout extends PureComponent {
  static defaultProps = {
    className: '',
    title: '',
    useContainer: true,
  };

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    title: PropTypes.string,
    useContainer: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  renderPage() {
    const {children, title, useContainer} = this.props;

    if (!useContainer) {
      return children;
    }

    return (
      <Container className={style.container}>
        {title && (
          <Typography variant="heading3" tagName="h1" className={style.title} uppercase>
            {title}
          </Typography>
        )}
        {children}
      </Container>
    );
  }

  render() {
    const {className} = this.props;

    return (
      <div className={cn(style.Layout, className)}>
        <Header />
        <main className={style.main}>{this.renderPage()}</main>
        <Footer />
      </div>
    );
  }
}
