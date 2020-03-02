// Vendor
import React from 'react';
// Internals
import Section from 'components/Section';
import Typography from 'components/Typography';
import Link from 'components/Link';
import WwdIcon from 'assets/icons/wwd.svg';
import closeImg from 'assets/img/gray-close.png';
import style from './style.scss';

const PopUpSection = () => {
  return (
    <Section className={style.PopUpSection} color="transparent">
      <img src={closeImg} className={style.close} alt="Close button" />
      <Link
        href="https://wwd.com/fashion-news/fashion-scoops/pullquest-platform-connects-brands-stylists-1203380432/"
        targetBlank>
        <WwdIcon width={51} height={15} />
        <Typography className={style.text} variant="paragraph" weight="bold">
          Pullquest Platform Connects Brands and Stylists in Digital Showroom
        </Typography>
        <Typography className={style.text} variant="paragraph" hasHtml>
          &laquo;We&nbsp;want to&nbsp;be&nbsp;the go-to platform for stylists and p.r.&rsquo;s,&raquo; said cofounder
          Natalie Meyer.
        </Typography>
        <Typography className={style.text} variant="paragraph">
          By Booth Moore
        </Typography>
      </Link>
    </Section>
  );
};

export default PopUpSection;
