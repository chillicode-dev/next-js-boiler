// Vendor
import React, {useState} from 'react';
// Internals
import Section from 'components/Section';
import Typography from 'components/Typography';
import Button from 'components/Button';
import Link from 'components/Link';
import WwdIcon from 'assets/icons/wwd.svg';
import closeImg from 'assets/img/gray-close.png';
import style from './style.scss';

const PopUpSection = () => {
  const [isOpened, toggle] = useState(true);
  const handleHideClick = () => toggle(!isOpened);

  if (isOpened) {
    return (
      <Section className={style.PopUpSection} color="transparent">
        <Button variant="reset" className={style.close} onClick={handleHideClick}>
          <img src={closeImg} alt="Close button" />
        </Button>
        <Link
          href="https://wwd.com/fashion-news/fashion-scoops/pullquest-platform-connects-brands-stylists-1203380432/"
          targetBlank>
          <WwdIcon width={51} height={15} />
          <Typography className={style.text} variant="paragraph" weight="bold">
            Pullquest Platform Connects Brands and Stylists in Digital Showroom
          </Typography>
          <Typography className={style.text} variant="paragraph">
            &laquo;We&nbsp;want to&nbsp;be&nbsp;the go-to platform for stylists and p.r.&rsquo;s,&raquo; said cofounder
            Natalie Meyer.
          </Typography>
          <Typography className={style.text} variant="paragraph">
            By <span className={style.red}>Booth Moore</span>
          </Typography>
        </Link>
      </Section>
    );
  } else {
    return null;
  }
};

export default PopUpSection;
