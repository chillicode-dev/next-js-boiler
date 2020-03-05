// Vendor
import React from 'react';
// Internals
import Typography from 'components/Typography';
import style from './style.scss';

const PrivacyPolicy = () => {
  return (
    <div className={style.PrivacyPolicy}>
      <Typography variant="paragraph" hasMargin>
        This privacy policy has been compiled to&nbsp;better serve those who are concerned with how their
        &rsquo;Personally identifiable information&rsquo; (PII) is&nbsp;being used online. PII, as&nbsp;used in&nbsp;US
        privacy law and information security, is&nbsp;information that can be&nbsp;used on&nbsp;its own or&nbsp;with
        other information to&nbsp;identify, contact, or&nbsp;locate a&nbsp;single person, or&nbsp;to&nbsp;identify
        an&nbsp;individual in&nbsp;context. Please read our privacy policy carefully to&nbsp;get a&nbsp;clear
        understanding of&nbsp;how we&nbsp;collect, use, protect or&nbsp;otherwise handle your Personally Identifiable
        Information in&nbsp;accordance with our website.
      </Typography>
      <Typography variant="paragraph" hasMargin>
        <strong>
          What personal information do&nbsp;we&nbsp;collect from the people that visit our blog, website or&nbsp;app?{' '}
        </strong>
        When ordering or&nbsp;registering on&nbsp;our site, as&nbsp;appropriate, you may be&nbsp;asked to&nbsp;enter
        your name, email address, phone number or&nbsp;other details to&nbsp;help you with your experience.
      </Typography>
      <Typography variant="paragraph" hasMargin>
        <strong>When do&nbsp;we&nbsp;collect information?</strong> We&nbsp;collect information from you when you
        register on&nbsp;our site or&nbsp;enter information on&nbsp;our site.
      </Typography>
      <Typography variant="paragraph" hasMargin>
        <strong>How do&nbsp;we&nbsp;use your information?</strong> We&nbsp;may use the information we&nbsp;collect from
        you when you register, make a&nbsp;purchase, sign up&nbsp;for our newsletter, respond to&nbsp;a&nbsp;survey
        or&nbsp;marketing communication, surf the website, or&nbsp;use certain other site features in&nbsp;the following
        ways:
      </Typography>
      <ul className={style.list}>
        <li>
          To&nbsp;personalize user&rsquo;s experience and to&nbsp;allow&nbsp;us to&nbsp;deliver the type of&nbsp;content
          and product offerings in&nbsp;which you are most interested.
        </li>
        <li>To&nbsp;improve our website in&nbsp;order to&nbsp;better serve you.</li>
        <li>
          To&nbsp;allow&nbsp;us to&nbsp;better service you in&nbsp;responding to&nbsp;your customer service requests.
        </li>
        <li>To&nbsp;quickly process your transactions.</li>
        <li>To&nbsp;send periodic emails regarding your order or&nbsp;other products and services.</li>
      </ul>
      <Typography variant="paragraph" hasMargin>
        <strong>Gmail Sign-on&nbsp;&mdash; Google Chrome Extension</strong> In&nbsp;order to&nbsp;use your email
        address&nbsp;&mdash; you need to&nbsp;authorize&nbsp;us with your Gmail account. You can log in&nbsp;to&nbsp;our
        site using sign-in services such as&nbsp;Google&rsquo;s OAuth. These services will authenticate your identity
        and provide you the option to&nbsp;share certain personal information with&nbsp;us such as&nbsp;your name, email
        address and other Google Services you grant SalesRep.ai access to&nbsp;when login in&nbsp;for the first time.
      </Typography>
      <Typography variant="paragraph" hasMargin>
        <strong>CAN SPAM Act</strong> The CAN-SPAM Act is&nbsp;a&nbsp;law that sets the rules for commercial email,
        establishes requirements for commercial messages, gives recipients the right to&nbsp;have emails stopped from
        being sent to&nbsp;them, and spells out tough penalties for violations.
      </Typography>
      <Typography variant="paragraph" hasMargin>
        <strong>We&nbsp;collect your email address in&nbsp;order&nbsp;to:</strong> To&nbsp;be&nbsp;in&nbsp;accordance
        with CANSPAM we&nbsp;agree to&nbsp;the following:
      </Typography>
      <Typography variant="paragraph" hasMargin>
        If&nbsp;at&nbsp;any time you would like to&nbsp;unsubscribe from receiving future emails, you can email&nbsp;us
        at&nbsp;stop@PullQuest.net and we&nbsp;will promptly remove you from ALL&nbsp;correspondence.
      </Typography>
      <Typography variant="paragraph" hasMargin>
        <strong>Contacting Us&nbsp;</strong>If&nbsp;there are any questions regarding this privacy policy you may
        contact&nbsp;us using the information below.
      </Typography>
      <Typography variant="paragraph" hasMargin>
        PullQuest LLC <br /> 446&nbsp;S La&nbsp;Brea Ave 90036 Los Angeles, CA
      </Typography>
      <Typography variant="paragraph" hasMargin>
        Email Address: info@PullQuest.net
      </Typography>
      <Typography variant="paragraph" hasMargin>
        Telephone number: 310-402-8110
      </Typography>
      <Typography variant="paragraph" hasMargin>
        Last Edited on 2018-06-01
      </Typography>
    </div>
  );
};

export default PrivacyPolicy;
