// Vendor
import React from 'react';
import PropTypes from 'prop-types';
// Internal
import Typography from 'components/Typography';
import Button from 'components/Button';
import Link from 'components/Link';
import Correct from 'assets/icons/correct.svg';
import style from './style.scss';

const RoleCard = ({role, cost, hasSubtitle, services, isComing, buttonText}) => {
  const renderServices = () => {
    return services.map((service, key) => (
      <li key={key} className={style.service}>
        <Correct className={style.serviceIcon} width={14} height={24} />
        <Typography className={style.serviceText} variant="paragraph">
          {service}
        </Typography>
      </li>
    ));
  };

  return (
    <div className={style.RoleCard}>
      <div className={style.header}> {role}</div>
      <div className={style.body}>
        <div className={style.cost}>
          <div className={style.costTitle}> {cost}</div>
          {hasSubtitle && <div className={style.costSubtitle}>Pause or cancel anytime!</div>}
        </div>

        <div>
          <ul>{renderServices()}</ul>
          {isComing && (
            <div className={style.isComing}>
              <span className={style.blue}>Coming soon:</span> inventory tracking
            </div>
          )}
        </div>
        <Button variant="gray">
          <Link className={style.link} disableStyle href="/signup" targetBlank wide>
            {buttonText}
          </Link>
        </Button>
      </div>
    </div>
  );
};

RoleCard.defaultProps = {
  hasSubtitle: false,
  isComing: false,
  services: [
    'Connect with designers & PR’s',
    'Browse 2000+ looks to pull or rent',
    'Post upcoming projects and get look suggestions from brands',
    'Chat with brands and PRs',
  ],
  buttonText: 'TRY IT NOW',
};

RoleCard.propTypes = {
  services: PropTypes.arrayOf(PropTypes.string),
  role: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  hasSubtitle: PropTypes.bool,
  isComing: PropTypes.bool,
};

export default RoleCard;
