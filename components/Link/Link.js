// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import NextLink from 'next/link';
import {useRouter} from 'next/router';
// Internals
import {url} from 'utils';
import style from './style.scss';

const Link = ({
  className,
  activeClassName,
  children,
  href,
  external,
  targetBlank,
  protocol,
  htmlProps,
  disableStyle,
  ...props
}) => {
  const router = useRouter();
  const classes = cn({
    [style.Link]: !disableStyle,
    [activeClassName]: activeClassName && router.pathname === href,
    [className]: className,
  });
  const nativeHtmlProps = {
    className: classes,
    ...htmlProps,
  };
  const isExternal = external || url.isAbsolute(href);

  // Return plain <a> if detected that link is external or special protocol is specified
  if (isExternal || protocol) {
    nativeHtmlProps.href = href;
    if (targetBlank) {
      nativeHtmlProps.target = '_blank';
      nativeHtmlProps.rel = 'nofollow noopener';
    }
    if (protocol) {
      nativeHtmlProps.href = url.changeProtocol(nativeHtmlProps.href, protocol);
    }
    return <a {...nativeHtmlProps}>{children}</a>;
  }

  // Return next/link if link is internal
  return (
    <NextLink href={href} {...props}>
      <a {...nativeHtmlProps}>{children}</a>
    </NextLink>
  );
};

Link.defaultProps = {
  className: '',
  activeClassName: '',
  external: false,
  targetBlank: false,
  protocol: '',
  htmlProps: {},
  disableStyle: false,
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  className: PropTypes.string,
  activeClassName: PropTypes.string,
  external: PropTypes.bool,
  targetBlank: PropTypes.bool,
  protocol: PropTypes.string,
  htmlProps: PropTypes.object,
  disableStyle: PropTypes.bool,
};

export default Link;
