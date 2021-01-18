// Vendor
import PropTypes from 'prop-types';
import cn from 'classnames';
// Internals
import style from './style.module.scss';

function ${TM:COMPONENT_NAME}({className, children}) {
  return (
    <div className={cn(style.${TM:COMPONENT_NAME}, className)}>
      {children}
    </div>
  );
}

${TM:COMPONENT_NAME}.defaultProps = {
  className: '',
};

${TM:COMPONENT_NAME}.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ${TM:COMPONENT_NAME};
