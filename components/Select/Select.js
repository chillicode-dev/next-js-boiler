// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
// Internals
import {theme, styles} from './style';

/**
 * App-styled Select control based on react-select library
 * @see https://react-select.com/home
 * @param options {object[]}
 * @param props {object}
 * @return {React.Component}
 * @constructor
 */
const Select = ({options, ...props}) => {
  return <ReactSelect options={options} theme={theme} styles={styles} {...props} />;
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Select;
