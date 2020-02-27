// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
// Internals
import LoaderIcon from 'assets/icons/loader.svg';
import Link from 'components/Link';
import style from './style.scss';

const defaultIconSize = 25;

const Button = ({className, children, variant, href, isLoading, icon, iconSize, wide, ...props}) => {
  const classes = cn({
    [style.Button]: true,
    [style[variant]]: variant,
    [style.loading]: isLoading,
    [style.hasIcon]: icon,
    [style.wide]: wide,
    [className]: className,
  });
  const TagName = href ? Link : 'button';
  const Icon = icon;
  const combinedProps = {
    className: classes,
    ...props,
  };
  if (href) {
    combinedProps.href = href;
    combinedProps.disableStyle = true;
  }

  return (
    <TagName {...combinedProps}>
      {isLoading && (
        <span className={style.loaderBox}>
          <LoaderIcon width={defaultIconSize} height={defaultIconSize} />
        </span>
      )}
      <span className={style.content}>
        {icon && <Icon width={iconSize} height={iconSize} className={style.icon} />}
        {children && <span className={style.contentText}>{children}</span>}
      </span>
    </TagName>
  );
};

Button.defaultProps = {
  children: null,
  href: '',
  isLoading: false,
  icon: '',
  iconSize: defaultIconSize,
  className: '',
  wide: false,
};

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['reset', 'brand', 'gray']).isRequired,
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  isLoading: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  iconSize: PropTypes.number,
  className: PropTypes.string,
  wide: PropTypes.bool,
};

export default Button;
