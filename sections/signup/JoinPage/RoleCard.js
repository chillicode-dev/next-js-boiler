// Vendor
import React from 'react';
import PropTypes from 'prop-types';
// Internal
import parseHtml from 'react-html-parser';
import Typography from 'components/Typography';
import Button from 'components/Button';
import Correct from 'assets/icons/correct.svg';
import style from './style.scss';

const RoleCard = ({role, cost, services, buttonText, isComing, hasSubtitle}) => {
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
          <div className={style.costTitle}> {parseHtml(cost)}</div>
          {hasSubtitle && <div className={style.costSubtitle}>Pause or cancel anytime!</div>}
        </div>

        <div>
          <ul>{renderServices()}</ul>
          {isComing && (
            <div className={style.isComing}>
              <span className={style.brand}>Coming soon:</span> {isComing}
            </div>
          )}
        </div>
        <Button href="/signup" variant="brand">
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

RoleCard.defaultProps = {
  hasSubtitle: false,
  isComing: false,
  services: [],
  buttonText: 'TRY IT NOW',
};

RoleCard.propTypes = {
  services: PropTypes.arrayOf(PropTypes.string).isRequired,
  role: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  isComing: PropTypes.string,
  hasSubtitle: PropTypes.bool,
};

export default RoleCard;
