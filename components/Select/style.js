import colors from 'styles/config/colors';

/**
 * @see https://react-select.com/styles#overriding-the-theme
 * @param theme {object}
 */
export const theme = theme => ({
  ...theme,
  borderRadius: 0,
  colors: {
    ...theme.colors,
    primary: colors.brandColor,
    primary75: colors.brandColor,
    primary50: colors.brandColor,
    primary25: colors.brandColorLighter,
  },
  spacing: {
    ...theme.spacing,
    menuGutter: 0,
  },
});

/**
 * @see https://react-select.com/styles#style-object
 * @type {object}
 */
export const styles = {
  control: base => ({
    ...base,
    boxShadow: 'none',
  }),
  menu: base => ({
    ...base,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.brandColor,
    borderTop: 'none',
    boxShadow: 'none',
  }),
  menuList: base => ({
    ...base,
    boxShadow: 'none',
    padding: 0,
  }),
  multiValue: base => ({
    ...base,
    borderRadius: 3,
  }),
  multiValueRemove: base => ({
    ...base,
    borderRadius: '0px 3px 3px 0px',
  }),
  option: base => ({
    ...base,
    paddingLeft: 15,
    paddingRight: 15,
  }),
  valueContainer: (base, {hasValue, isMulti}) => ({
    ...base,
    padding: hasValue && isMulti ? '4px 11px' : '4px 13px',
  }),
};
