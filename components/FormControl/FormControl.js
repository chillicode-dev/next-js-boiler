// Vendor
import React, {cloneElement, useState} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import uuid from 'uuid/v4';
// Internals
import Typography from 'components/Typography';
import style from './style.scss';

const FormControl = ({className, children, hasMargin, label, labelAlign, id, error}) => {
  const classes = cn({
    [style.FormControl]: true,
    [style[`${labelAlign}Labeled`]]: true,
    [style.hasMargin]: hasMargin,
    [style.hasError]: error,
    [className]: className,
  });
  const isErrorMessageRendered = error && typeof error === 'string';
  // useState() is used to freeze ID value after rerender
  const [idToRender] = id ? [id] : useState(uuid());

  return (
    <div className={classes}>
      <label className={style.label} htmlFor={idToRender}>
        {label}
      </label>
      <div className={style.inputWrapper}>{cloneElement(children, {id: idToRender, hasError: error})}</div>
      {isErrorMessageRendered && (
        <Typography variant="paragraph" color="error" weight="medium" className={style.errorMessage}>
          {error}
        </Typography>
      )}
    </div>
  );
};

FormControl.defaultProps = {
  className: '',
  id: '',
  error: false,
  hasMargin: true,
  label: '',
  labelAlign: 'top',
};

FormControl.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  hasMargin: PropTypes.bool,
  label: PropTypes.string,
  labelAlign: PropTypes.oneOf(['top', 'left']),
};

export default FormControl;
