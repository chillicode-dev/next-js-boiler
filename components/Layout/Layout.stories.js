import Layout from './Layout';

export default {
  title: 'App/Layout',
  component: Layout,
  argTypes: {},
};

const Template = args => <Layout {...args}>Page content here</Layout>;

export const Default = Template.bind({});
Default.args = {};
