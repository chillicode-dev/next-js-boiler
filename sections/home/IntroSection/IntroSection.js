// Vendor
import React from 'react';
// Internals
import Section from 'components/Section';
import Button from 'components/Button';
import Typography from 'components/Typography';
import {scrollToElementById} from 'utils/ui';
import ChevronIcon from 'assets/icons/chevron.svg';
import style from './style.scss';

const IntroSection = () => {
  return (
    <Section className={style.IntroSection} color="transparent">
      <Typography variant="heading1" className={style.title} weight="bold" uppercase>
        Pulls made easy
      </Typography>
      <Button href="/" variant="gray" className={style.button}>
        Sign up
      </Button>
      <div className={style.chevronWrapper}>
        <Button
          onClick={() => scrollToElementById('for-stylists-section')}
          iconSize={40}
          variant="reset"
          className={style.chevronButton}
          icon={ChevronIcon}
        />
      </div>
    </Section>
  );
};

export default IntroSection;
