import Header from './Header';

export default {
  title: 'App/Header',
  component: Header,
  argTypes: {},
};

const Template = args => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithHiddenLogo = Template.bind({});
WithHiddenLogo.args = {
  isLogoHidden: true,
};
