// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
// Internals
import style from './style.scss';

const TextInput = ({className, hasError, multiline, type, ...props}) => {
  const InputTagName = multiline ? 'textarea' : 'input';
  const classes = cn({
    [style.TextInput]: true,
    [style.hasError]: hasError,
    [style.multiline]: multiline,
    [className]: className,
  });

  const inputProps = {
    className: style.input,
    ...props,
  };

  if (!multiline) {
    inputProps.type = type;
  }

  return (
    <div className={classes}>
      <InputTagName {...inputProps} />
    </div>
  );
};

TextInput.defaultProps = {
  className: '',
  hasError: false,
  multiline: false,
  type: 'text',
  value: '',
};

TextInput.propTypes = {
  className: PropTypes.string,
  hasError: PropTypes.bool,
  multiline: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default TextInput;
