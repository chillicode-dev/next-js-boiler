// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
// Internals
import Typography from 'components/Typography';
import Container from 'components/Container';
import Link from 'components/Link';
import Phone from 'assets/icons/phone.svg';
import Instagram from 'assets/icons/instagram.svg';
import style from './style.scss';

const Footer = ({className}) => {
  return (
    <footer className={cn(style.Footer, className)}>
      <Container className={style.container}>
        <div className={style.col}>
          <Typography variant="heading4" className={style.colTitle} uppercase>
            Contact us
          </Typography>
          <Typography variant="paragraph" className={style.address} tagName="div">
            Los Angeles, CA
          </Typography>
          <Typography variant="annotation">
            <Phone width={14} height={18} />
            <Link href="3108715002" className={style.phone} protocol="tel">
              310-871-5002
            </Link>
          </Typography>
        </div>
        <div className={style.col}>
          <Typography variant="heading4" className={style.colTitle} uppercase>
            Our services
          </Typography>
          <ul className={style.nav}>
            <li className={style.navItem}>
              <Link href="/about" className={style.navItemLink}>
                About us
              </Link>
            </li>
            <li className={style.navItem}>
              <Link href="/privacy" className={style.navItemLink}>
                Privacy Policy
              </Link>
            </li>
            <li className={style.navItem}>
              <Link href="/terms" className={style.navItemLink}>
                Terms of Service
              </Link>
            </li>
            <li className={style.navItem}>
              <Link href="/contacts" className={style.navItemLink}>
                Contacts
              </Link>
            </li>
          </ul>
        </div>
        <div className={style.col}>
          <Typography variant="heading4" className={style.colTitle} uppercase>
            Follow us
          </Typography>
          <Link href="www.instagram.com/pullquest/" className={style.instagram} protocol="tel" hasHtml>
            <Instagram width={20} height={24} />
          </Link>
        </div>
      </Container>
    </footer>
  );
};

Footer.defaultProps = {
  className: '',
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
