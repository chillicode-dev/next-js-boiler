// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
// Internals
import Container from 'components/Container';
import Typography from 'components/Typography';
import style from './style.scss';

const Section = ({className, containerClassName, children, title, hasPaddings, color, ...props}) => {
  const classes = cn({
    [style.Section]: true,
    [style.hasPaddings]: hasPaddings,
    [style[color]]: color,
    [className]: className,
  });

  return (
    <section className={classes} {...props}>
      <Container className={containerClassName}>
        {title && (
          <Typography variant="heading1" className={style.title} tagName="h2" weight="bold" uppercase>
            {title}
          </Typography>
        )}
        <div>{children}</div>
      </Container>
    </section>
  );
};

Section.defaultProps = {
  className: '',
  containerClassName: '',
  title: '',
  hasPaddings: false,
  color: 'transparent',
};

Section.propTypes = {
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  hasPaddings: PropTypes.bool,
  color: PropTypes.oneOf(['transparent', 'bg', 'gray']),
};

export default Section;
