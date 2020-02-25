// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// Internals
import CheckIcon from 'assets/icons/check.svg';
import Typography from 'components/Typography';
import Section from 'components/Section';
import Button from 'components/Button';
import Link from 'components/Link';
import {incrementCount, decrementCount, resetCount} from 'store/modules/example';
import {isProd} from 'utils/env';

@connect(({example}) => ({
  count: example.count,
}))
class Home extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func,
    count: PropTypes.number,
  };

  increment = () => {
    this.props.dispatch(incrementCount());
  };

  decrement = () => {
    this.props.dispatch(decrementCount());
  };

  reset = () => {
    this.props.dispatch(resetCount());
  };

  render() {
    // Show this page only on dev environment
    if (isProd()) {
      return null;
    }

    const {count} = this.props;
    return (
      <React.Fragment>
        <Section title="Links list" color="gray">
          <ul>
            <li>
              <Link href="/" activeClassName="active">
                Main page
              </Link>
            </li>
            <li>
              <Link href="/about" activeClassName="active">
                About
              </Link>
            </li>
            <li>
              <Link href="//ya.ru">External</Link>
            </li>
            <li>
              <Link href="//ya.ru" targetBlank>
                External with targetBlank
              </Link>
            </li>
            <li>
              <Link href="+79993335544" protocol="tel">
                Call me
              </Link>
            </li>
            <li>
              <Link href="adlite@yandex.ru" protocol="mailto">
                Send me email
              </Link>
            </li>
          </ul>
        </Section>
        <Section title="Buttons">
          <ul>
            <li>
              <Button variant="brand">Click me</Button>
              <br />
              <br />
            </li>
            <li>
              <Button variant="brand" isLoading>
                Click me
              </Button>
              <br />
              <br />
            </li>
            <li>
              <Button variant="brand" href="//ya.ru" targetBlank>
                Link button
              </Button>
              <br />
              <br />
            </li>
            <li>
              <Button variant="brand" href="//ya.ru" icon={CheckIcon} targetBlank>
                With icon
              </Button>
              <br />
              <br />
            </li>
            <li>
              <Button variant="brand" href="//ya.ru" icon={CheckIcon} iconSize={40} targetBlank>
                With custom sized icon
              </Button>
              <br />
              <br />
            </li>
          </ul>
        </Section>
        <Section title="Redux state management example">
          <Typography variant="heading3" hasMargin>
            Redux counter: {count}
          </Typography>
          <ul>
            <li>
              <Button variant="brand" onClick={this.increment}>
                + Increment
              </Button>
              <br />
              <br />
            </li>
            <li>
              <Button variant="brand" onClick={this.decrement}>
                - Decrement
              </Button>
              <br />
              <br />
            </li>
            <li>
              <Button variant="brand" onClick={this.reset}>
                Reset
              </Button>
              <br />
              <br />
            </li>
          </ul>
        </Section>
        <Section title="Section 1">
          <Typography variant="paragraph">
            Contrary to&nbsp;popular belief, Lorem Ipsum is&nbsp;not simply random text. It&nbsp;has roots
            in&nbsp;a&nbsp;piece of&nbsp;classical Latin literature from 45&nbsp;BC, making it&nbsp;over 2000 years old.
            Richard McClintock, a&nbsp;Latin professor at&nbsp;Hampden-Sydney College in&nbsp;Virginia, looked
            up&nbsp;one of&nbsp;the more obscure Latin words, consectetur, from a&nbsp;Lorem Ipsum passage, and going
            through the cites of&nbsp;the word in&nbsp;classical literature, discovered the undoubtable source. Lorem
            Ipsum comes from sections 1.10.32 and 1.10.33 of&nbsp;&laquo;de&nbsp;Finibus Bonorum et&nbsp;Malorum&raquo;
            (The Extremes of&nbsp;Good and Evil) by Cicero, written in&nbsp;45&nbsp;BC. This book
            is&nbsp;a&nbsp;treatise on&nbsp;the theory of&nbsp;ethics, very popular during the Renaissance. The first
            line of&nbsp;Lorem Ipsum, &laquo;Lorem ipsum dolor sit amet..&raquo;, comes from a&nbsp;line in&nbsp;section
            1.10.32. The standard chunk of&nbsp;Lorem Ipsum used since the 1500s is&nbsp;reproduced below for those
            interested. Sections&nbsp;1.10.32 and 1.10.33 from &laquo;de&nbsp;Finibus Bonorum et&nbsp;Malorum&raquo;
            by&nbsp;Cicero are also reproduced in&nbsp;their exact original form, accompanied by&nbsp;English versions
            from the 1914 translation by&nbsp;H.&nbsp;Rackham.
          </Typography>
        </Section>
        <Section title="Section 2" color="gray">
          <Typography variant="paragraph">
            Contrary to&nbsp;popular belief, Lorem Ipsum is&nbsp;not simply random text. It&nbsp;has roots
            in&nbsp;a&nbsp;piece of&nbsp;classical Latin literature from 45&nbsp;BC, making it&nbsp;over 2000 years old.
            Richard McClintock, a&nbsp;Latin professor at&nbsp;Hampden-Sydney College in&nbsp;Virginia, looked
            up&nbsp;one of&nbsp;the more obscure Latin words, consectetur, from a&nbsp;Lorem Ipsum passage, and going
            through the cites of&nbsp;the word in&nbsp;classical literature, discovered the undoubtable source. Lorem
            Ipsum comes from sections 1.10.32 and 1.10.33 of&nbsp;&laquo;de&nbsp;Finibus Bonorum et&nbsp;Malorum&raquo;
            (The Extremes of&nbsp;Good and Evil) by Cicero, written in&nbsp;45&nbsp;BC. This book
            is&nbsp;a&nbsp;treatise on&nbsp;the theory of&nbsp;ethics, very popular during the Renaissance. The first
            line of&nbsp;Lorem Ipsum, &laquo;Lorem ipsum dolor sit amet..&raquo;, comes from a&nbsp;line in&nbsp;section
            1.10.32. The standard chunk of&nbsp;Lorem Ipsum used since the 1500s is&nbsp;reproduced below for those
            interested. Sections&nbsp;1.10.32 and 1.10.33 from &laquo;de&nbsp;Finibus Bonorum et&nbsp;Malorum&raquo;
            by&nbsp;Cicero are also reproduced in&nbsp;their exact original form, accompanied by&nbsp;English versions
            from the 1914 translation by&nbsp;H.&nbsp;Rackham.
          </Typography>
        </Section>
        <Section title="Typography:">
          <Typography variant="heading1" hasMargin>
            heading1
          </Typography>
          <Typography variant="heading2" hasMargin>
            heading2
          </Typography>
          <Typography variant="heading3" hasMargin>
            heading3
          </Typography>
          <Typography variant="heading4" hasMargin>
            heading4
          </Typography>
          <Typography variant="heading5" hasMargin>
            heading5
          </Typography>
          <Typography variant="heading6" hasMargin>
            heading6
          </Typography>
          <Typography variant="annotation" hasMargin>
            annotation
          </Typography>
          <Typography variant="paragraph" hasMargin>
            paragraph
          </Typography>
          <Typography variant="paragraph" uppercase>
            uppercase modifier
          </Typography>
          <Typography variant="paragraph" weight="bold">
            bold modifier
          </Typography>
          <Typography variant="paragraph" weight="bold" uppercase>
            bold and uppercase modifier
          </Typography>
          <Typography variant="paragraph" color="brand">
            color modifier
          </Typography>
        </Section>
      </React.Fragment>
    );
  }
}

export default Home;
