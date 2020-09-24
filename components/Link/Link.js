// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import {useRouter} from 'next/router';
// Internals
import {url} from 'utils';

const Link = ({className, activeClassName, children, href, external, targetBlank, protocol, onClick, ...props}) => {
  const router = useRouter();
  const classes = cn({
    [activeClassName]: activeClassName && router.pathname === href,
    [className]: className,
  });
  const nativeHtmlProps = {
    className: classes,
    ...props,
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

  // Return plain <a> with onClick event with internal links
  const handleLinkClick = event => {
    // Prevent link behavior if onClick handler exists
    if (typeof onClick === 'function') {
      const result = onClick(event);
      if (result === false) {
        event.preventDefault();
        return;
      }
    }

    // Check event preventing (from react-router's <Link />)
    if (
      !event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore everything but left clicks
      !targetBlank && // let browser handle "target=_blank" etc.
      !(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) // ignore clicks with modifier keys
    ) {
      event.preventDefault();
      router.push(href);
    }
  };

  // Return next/link if link is internal
  return (
    <a href={href} onClick={handleLinkClick} {...nativeHtmlProps}>
      {children}
    </a>
  );
};

Link.defaultProps = {
  className: '',
  activeClassName: '',
  external: false,
  targetBlank: false,
  protocol: '',
  onClick: null,
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  className: PropTypes.string,
  activeClassName: PropTypes.string,
  external: PropTypes.bool,
  targetBlank: PropTypes.bool,
  protocol: PropTypes.string,
  onClick: PropTypes.func,
};

export default Link;
