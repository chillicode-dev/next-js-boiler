// Vendor
import {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import cn from 'classnames';
// Internals
import style from './style.module.scss';

class ${TM:COMPONENT_NAME} extends PureComponent {
  static defaultProps = {
    className: '',
  };

  static propTypes = {
    className: PropTypes.string,
    dispatch: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const {className} = this.props;

    return (
      <div className={cn(style.${TM:COMPONENT_NAME}, className)}>
        ${TM:COMPONENT_NAME} component
      </div>
    );
  }
}

const connector = connect(({${TM:DUCK_NAME}}) => ({
  ${TM:DUCK_NAME},
}));

export default connector(${TM:COMPONENT_NAME});