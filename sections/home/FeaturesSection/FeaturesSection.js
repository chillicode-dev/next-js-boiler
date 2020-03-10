// Vendor
import React from 'react';
// Internals
import Section from 'components/Section';
import Typography from 'components/Typography';
import homeImg1 from 'assets/img/home/home1-m.jpg';
import homeImg2 from 'assets/img/home/home2-m.jpg';
import hangerImage from 'assets/img/home/hanger.png';
import MagnifierIcon from 'assets/icons/basic_magnifier.svg';
import MessageIcon from 'assets/icons/basic_elaboration_message_check.svg';
import UploadIcon from 'assets/icons/basic_elaboration_browser_download.svg';
import ArrowsIcon from 'assets/icons/arrows_shrink_diagonal2.svg';
import CalendarIcon from 'assets/icons/basic_calendar.svg';
import style from './style.scss';

const FeaturesSection = () => {
  return (
    <div className={style.FeaturesSection}>
      <Section title="FOR STYLISTS" id="for-stylists-section" hasPaddings>
        <div className={style.row}>
          <div className={style.col}>
            <article className={style.feature}>
              <MagnifierIcon width={65} height={65} />
              <div className={style.featureContent}>
                <Typography variant="heading3" weight="bold">
                  Navigate
                </Typography>
                <Typography variant="annotation">
                  Navigate easily through dozens of items uploaded by your favorite designers & showrooms.
                </Typography>
              </div>
            </article>
            <article className={style.feature}>
              <MessageIcon width={65} height={65} />
              <div className={style.featureContent}>
                <Typography variant="heading3" weight="bold">
                  Request
                </Typography>
                <Typography variant="annotation">Request to pull items in just one click hassle-free</Typography>
              </div>
            </article>
            <article className={style.feature}>
              <img src={hangerImage} alt="Hanger image" />
              <div className={style.featureContent}>
                <Typography variant="heading3" weight="bold">
                  Pick up
                </Typography>
                <Typography variant="annotation">
                  Pick up your pulled items and keep track of all your pulls at one place.
                </Typography>
              </div>
            </article>
          </div>
          <img src={homeImg1} className={style.col} alt="Stylists image" />
        </div>
      </Section>
      <Section title="FOR DESIGNERS | SHOWROOMS" color="gray" hasPaddings>
        <div className={style.row}>
          <img src={homeImg2} className={style.col} alt="Designers image" />
          <div className={style.col}>
            <article className={style.feature}>
              <UploadIcon width={65} height={65} />
              <div className={style.featureContent}>
                <Typography variant="heading3" weight="bold">
                  Upload
                </Typography>
                <Typography variant="annotation">Build your online showroom by uploading your looks.</Typography>
              </div>
            </article>
            <article className={style.feature}>
              <ArrowsIcon width={65} height={65} />
              <div className={style.featureContent}>
                <Typography variant="heading3" weight="bold">
                  Connect
                </Typography>
                <Typography variant="annotation">Connect with stylists & allow them to pull your looks.</Typography>
              </div>
            </article>
            <article className={style.feature}>
              <CalendarIcon width={65} height={65} />
              <div className={style.featureContent}>
                <Typography variant="heading3" weight="bold">
                  Track
                </Typography>
                <Typography variant="annotation">Track all pulls and requests online.</Typography>
              </div>
            </article>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default FeaturesSection;
